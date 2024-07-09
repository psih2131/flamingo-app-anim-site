import multiparty from 'multiparty';
import request from 'request';
import fs from 'fs';
import db from './../_cfg/dbClient';

const slackToken = process.env.SLACK_TOKEN || '';
const channelId = process.env.SLACK_CHANNEL_ID || '';
const postmarkToken = process.env.POSTMARK_TOKEN || '';

let ts;

let getMoreData = (message, sourceIp) => {
    return new Promise((resolve, reject) => {
        let splittedMsg, foundUdid, foundCutUdid;
        message = message.replace('Message', '\>Message');
        message = message.replace('Location', '\n= = = = = = =\nLocation');
        if (message) {
            splittedMsg = message.split('udid: ');
            if (splittedMsg.length > 1) {
                splittedMsg = splittedMsg[1].split('.');
                foundUdid = splittedMsg[0];

                splittedMsg = splittedMsg[0].split('-');
                if (splittedMsg.length < 3) foundCutUdid = splittedMsg[0];
            }
        }
        if (sourceIp) message += `\nIP address: ${sourceIp}`;

        if (foundUdid) {
            try {
                if (!db.isActive()) {
                    resolve(message);
                    return
                }
                db.client().query(`select * from fl_support_data_get('25c0783596f8dc77528ff692a9dc82d1', '${foundUdid}', '${foundCutUdid || 'EMPTY'}', '${sourceIp}');`, (err, result) => {
                    if (err) {
                        resolve(message);
                        return
                    }
                    let data = result?.rows.pop();
                    if (data?.fl_support_data_get) {
                        let d = data.fl_support_data_get;
                        let ipData = [];
                        if (d.ip_country) ipData.push(d.ip_country);
                        if (d.ip_subdivision) ipData.push(d.ip_subdivision);
                        if (d.ip_city) ipData.push(d.ip_city);
                        if (ipData.length > 0) message += '\nGeoIP2: ' + ipData.join(', ');
                        if (d.ip_autonomous_system) message += '\nIP Autonomous system: ' + d.ip_autonomous_system;

                        if (d.subs_first) message += '\n' + d.subs_first;
                        if (d.subs_qty > 1) {
                            message += '\n' + d.subs_qty_text;
                            message += '\n' + d.subs_earliest;
                            message += '\n' + d.subs_latest;
                        }
                        message += `\n\nView user's \<https://flamingo-analytics.herokuapp.com/dashboard/4-flamingo-user-profile?udid=${foundUdid}\|profile\>`
                        resolve(message);
                        return
                    }
                    resolve(message);
                    return
                });
            } catch (error) {
                if (error) {
                    resolve(message);
                    return
                }
            }
        } else {
            resolve(message);
            return
        }
    });
}

// post msg
let postMsg = (message) => {
    return new Promise((resolve, reject) => {
        request({
            method:'post',
            url:'https://slack.com/api/chat.postMessage',
            form: {
                "channel": channelId,
                "text": message
            },
            headers: {
                'Content-type': 'application/json',
                "Authorization": `Bearer ${slackToken}`
            },
            json: true,
        }, function (err, res, body) {
            if(err) {console.log(err); reject();}
            ts = body?.message?.ts;
            // console.log(body);
            resolve();
        });
    });
}


// upload attachment
let uploadAttachment = (file) => {
    return new Promise((resolve, reject) => {
        request({
            method: "POST",
            url: "https://slack.com/api/files.upload",
            port: 443,
            headers: {
                "Authorization": `Bearer ${slackToken}`,
                "Content-Type": "multipart/form-data"
            },
            formData: {
                file: fs.createReadStream(file.path),
                title: file.originalFilename,
                // initial_comment: 'may need to be linked to the previous message',
                thread_ts: ts,
                channels: channelId
            }
        }, function (err, res, body) {
            if(err) {console.log(err); reject();}
            // console.log(body);
            resolve();
        });
    });
}


// send email
let sendEmail = (email, name) => {
    return new Promise((resolve, reject) => {
        request({
            method:'post',
            url:'https://api.postmarkapp.com/email',
            body: {
                "From": "noreply@flamingo.tax",
                "To": `"${email}"`,
                // "Cc": "copied@example.com",
                // "Bcc": "blank-copied@example.com",
                "Subject": "Your Flamingo Support Request",
                "Tag": "Invitation",
                "HtmlBody": "<p>Thank you for contacting the Flamingo – Travel Days Tracker app.</p> <p>We received and are reviewing your support request. We will respond to you in one to two business days. Please don’t reply to this automated email response.</p> <p>Thank you!</p> <p>Sincerely, <br>Support | Flamingo – Travel Days Tracker <br><a href=\"https://flamingotracker.com\" target=\"_blank\">https://flamingotracker.com</a></p>",
                "TextBody": "Thank you for contacting the Flamingo – Travel Days Tracker app. \n\nWe received and are reviewing your support request. We will respond to you in one to two business days. Please don’t reply to this automated email response. \n\nThank you! \n\nSincerely, \nSupport | Flamingo – Travel Days Tracker \nhttps://flamingotracker.com",
                // "ReplyTo": "reply@example.com",
                "TrackOpens": true,
                "TrackLinks": "HtmlOnly",
                "MessageStream": "outbound"
            },
            headers: {
                "Accept": "application/json",
                "Content-type": 'application/json',
                "X-Postmark-Server-Token": postmarkToken
            },
            json: true,
        }, function (err, res, body) {
            if(err) {console.log(err); reject();}
            // console.log(body);
            resolve();
        });
    });
}

export default defineEventHandler(async (event) => {
    const req = event.node.req;
    if (req.method !== 'POST') return { success:false, error: `only POSTs are allowed` };

    let result = {};

    let form = new multiparty.Form();
    let source_ip = req.ip || req.headers['x-forwarded-for'] || req.socket?.remoteAddress;

    let parse = () => {
        return new Promise((resolve, reject) => {
            form.on('error', function(err) {
                // console.log('Error parsing form: ' + err.stack);
                resolve({ success:false, error: `${err.name}: ${err.message}` });
            });

            form.parse(req, async function(err, fields, files) {
                if (fields && fields.message && fields.message.length > 0) {
                    let message = fields.message?.pop();
                    message = await getMoreData(message, source_ip);

                    await postMsg(message);

                    if (files.file && files.file.length > 0) {
                        let f = files.file.pop();
                        let safety = 0;
                        while (f && safety < 10) {
                            await uploadAttachment(f);
                            f = files.file.pop();
                            safety++;
                        }
                    }
                    if (fields.email && fields.email.length > 0) {
                        await sendEmail(fields.email);
                    }
                    resolve({ success:true });
                } else {
                    resolve({ success:false, error: `request schema mismatch` });
                }
            });
        });
    }

    result = await parse();
    return result;
});

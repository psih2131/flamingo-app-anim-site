import multiparty from 'multiparty';
import request from 'request';
import fs from 'fs';

const token = process.env.SLACK_TOKEN || '';
const channelId = process.env.SLACK_CHANNEL_ID || '';

let ts;

// post msg
let postMsg = (udid, isSupport) => {
    return new Promise((resolve, reject) => {
        request({
            method:'post',
            url:'https://slack.com/api/chat.postMessage', 
            form: {
                "channel": channelId, 
                "text": `${isSupport ? 'File upload from' : 'Data transfer initiated from'} udid: ${udid}`
            }, 
            headers: {
                'Content-type': 'application/json', 
                "Authorization": `Bearer ${token}`
            },
            json: true,
        }, function (err, res, body) {
            if(err) {console.log(err); reject();}
            ts = body.message.ts;
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
                "Authorization": `Bearer ${token}`,
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


export default defineEventHandler(async (event) => {
    const req = event.node.req;
    // res.setHeader('Content-Type', 'application/json');
    let form = new multiparty.Form();
    let result = {};

    let parse = () => {
        return new Promise((resolve, reject) => {
            form.on('error', function(err) {
                console.log('Error parsing form: ' + err.stack);
                resolve({ "success":false, t:1 });
            });

            form.parse(req, async function(err, fields, files) {
                // res.setHeader('Content-Type', 'application/json');
                if (fields.udid && fields.udid.length > 0 && files.data && files.data.length > 0) {
                    await postMsg(fields.udid?.pop(), fields.is_support ? true : false);
                    await uploadAttachment(files.data?.pop());
                    resolve({ "success":true });
                } else {
                    resolve({ "success":false, t:2 });
                }
            });
        });
    }

    result = await parse();
    return result;
});
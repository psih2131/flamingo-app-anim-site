import request from 'request';
import db from './../_cfg/dbClient';
 
export default defineEventHandler(async (event) => {
    const req = event.node.req;
    let source_ip = req.ip || req.headers['x-forwarded-for'] || req.socket?.remoteAddress;
    
    let parse = () => {
        return new Promise((resolve, reject) => {
            let chunks = [];
            // 'data' event is emitted on every chunk received
            req.on("data", (chunk) => {
                // collecting the chunks in array
                chunks.push(chunk);
            });

            req.on("end", () => {
                // joining all the chunks received
                const data = Buffer.concat(chunks);
                // data.toString() converts Buffer data to querystring format
                const querystring = data.toString();
                let dataObj;
                try {
                    dataObj = JSON.parse(querystring)
                } catch (error) {
                    console.log('## ERROR ##', 'Unable to parse json.', error);
                    resolve();
                    return;
                }
                // console.log(dataObj);

                try {
                    if (!db.isActive()) {
                        console.log('## ERROR ##', 'Unable to find active base.', err);
                        resolve();
                        return;
                    }
                    db.client().query(`select * from fl_hooks_set('${dataObj.event.app_user_id}', '${JSON.stringify(dataObj)}', '${source_ip}');`, (err, result) => {
                        if (err) {
                            console.log('## ERROR ##', 'Unable to write to base.', err);
                            resolve();
                            return;
                        }
                        let data = result.rows.pop();
                        if (data?.fl_hooks_set) {
                            // console.log(`~~ OK ~~`);
                            const revenueCatApiKey = process.env.REVENUECAT_API_KEY || '';
                            const app_user_id = dataObj.event.app_user_id;
                            request({
                                url:`https://api.revenuecat.com/v1/subscribers/${app_user_id}`,
                                method: 'GET',
                                headers: {
                                    'Accept': 'application/json',
                                    'Authorization': `Bearer ${revenueCatApiKey}`,
                                },
                            }, (err, resp) => {
                                if (err) {
                                    console.log('## ERROR ##', err);
                                    resolve();
                                    return;
                                }

                                try {
                                    dataObj = JSON.parse(resp.body)
                                } catch (error) {
                                    console.log('## ERROR ##', 'Unable to parse 2nd json.', error);
                                    resolve();
                                    return;
                                }
                                db.client().query(`select * from fl_subscriptions_rc_set('${app_user_id}', '${JSON.stringify(dataObj)}');`, (err, result) => {
                                    if (err) {
                                        console.log('## ERROR ##', 'Unable to write 2nd to base.', err);
                                        resolve();
                                        return;
                                    }
                                    let data = result.rows.pop();
                                    if (data?.fl_subscriptions_rc_set) {
                                        // console.log(`~~ OK ~~`);
                                        resolve();
                                    } else {
                                        console.log('## ERROR ##', 'Unable to recieve 2nd data after insert.');
                                        resolve();
                                        return;
                                    }
                                });
                            });
                        } else {
                            console.log('## ERROR ##', 'Unable to recieve data after insert.');
                            resolve();
                            return;
                        }
                    });
                } catch (error) {
                    if (error) {
                        console.log('## ERROR ##', 'Unable to init base.', error);
                        resolve();
                        return;
                    }
                }
            });
        });
    }

    await parse();
    return;
});
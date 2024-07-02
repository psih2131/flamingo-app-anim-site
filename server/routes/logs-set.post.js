import multiparty from 'multiparty';
import db from './../_cfg/dbClient';
 
export default defineEventHandler(async (event) => {
    const req = event.node.req;
    let result = {};
    // res.setHeader('Content-Type', 'application/json');
    let form = new multiparty.Form();

    let parse = () => {
        return new Promise((resolve, reject) => {
            form.on('error', function(err) {
                console.log('Error parsing form: ' + err.stack);
                resolve( {"success":false} );
            });

            form.parse(req, async function(err, fields, files) {
                if (fields.udid && fields.udid.length > 0 && fields.event_data && fields.event_data.length > 0) {
                    let source_ip = req.ip || req.headers['x-forwarded-for'] || req.socket?.remoteAddress;
                    try {
                        if (!db.isActive()) {
                            resolve( {"success":false, "errorCode":1} );
                            return;
                        }
                        db.client().query(`select * from fl_logs_set('${fields.udid[0]}', '${fields.event_data[0]}', '${source_ip}');`, (err, result) => {
                            if (err) {
                                resolve( {"success":false, "errorCode":2} );
                                return;
                            }
                            let data = result.rows.pop();
                            if (data?.fl_logs_set) {
                                resolve( {"success":true} );
                            } else {
                                resolve( {"success":false, "errorCode":3} );
                            }
                            return;
                        });
                    } catch (error) {
                        if (error) {
                            resolve( {"success":false, "errorCode":4} );
                            return;
                        }
                    }
                } else {
                    resolve( {"success":false, "errorCode":5} );
                }
            });
        });
    }

    result = await parse();
    return result;
});

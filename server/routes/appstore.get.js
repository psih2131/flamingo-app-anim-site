import url from 'url';
import db from './../_cfg/dbClient';
 
export default defineEventHandler(async (event) => {
    const req = event.node.req;
    let source_ip = req.ip || req.headers['x-forwarded-for'] || req.socket?.remoteAddress;
    let referer = req.headers.referer || '';
    let user_agent = req.headers['user-agent'] || '';

    const searchParams = new URLSearchParams(url.parse(req.url).query);
    let custom_prop = searchParams.get('s') || -1
    let result;

    let parse = () => {
        return new Promise((resolve, reject) => {
            try {
                if (!db.isActive()) {
                    resolve('{"success":false, "errorCode":1}');
                }
                db.client().query(`select * from fl_link_logs_set('${referer}', '${source_ip}', ${custom_prop}, '${user_agent}');`, (err, result) => {
                    if (err) {
                        resolve('{"success":false, "errorCode":2}');
                    }
                    let data = result.rows.pop();
                    if (data?.fl_link_logs_set) {
                        resolve(`{"success":true}`);
                    } else {
                        resolve('{"success":false, "errorCode":3}');
                    }
                });
            } catch (error) {
                if (error) {
                    resolve('{"success":false, "errorCode":4}');
                }
            }
        });
    }

    result = await parse();
    if (result !== '{"success":true}') console.log(result);

    await sendRedirect(event, 'https://apps.apple.com/app/flamingo-travel-days-tracker/id1631680437', 301);
    // return;
});
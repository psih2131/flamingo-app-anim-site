import url from 'url';
import db from './../_cfg/dbClient';

export default defineEventHandler(async (event) => {
    const req = event.node.req;
    let result = {};
    // res.setHeader('Content-Type', 'application/json');
    appendHeader(event, 'Content-Type', 'application/json');
    appendHeader(event, 'Cache-Control', 'max-age=604800');

    const searchParams = new URLSearchParams(url.parse(req.url).query);
    let parse = () => {
        return new Promise((resolve, reject) => {
            if (!db.isActive()) {
                resolve( {"success":false} );
                return;
            }

            try {
                db.client().query(`select * from fl_passports_access_get();`, (err, result) => {
                    if (err) {
                        resolve( {"success":false, "err":err} );
                        return;
                    }
                    
                    let data = result.rows.pop();
                    let resp = {"success":true, "data":data?.fl_passports_access_get};
                    resolve(resp);
                });
            } catch (error) {
                if (error) {
                    resolve( {"success":false} );
                    return;
                }
            }
        });
    }

    result = await parse();
    return JSON.stringify(result);
});
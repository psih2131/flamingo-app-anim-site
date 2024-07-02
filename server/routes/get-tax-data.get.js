import db from './../_cfg/dbClient';

export default defineEventHandler(async (event) => {
    const req = event.node.req;

    const searchParams = new URLSearchParams(req.url.split('?')[1]);
    // res.setHeader('Content-Type', 'application/json');
    let parse = () => {
        return new Promise((resolve, reject) => {
            try {
                db.client().query(`select * from tax_data_get('${searchParams.get('dev_mode') !== 'true'}');`, (err, result) => {
                    if (err) {
                        resolve( {"success":false} );
                        return;
                    }
                    let data = result.rows.pop();

                    resolve( {"success":true,"data": data.tax_data_get ? data.tax_data_get : null} );
                });
            } catch (error) {
                if (error) {
                    resolve( {"success":false} );
                    return;
                }
            }
        });
    }

    let result = await parse();
    return result;
});
import db from './../_cfg/dbClient';
/*const zlib = require('zlib'); //force gzip
const { promisify } = require('util');
const { pipeline } = require('stream');
const pipe = promisify(pipeline);*/

export default defineEventHandler(async (event) => {
    const req = event.node.req;

    // res.setHeader('Content-Type', 'application/json');
    // res.setHeader('Access-Control-Allow-Headers', '*');
    appendCorsHeaders(event, {allowHeaders: '*', origin: '*', methods: ['GET', 'PUT', 'POST', 'DELETE', 'HEAD', 'OPTIONS']});
    // appenCorsdHeaders(event, {allowHeaders: '*', origin: 'https://flamingotracker.com', methods: ['GET']});
    // res.setHeader('Access-Control-Allow-Origin', 'https://flamingotracker.com');
    // res.setHeader('Access-Control-Allow-Methods', 'GET');
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');

    let parse = () => {
        return new Promise((resolve, reject) => {

            if (req.method === 'OPTIONS') {
                resolve();
                return;
            }

            try {
                if (!req.headers.sessiontoken) {
                    resolve( {"ok":false,"error":"Authentication error","err_code":403} );
                    return;
                }
                db.client().query(`select * from tax_data_get_admin('${req.headers.sessiontoken}');`, async (err, result) => {
                    if (err) {
                        resolve( {"ok":false,"error":err,"err_code":403} );
                        return;
                    }
                    let data = result.rows.pop();

                    /*//force gzip
                    let raw = `{"ok":true,"data":${data.tax_data_get_admin ? JSON.stringify(data.tax_data_get_admin) : null}}`;

                    let acceptEncoding = req.headers['accept-encoding'];
                    if (!acceptEncoding) {
                    acceptEncoding = '';
                    }
                
                    if (/\bgzip\b/.test(acceptEncoding)) {
                        res.setHeader('content-encoding', 'gzip');
                        await pipe(raw, zlib.createGzip(), res);
                    } else if (/\bdeflate\b/.test(acceptEncoding)) {
                        res.setHeader('content-encoding', 'deflate');
                        await pipe(raw, zlib.createDeflate(), res);
                    } else if (/\bbr\b/.test(acceptEncoding)) {
                        res.setHeader('content-encoding', 'br');
                        await pipe(raw, zlib.createBrotliCompress(), res);
                    } else {
                        // res.writeHead(200, {});
                        await pipe(raw, res)
                    }
                    */

                    resolve( {"ok":true,"data": data.tax_data_get_admin ? data.tax_data_get_admin : null} );
                });
            } catch (error) {
                if (error) {
                    resolve( {"ok":false,"error": err} );
                    return;
                }
            }
        });
    }

    let result = await parse();
    return result;
});
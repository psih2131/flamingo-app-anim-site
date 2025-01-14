import db from './../_cfg/dbClient_tasks.js';
import request from 'request';

if (!process.env.CRON_API_KEY) {
    console.log( {"ok":false,"error":"env variables fail"} );
    process.exit(1);
}

let asyncDownload = (uri, callback) => new Promise(resolve => {
    console.log('start');
  
    request.get(uri, (resp, data, e,r,t) => {
        callback(e);
        resolve();
    });
});

let query = (data, callback) => new Promise(resolve => {
    console.log('query start');
  
    try {
        // console.log('q', data);
        
        db.client().query(`select * from fl_passports_access_set('${process.env.CRON_API_KEY}', '${JSON.stringify(data).replace(/\'/g,"''")}');`, (err, result) => {
            if (err) {
                console.log( {"ok":false,"error":err,"err_code":403} );
                process.exit(1);
            }
            let respData = result.rows.pop();

            // console.log(respData);

            console.log( {"ok":true,"data": respData.fl_passports_access_set ? respData.fl_passports_access_set : null} );
            resolve(respData);
        });
    } catch (error) {
        if (error) {
            console.log( {"ok":false,"error": error} );
            process.exit(1);
        }
    }
});

let queryValid = () => new Promise(resolve => {
    console.log('queryValid start');
  
    try {
        db.client().query(`select * from fl_passports_access_set_valid('${process.env.CRON_API_KEY}');`, (err, result) => {
            if (err) {
                console.log( {"ok":false,"error":err,"err_code":403} );
                process.exit(1);
            }
            let respData = result.rows.pop();

            // console.log(respData);

            console.log( {"ok":true,"data": respData.fl_passports_access_set_valid ? respData.fl_passports_access_set_valid : null} );
            resolve(respData);
        });
    } catch (error) {
        if (error) {
            console.log( {"ok":false,"error": error} );
            process.exit(1);
        }
    }
});

let main = async () => {
    await asyncDownload('https://requirements-api.joinsherpa.com/v2/procedures?language=en-US&filter%5BdocumentType%5D%5Bin%5D=VISA,ETA,E_VISA,EMBASSY_VISA&filter%5Bcategory%5D=DOC_REQUIRED&key=AIzaSyCd3jDrVQKwFnj_hk3j1gIjkqCghP3c3TY&affiliateId=sherpa', async (e) => {
        let data = JSON.parse(e);
        // console.log(data);
        if (!data.data) {
            console.log('... no data');
            process.exit(1);
        }
        for (let i = 0; i < data.data.length; i++) {
            const el = data.data[i];        

            // console.log(el);
            await query(el, (res) => {
                console.log('query callback', i, res);
            });
        }

        await queryValid()
        console.log('... end');
        process.exit();
    });
}

main();
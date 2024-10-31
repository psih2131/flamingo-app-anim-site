import url from 'url';
import db from './../_cfg/dbClient';

export default defineEventHandler(async (event) => {
    const req = event.node.req;
    let result = {};
    // res.setHeader('Content-Type', 'application/json');

    const searchParams = new URLSearchParams(url.parse(req.url).query);
    let parse = () => {
        return new Promise((resolve, reject) => {
            if (!searchParams.has('udid')) {
                resolve( {"success":true, "subscriptionType":"1", "nonAuthoritative":1, "isSubscriptionEnabled":true} );
                return;
            }

            if (!db.isActive()) {
                resolve( {"success":true, "subscriptionType":"1", "nonAuthoritative":2, "isSubscriptionEnabled":true} );
                return;
            }

            try {
                let old_udid = '';
                if (searchParams.has('old_udid')) {
                    old_udid = searchParams.get('old_udid');
                }
                db.client().query(`select * from subscription_type_get('${searchParams.get('udid')}','${old_udid}');`, (err, result) => {
                    if (err) {
                        resolve( {"success":true, "subscriptionType":"1", "nonAuthoritative":3, "isSubscriptionEnabled":true} );
                        return;
                    }
                    let data = result.rows.pop();
                    let resp = {"success":true, "subscriptionType":`${data?.subscription_type_get?.type || 1}`, "isSubscriptionEnabled": data?.subscription_type_get?.is_active || false, "lastTaxQuestionsUpdate": data?.subscription_type_get?.tax_updated_at};
                    if (data && data.subscription_type_get && !data.subscription_type_get.is_active) {
                        resp = {"success":true, "subscriptionType":`${data?.subscription_type_get?.type || 1}`, "isSubscriptionEnabled": data?.subscription_type_get?.is_active || false, "lastTaxQuestionsUpdate": data?.subscription_type_get?.tax_updated_at, "isSubsDisabled_36FdGtSm":true};
                    }
                    resolve(resp);
                });
            } catch (error) {
                if (error) {
                    resolve( {"success":true, "subscriptionType":"1", "nonAuthoritative":4, "isSubscriptionEnabled":true} );
                    return;
                }
            }
        });
    }

    result = await parse();
    return result;
});
import url from 'url';
import db from './../_cfg/dbClient';

export default defineEventHandler(async (event) => {
    const req = event.node.req;
    let result = {};
    let salesAccessCountryList = {UA: true, PL: true, GB: true, US: true}
    // res.setHeader('Content-Type', 'application/json');

    const searchParams = new URLSearchParams(url.parse(req.url).query);
    let parse = () => {
        return new Promise((resolve, reject) => {
            let response = {"success":true, "subscriptionType":"2", "isSubscriptionEnabled":true};

            if (searchParams.has('scc') && salesAccessCountryList[searchParams.get('scc').toUpperCase()] === true) {
                response.salesAccess = true;
            }

            if (!searchParams.has('udid')) {
                response.nonAuthoritative = 1;
                resolve( response );
                return;
            }

            if (!db.isActive()) {
                response.nonAuthoritative = 2;
                resolve( response );
                return;
            }

            try {
                let old_udid = '';
                if (searchParams.has('old_udid')) {
                    old_udid = searchParams.get('old_udid');
                }
                db.client().query(`select * from subscription_type_get('${searchParams.get('udid')}','${old_udid}');`, (err, result) => {
                    if (err) {
                        response.nonAuthoritative = 3;
                        resolve( response );
                        return;
                    }
                    let data = result.rows.pop();
                    response.subscriptionType = `${data?.subscription_type_get?.type || 1}`;
                    response.isSubscriptionEnabled = data?.subscription_type_get?.is_active || false;
                    if (data && data.subscription_type_get && !data.subscription_type_get.is_active) {
                        response.lastTaxQuestionsUpdate = data?.subscription_type_get?.tax_updated_at;
                        response.isSubsDisabled_36FdGtSm = true;
                    }
                    resolve( response );
                });
            } catch (error) {
                if (error) {
                    response.nonAuthoritative = 4;
                    resolve( response );
                    return;
                }
            }
        });
    }

    result = await parse();
    return result;
});
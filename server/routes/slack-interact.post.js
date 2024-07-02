import db from './../_cfg/dbClient';

let process = async (dataObj) => {
    return new Promise((resolve, reject) => {
        if (dataObj?.team_id != 'T03HG9LDV') {
            resolve(':face_with_symbols_on_mouth: team_id not authorised');
            return;
        }

        //IL EZ OI
        if (dataObj?.user_id != 'U03L4DXAR' && dataObj?.user_id != 'U03PAQTP6' && dataObj?.user_id != 'U0EPT1W3T') {
            resolve(':face_with_symbols_on_mouth: user_id not authorised, contact @Igor Leonidov');
            return;
        }

        if (!db.isActive()) {
            resolve(':face_with_symbols_on_mouth: some troubles with connecting to db, contact @Igor Leonidov');
            return;
        }

        switch (dataObj?.command) {
            case '/flamingo-list-free':
                list().then(result => {
                    resolve(result);
                });
                break;
            case '/flamingo-set-free':
                setFreePro(dataObj?.text).then(result => {
                    resolve(result);
                });
                break;
            default:
                resolve();
                break;
        }
    });
}

let setFreePro = (text) => {
    return new Promise((resolve, reject) => {
        let props = text.split(' ');
        if (!props[0] || !props[1] || (props[1] !== 'true' && props[1] !== 'false')) {
            resolve(':face_with_symbols_on_mouth: error in command syntax.\n```example: /flamingo-set-free CFBEFDCF-0F4D-48FB-94B3-75D1E319A0F3 true```');
            return;
        }

        let result = '';
        db.client().query(`update flamingo_subscriptions fs set is_active = not ${props[1]} where fs.udid = '${props[0]}' returning *;`, (err, query_result) => {
            if (err) {
                resolve(':face_with_symbols_on_mouth: some troubles with query, contact @Igor Leonidov');
                return;
            }
            result += `\`\`\`${'id'.padStart(5)}\t${'udid'.padStart(38)}\t${'subs_type'.padEnd(9)}\t${'is_free_pro_active'.padEnd(9)}\t${'created_at'}\n`;
            result += `---------------------------------------------------------------------------------------------------------\n`;
            if (query_result.rows.length === 0) {
                result += `--- no entries with the specified UDID were found ---`;
            } else {
                query_result.rows.forEach(v => {
                    result += `${v.id.toString().padStart(5)}\t${v.udid.padStart(38)}\t${(v.selected_type === 1 ? 'A' : v.selected_type === 2 ? 'B' : 'null').padStart(9)}\t${(v.is_active ? 'false' : 'true').padStart(18)}\t${v.created_at.toISOString().slice(0,19).replace('T',' ')}\n`;
                })
            }
            result += `\`\`\``;
            resolve(result);
        });
    });
}

let list = () => {
    return new Promise((resolve, reject) => {
        let result = '';
        db.client().query(`select fs.id, fs.udid,
        case when fs.selected_type = 1 then 'A'
        when fs.selected_type = 2 then 'B' end subs_type,
    ftu.dsc, fs.created_at
    from flamingo_subscriptions fs
    left join flamingo_test_udids ftu on fs.udid = ftu.udid
    where fs.is_active = false order by fs.id desc;`, (err, query_result) => {
            if (err) {
                resolve(':face_with_symbols_on_mouth: some troubles with query, contact @Igor Leonidov');
                return;
            }
            result += `\`\`\`${'id'.padStart(5)}\t${'udid'.padStart(38)}\t${'subs_type'.padEnd(9)}\t${'dsc'.padStart(30)}\t${'created_at'}\n`;
            result += `---------------------------------------------------------------------------------------------------------------------\n`;
            query_result.rows.forEach(v => {
                result += `${v.id.toString().padStart(5)}\t${v.udid.padStart(38)}\t${v.subs_type.padStart(9)}\t${v.dsc ? v.dsc.padStart(30) : 'null'.padStart(30)}\t${v.created_at.toISOString().slice(0,19).replace('T',' ')}\n`;
            })
            result += `\`\`\``;
            resolve(result);
        });
    });
}
 
export default defineEventHandler(async (event) => {
    const req = event.node.req;

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
                // URLSearchParams: takes querystring
                // & returns a URLSearchParams object instance.
                const parsedData = new URLSearchParams(querystring);
                const dataObj = {};
                // entries() method returns an iterator
                // allowing iteration through all key/value pairs
                for (var pair of parsedData.entries()) {
                    dataObj[pair[0]] = pair[1];
                }
                // Now request data is accessible using dataObj
                resolve(dataObj);
                // res.end();
            });
        });
    }

    let data = await parse();
    let result = await process(data);
    return result;
});

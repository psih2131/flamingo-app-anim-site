import pg from 'pg';
let connectionString = null;

if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
    connectionString = process.env.HEROKU_POSTGRESQL_BRONZE_URL || '';
} else {
    console.log( {"ok":false,"error":"env variables fail"} );
    process.exit(1);
}

let client = new pg.Client({
    connectionString,
    ssl: {
        rejectUnauthorized: false,
    }
});
let isActive = false;
let reconnectLoop = 0;
let sleepInterval = -1;
let reconnectInProgress = false;

let errorHandler = (err) => {
    isActive = false;
    reconnect(err);
}

let connect = () => {
    client.connect((err) => {
        if (err) {
            isActive = false;
            reconnect(err)
        } else {
            reconnectLoop = 0;
            client.on('error', errorHandler);
            isActive = true;
        }
    });
}

let reconnect = (err) => {
    if (reconnectInProgress) {
        // skip if in progress
        return;
    }

    reconnectInProgress = true;

    console.error('Connection issue:', err?.stack);

    client.off('error', errorHandler);
    client.end();
    client = null;
    try {
        client = new Client({
            connectionString,
            ssl: {
                rejectUnauthorized: false,
            }
        });
    } catch (error) {
        console.error('Unable to create client:', error)
    }

    reconnectLoop = reconnectLoop + 1;
    sleepInterval = 1000 * reconnectLoop + 1000;
    // console.log('Trying Reconnect' + '. Sleep Timeout ' + sleepInterval);
    setTimeout(connect, sleepInterval);
    reconnectInProgress = false;
}

connect();

let isActiveLocal = () => {
    return isActive;
}

let clientGet = () => {
    return client;
}

export default {
    client,
    url: connectionString,
    client: clientGet,
    isActive: isActiveLocal
}
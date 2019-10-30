import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
let _connected: boolean = false,
    _db: any = null,
    {
        MONGO_HOST,
        MONGO_PORT,
        MONGO_USERNAME,
        MONGO_PASSWORD,
        MONGO_DB
    } = process.env;
if (!MONGO_HOST) {
    console.log(
        "app:DB:dbc.js",
        "FATAL ERROR : MONGO_HOST is not defind! Please check .env setting"
    );
    process.exit(1);
}
if (!MONGO_PORT) {
    console.log(
        "app:DB:dbc.js",
        "FATAL ERROR : MONGO_PORT is not defind! Please check .env setting"
    );
    process.exit(1);
}
if (!MONGO_DB) {
    console.log(
        "app:DB:dbc.js",
        "FATAL ERROR : MONGO_DB is not defind! Please check .env settings"
    );
    process.exit(1);
}

export default function() {
    return new Promise((resolve, reject) => {
        if (_connected && _db) {
            resolve(_db);
        } else {
            let connection_string = `mongodb://${
                MONGO_USERNAME ? `${MONGO_USERNAME}:` : ""
            }${
                MONGO_PASSWORD ? `${MONGO_PASSWORD}@` : ""
            }${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
            MongoClient.connect(connection_string, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
                .then(async (client: any) => {
                    _connected = true;
                    _db = client.db(MONGO_DB);
                    resolve(_db);
                })
                .catch((err: any) => {
                    console.log(
                        "app:DB:dbc.js",
                        "FATAL ERROR : Mongo connection failed! Please check .env setting",
                        err
                    );
                    reject(err);
                });
        }
    });
}

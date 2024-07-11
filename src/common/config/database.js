const mysql = require('think-model-mysql');
import * as dotenv from "dotenv";
let envpath;
switch (process.env.NODE_ENV) {
  case "development":
    envpath = `${__dirname}/../.env.development`;
    break;
  case "production":
    envpath = `${__dirname}/../.env.production`;
    break;
  default:
    envpath = `${__dirname}/../.env.development`;
}
dotenv.config({ path: path.resolve(envpath) });
module.exports = {
    handle: mysql,
    database: 'hiolabsDB',
    prefix: 'hiolabs_',
    encoding: 'utf8mb4',
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    dateStrings: true
};

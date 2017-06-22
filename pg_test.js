'use sctrict';

const pg = require('pg');
const it = require('./token.js')
console.log(it.cn)
cn = it.cn
// const promise = require('bluebird');
/*
const pgp = require('pg-promise')({
    promiseLib: promise,
    query: function (e) {
        //console.log("Query:", e.query);
        //console.log('query executed, n#: ', counter++)
    }
});
*/
pg.defaults.poolSize = process.env.DATABASE_CONNECTIONS || 5;

// const conStri = "postgres://irisoovcfanwqm:56d8ee1d6e9886b0aa973ee2c7aca08aa73417e13413a457660f8f5a50cdda9b@ec2-54-217-222-254.eu-west-1.compute.amazonaws.com:5432/d2bfpj5hakq75n"

let client = new pg.Client(cn)
client.connect()

// client.query('CREATE TABLE testable (name name, id int)')
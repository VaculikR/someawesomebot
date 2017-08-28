'use sctrict';

const postgreLib = require('pg');
const promise = require('bluebird');
const theUrl = require('./myVars.js');
const url = theUrl.url;

const pgp = require('pg-promise')({
    promiseLib: promise,
    query: function (e) {
        //console.log("Query:", e.query);
        //console.log('query executed, n#: ', counter++)
    }
});

postgreLib.defaults.poolSize = process.env.DATABASE_CONNECTIONS || 5;

const db = pgp(url);

(async function () {
  let q = 'test'
  await db.query("INSERT INTO test (message) values ('" + q + "')")


  // const arrr = ['Peter', 'Jozko', 'Radek'];

  // for (const q of arrr) {
  //   console.log(q)
  //   await db.query("INSERT INTO test (message) values ('" + q + "')")
  // }
  /*let test = await db.query('SELECT * FROM testable')
  for (let o of test) {
    // console.log(o)
    console.log(o.name)
  }
db.close()*/
})();
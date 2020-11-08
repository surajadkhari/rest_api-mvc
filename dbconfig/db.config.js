//import mysql
const mysql=require('mysql');

//Connect Properties
var dbConfig = {
    localHost: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "clinic",
  };

//   var dbConfig1 = {
//     localHost: "localhost",
//     port: "3306",
//     user: "root",
//     password: "password",
//     database: "user",
//   };

var db = dbConfig;

//mysql connection
var dbConnect = mysql.createConnection({
  host: db.localHost,
  port: db.port,
  user: db.user,
  password: db.password,
  database: db.database,
  insecureAuth: true,
});

//Check connection
dbConnect.connect((err)=>{
if(err) throw err;
else console.log('MYSQL is connected');
});

module.exports = dbConnect;
const mysql=require("mysql2");
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'conproject',
    password:'snegaa@12'
})

module.exports=pool.promise();
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bulfro'
})
connection.connect(function (err) {
    if (err) throw err;
    console.log(" Database Connected!");
});

module.exports = { connection }
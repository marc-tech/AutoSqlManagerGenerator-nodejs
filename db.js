const mysql = require('mysql');

var connection = mysql.createConnection({
	host     : 'mysql-fastdj.alwaysdata.net',
	user     : 'fastdj',
	password : 'wchuwwaa',
	database : 'fastdj_db'
});

module.exports = connection;

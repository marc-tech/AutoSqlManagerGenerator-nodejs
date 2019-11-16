MySql Model Generator NodeJs
==

This script gonna build a js class witch is a model of a MySql table

python 3.6

A simple python script that parse a database for make two node js file :
  - db.js : used for make a MySQL connection
  - tableName.js : used for manage your MySQL table

## Usage :

  -First set the settingFile with your database access like :

      > cat settingFile
      > user
      > password
      > host
      > database

  -Then execute the script like :

      > python AutoSqlManagerGenerator-nodejs.py TableName


Example :
==

## -MySQL database example

![alt text](https://image.noelshack.com/fichiers/2018/11/6/1521299463-img1.png)

## -Script result

-File: db.js :

```js
const mysql = require('mysql');

var connection = mysql.createConnection({
	host     : 'host',
	user     : 'user',
	password : 'password',
	database : 'database'
});

module.exports = connection;
```

-File: Messages.js :

```js
const connection = require('db');

class Messages {

	constructor(row) {
		this.row = row;
	}

	get id() {
		return this.row.id;
	}

	set id(id) {
		connection.query('UPDATE messages SET id = ? WHERE id = ?', [id, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.id = id;
	}

	get chat_id() {
		return this.row.chat_id;
	}

	set chat_id(chat_id) {
		connection.query('UPDATE messages SET chat_id = ? WHERE id = ?', [chat_id, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.chat_id = chat_id;
	}

	get date() {
		return this.row.date;
	}

	set date(date) {
		connection.query('UPDATE messages SET date = ? WHERE id = ?', [date, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.date = date;
	}

	get message() {
		return this.row.message;
	}

	set message(message) {
		connection.query('UPDATE messages SET message = ? WHERE id = ?', [message, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.message = message;
	}

	static FindMessagesById (id, cb) {
		connection.query('SELECT * FROM messages WHERE id = ?', [id], function(err, result) {
			cb(err, result.map((row) => new messages(row)));
		})
	}

	static InsertNewMessages (messages) {
		var query = connection.query('INSERT INTO messages SET ?', messages, function(err) {
			if (err) throw err;
		});
	}

}

module.exports = Messages;
```

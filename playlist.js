const mysql = require('mysql');

var connection = mysql.createConnection({
	host     : 'mysql-fastdj.alwaysdata.net',
	user     : 'fastdj',
	password : 'wchuwwaa',
	database : 'fastdj_db'
});

class playlist {

	constructor(row) {
		this.row = row;
	}

	get id() {
		return this.row.id;
	}

	set id(id) {
		connection.query('UPDATE playlist SET id = ? WHERE id = ?', [id, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.id = id;
	}

	get author_id() {
		return this.row.author_id;
	}

	set author_id(author_id) {
		connection.query('UPDATE playlist SET author_id = ? WHERE id = ?', [author_id, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.author_id = author_id;
	}

	get lien() {
		return this.row.lien;
	}

	set lien(lien) {
		connection.query('UPDATE playlist SET lien = ? WHERE id = ?', [lien, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.lien = lien;
	}

	get avatar() {
		return this.row.avatar;
	}

	set avatar(avatar) {
		connection.query('UPDATE playlist SET avatar = ? WHERE id = ?', [avatar, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.avatar = avatar;
	}

	static FindUserById (id, cb) {
		connection.query('SELECT * FROM playlist WHERE id = ?', [id], function(err, result) {
			cb(error, result.map((row) => new playlist(row)));
		})
	}

}

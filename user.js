const mysql = require('mysql');

var connection = mysql.createConnection({
	host     : 'mysql-fastdj.alwaysdata.net',
	user     : 'fastdj',
	password : 'wchuwwaa',
	database : 'fastdj_db'
});

class user {

	constructor(row) {
		this.row = row;
	}

	get id() {
		return this.row.id;
	}

	set id(id) {
		connection.query('UPDATE user SET id = ? WHERE id = ?', [id, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.id = id;
	}

	get type() {
		return this.row.type;
	}

	set type(type) {
		connection.query('UPDATE user SET type = ? WHERE id = ?', [type, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.type = type;
	}

	get first_name() {
		return this.row.first_name;
	}

	set first_name(first_name) {
		connection.query('UPDATE user SET first_name = ? WHERE id = ?', [first_name, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.first_name = first_name;
	}

	get last_name() {
		return this.row.last_name;
	}

	set last_name(last_name) {
		connection.query('UPDATE user SET last_name = ? WHERE id = ?', [last_name, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.last_name = last_name;
	}

	get birthday() {
		return this.row.birthday;
	}

	set birthday(birthday) {
		connection.query('UPDATE user SET birthday = ? WHERE id = ?', [birthday, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.birthday = birthday;
	}

	get sex() {
		return this.row.sex;
	}

	set sex(sex) {
		connection.query('UPDATE user SET sex = ? WHERE id = ?', [sex, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.sex = sex;
	}

	get mail() {
		return this.row.mail;
	}

	set mail(mail) {
		connection.query('UPDATE user SET mail = ? WHERE id = ?', [mail, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.mail = mail;
	}

	get mail_token() {
		return this.row.mail_token;
	}

	set mail_token(mail_token) {
		connection.query('UPDATE user SET mail_token = ? WHERE id = ?', [mail_token, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.mail_token = mail_token;
	}

	get password() {
		return this.row.password;
	}

	set password(password) {
		connection.query('UPDATE user SET password = ? WHERE id = ?', [password, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.password = password;
	}

	get phone() {
		return this.row.phone;
	}

	set phone(phone) {
		connection.query('UPDATE user SET phone = ? WHERE id = ?', [phone, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.phone = phone;
	}

	get nickname() {
		return this.row.nickname;
	}

	set nickname(nickname) {
		connection.query('UPDATE user SET nickname = ? WHERE id = ?', [nickname, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.nickname = nickname;
	}

	get if_nickname() {
		return this.row.if_nickname;
	}

	set if_nickname(if_nickname) {
		connection.query('UPDATE user SET if_nickname = ? WHERE id = ?', [if_nickname, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.if_nickname = if_nickname;
	}

	get if_sex() {
		return this.row.if_sex;
	}

	set if_sex(if_sex) {
		connection.query('UPDATE user SET if_sex = ? WHERE id = ?', [if_sex, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.if_sex = if_sex;
	}

	get if_birthday() {
		return this.row.if_birthday;
	}

	set if_birthday(if_birthday) {
		connection.query('UPDATE user SET if_birthday = ? WHERE id = ?', [if_birthday, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.if_birthday = if_birthday;
	}

	get avatar() {
		return this.row.avatar;
	}

	set avatar(avatar) {
		connection.query('UPDATE user SET avatar = ? WHERE id = ?', [avatar, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.avatar = avatar;
	}

	get description() {
		return this.row.description;
	}

	set description(description) {
		connection.query('UPDATE user SET description = ? WHERE id = ?', [description, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.description = description;
	}

	get if_form() {
		return this.row.if_form;
	}

	set if_form(if_form) {
		connection.query('UPDATE user SET if_form = ? WHERE id = ?', [if_form, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.if_form = if_form;
	}

	get rating() {
		return this.row.rating;
	}

	set rating(rating) {
		connection.query('UPDATE user SET rating = ? WHERE id = ?', [rating, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.rating = rating;
	}

	static FindUserById (id, cb) {
		connection.query('SELECT * FROM user WHERE id = ?', [id], function(err, result) {
			cb(error, result.map((row) => new user(row)))
		})
	}

}

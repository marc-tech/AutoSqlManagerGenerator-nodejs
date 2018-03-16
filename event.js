const mysql = require('mysql');

var connection = mysql.createConnection({
	host     : 'mysql-fastdj.alwaysdata.net',
	user     : 'fastdj',
	password : 'wchuwwaa',
	database : 'fastdj_db'
});

class event {

	constructor(row) {
		this.row = row;
	}

	get id() {
		return this.row.id;
	}

	set id(id) {
		connection.query('UPDATE event SET id = ? WHERE id = ?', [id, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.id = id;
	}

	get author() {
		return this.row.author;
	}

	set author(author) {
		connection.query('UPDATE event SET author = ? WHERE id = ?', [author, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.author = author;
	}

	get created_at() {
		return this.row.created_at;
	}

	set created_at(created_at) {
		connection.query('UPDATE event SET created_at = ? WHERE id = ?', [created_at, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.created_at = created_at;
	}

	get name() {
		return this.row.name;
	}

	set name(name) {
		connection.query('UPDATE event SET name = ? WHERE id = ?', [name, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.name = name;
	}

	get surname() {
		return this.row.surname;
	}

	set surname(surname) {
		connection.query('UPDATE event SET surname = ? WHERE id = ?', [surname, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.surname = surname;
	}

	get num() {
		return this.row.num;
	}

	set num(num) {
		connection.query('UPDATE event SET num = ? WHERE id = ?', [num, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.num = num;
	}

	get address() {
		return this.row.address;
	}

	set address(address) {
		connection.query('UPDATE event SET address = ? WHERE id = ?', [address, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.address = address;
	}

	get postal() {
		return this.row.postal;
	}

	set postal(postal) {
		connection.query('UPDATE event SET postal = ? WHERE id = ?', [postal, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.postal = postal;
	}

	get city() {
		return this.row.city;
	}

	set city(city) {
		connection.query('UPDATE event SET city = ? WHERE id = ?', [city, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.city = city;
	}

	get date() {
		return this.row.date;
	}

	set date(date) {
		connection.query('UPDATE event SET date = ? WHERE id = ?', [date, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.date = date;
	}

	get hour() {
		return this.row.hour;
	}

	set hour(hour) {
		connection.query('UPDATE event SET hour = ? WHERE id = ?', [hour, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.hour = hour;
	}

	get description() {
		return this.row.description;
	}

	set description(description) {
		connection.query('UPDATE event SET description = ? WHERE id = ?', [description, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.description = description;
	}

	get type() {
		return this.row.type;
	}

	set type(type) {
		connection.query('UPDATE event SET type = ? WHERE id = ?', [type, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.type = type;
	}

	get tag() {
		return this.row.tag;
	}

	set tag(tag) {
		connection.query('UPDATE event SET tag = ? WHERE id = ?', [tag, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.tag = tag;
	}

	get nbPers() {
		return this.row.nbPers;
	}

	set nbPers(nbPers) {
		connection.query('UPDATE event SET nbPers = ? WHERE id = ?', [nbPers, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.nbPers = nbPers;
	}

	get sound() {
		return this.row.sound;
	}

	set sound(sound) {
		connection.query('UPDATE event SET sound = ? WHERE id = ?', [sound, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.sound = sound;
	}

	get title() {
		return this.row.title;
	}

	set title(title) {
		connection.query('UPDATE event SET title = ? WHERE id = ?', [title, this.row.id], function(err) {
			if (err) throw err;
		});
		this.row.title = title;
	}

	static FindUserById (id, cb) {
		connection.query('SELECT * FROM event WHERE id = ?', [id], function(err, result) {
			cb(error, result.map((row) => new event(row)));
		})
	}

}

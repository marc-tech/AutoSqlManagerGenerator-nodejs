#!/usr/bin/python

import mysql.connector
import sys

if (len(sys.argv) != 2):
	print("please enter the table name you want to parse in argument and fill the settingFile with your database access like :\nuser\npassword\nhost\ndatabase")
	exit()


# get first arg and make is first character upper
className = list(sys.argv[1])
className[0] = className[0].upper()
className = ''.join(className);

# get the database connection setting in settingFile
with open('settingFile') as f:
    setting = f.readlines()
setting = [x.strip() for x in setting]

# connect to database for get any value of the colums
bdd = mysql.connector.connect(user=setting[0], password=setting[1], host=setting[2], database=setting[3])
cursor = bdd.cursor()
query = ("SHOW COLUMNS FROM " + sys.argv[1])
cursor.execute(query)
rows = cursor.fetchall()

dbfile = open('db.js', 'w')
dbfile.truncate()

dbfile.write("const mysql = require('mysql');\n")
dbfile.write("\n")
dbfile.write("var connection = mysql.createConnection({\n")
dbfile.write("\thost     : '" + setting[2] + "',\n")
dbfile.write("\tuser     : '" + setting[0] + "',\n")
dbfile.write("\tpassword : '" + setting[1] + "',\n")
dbfile.write("\tdatabase : '" + setting[3] + "'\n")
dbfile.write("});\n")
dbfile.write("\n")
dbfile.write("module.exports = connection;\n")

file = open(className + '.js', 'w')
file.truncate()

file.write("const connection = require('db');\n")
file.write("\n")
file.write("class " + className + " {\n")
file.write("\n")
file.write("\tconstructor(row) {\n")
file.write("\t\tthis.row = row;\n")
file.write("\t}\n")
file.write("\n")

for r in rows:
	file.write("\tget " + r[0] + "() {\n")
	file.write("\t\treturn this.row." + r[0] + ";\n")
	file.write("\t}\n")
	file.write("\n")
	file.write("\tset " + r[0] + "(" + r[0] + ") {\n")
	file.write("\t\tconnection.query('UPDATE " + sys.argv[1] + " SET " + r[0] + " = ? WHERE id = ?', [" + r[0] + ", this.row.id], function(err) {\n")
	file.write("\t\t\tif (err) throw err;\n")
	file.write("\t\t});\n")
	file.write("\t\tthis.row." + r[0] + " = " + r[0] + ";\n")
	file.write("\t}\n")
	file.write("\n")

file.write("\tstatic Find" + className + "ById (id, cb) {\n")
file.write("\t\tconnection.query('SELECT * FROM " + sys.argv[1] + " WHERE id = ?', [id], function(err, result) {\n")
file.write("\t\t\tcb(err, result.map((row) => new " + sys.argv[1] + "(row)));\n")
file.write("\t\t})\n")
file.write("\t}\n")
file.write("\n")
file.write("\tstatic InsertNew" + className + " (" + sys.argv[1] + ") {\n")
file.write("\t\tvar query = connection.query('INSERT INTO " + sys.argv[1] + " SET ?', " + sys.argv[1] + ", function(err) {\n")
file.write("\t\t\tif (err) throw err;\n")
file.write("\t\t});\n")
file.write("\t}\n")
file.write("\n")
file.write("}\n")
file.write("\n")
file.write("module.exports = " + className + ";\n")

#!/usr/bin/python

import mysql.connector
import sys

if (len(sys.argv) != 2):
	exit()

with open('settingFile') as f:
    setting = f.readlines()

setting = [x.strip() for x in setting]

bdd = mysql.connector.connect(user=setting[0], password=setting[1], host=setting[2], database=setting[3])
cursor = bdd.cursor()

query = ("SHOW COLUMNS FROM " + sys.argv[1])
cursor.execute(query)

rows = cursor.fetchall()

file = open(sys.argv[1] + '.js', 'w')
file.truncate()

file.write("const mysql = require('mysql');\n")
file.write("\n")
file.write("var connection = mysql.createConnection({\n")
file.write("\thost     : '" + setting[2] + "',\n")
file.write("\tuser     : '" + setting[0] + "',\n")
file.write("\tpassword : '" + setting[1] + "',\n")
file.write("\tdatabase : '" + setting[3] + "'\n")
file.write("});\n")
file.write("\n")
file.write("class " + sys.argv[1] + " {\n")
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

file.write("\tstatic FindUserById (id, cb) {\n")
file.write("\t\tconnection.query('SELECT * FROM " + sys.argv[1] + " WHERE id = ?', [id], function(err, result) {\n")
file.write("\t\t\tcb(error, result.map((row) => new " + sys.argv[1] + "(row)));\n")
file.write("\t\t})\n")
file.write("\t}\n")
file.write("\n")
file.write("}\n")




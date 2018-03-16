#!/usr/bin/python

import mysql.connector

bdd = mysql.connector.connect(user='fastdj', password='wchuwwaa', host='mysql-fastdj.alwaysdata.net', database='fastdj_db')
cursor = bdd.cursor()


query = ("SHOW COLUMNS FROM user")
cursor.execute(query)    # selected rows stored in cursor memory

rows = cursor.fetchall()    # get all selected rows, as Barmar mentioned

for r in rows:
    print(r[0])

import mysql.connector

db = mysql.connector.connect(
host = "localhost",
user = "username",
password = "password")

x = db.cursor()

#Creating database and table
x.execute("CREATE DATABASE IF NOT EXISTS mydata")
x.execute("CREATE TABLE IF NOT EXISTS anime (id int unsigned NOT NULL  auto_increment,  name VARCHAR(255) NOT NULL, email
VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY (id)"))

x.execute("SHOW DATABASES")
x.execute("SHOW TABLE")

for y in x
print("Database and Table created", y)
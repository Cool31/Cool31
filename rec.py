
import mysql.connector
import datetime

db = mysql.connector.connect(
    host = "localhost",
    user = "busibusi",
    password = "ajun7@@#26&wtx",
    database = "groceey")

x = db.cursor()

GRANT ALL ON *.* TO 'busibusi' @ 'localhost' WITH GRAND OPTION

i = 1

x.execute("CREATE TABLE purchase(id int AUTO_INCREMENT PRIMARY KEY ZEROFILL UNSIGNED, orderdate DATETIME(), orderno INT(5), customername CHAR(60), mobilenumber VARCHAR(20), shipaddr VARCHAR(130), freightch INT(3), empID VARCHAR(10), grapes INT(3), cheery INT(3), oranges INT(3),apples INT(3),pineapple INT(3),guava INT(3),grapesgreen INT(3), banana INT(3), peaches INT(3), apricot INT(3), dryfruits INT(3), discount INT(3), totalkgs INT(3), total amt DECIMAL(10,2), grand total DECIMAL(10,2), todaysales DECIMAL(10,2), totalsales DECIMAL(10,2), monthly sales DECIMAL(10,2),yearly sales DECIMAL(10,2), txtfile VARCHAR( 100"))

x.execute("CREATE TABLE ship (id int AUTO_INCREMENT PRIMARY KEY ZEROFILL UNSIGNED, recptid int(6), DespID VARCHAR(20), orderno INT(5), customername CHAR(60), mobilenumber VARCHAR(20), ordday date(), ordtime time(), VARCHAR(130), despday date(), desptime time(), tptcost DECIMAL(6,2), shipcost DECIMAL(6,2), aircost DECIMAL( 6,2), miscch DECIMAL(6,2), totalnetwt int(10), msg VARCHAR(150), grandtot DECIMAL(10, 2)")
   
 x.execute("CREATE TABLE Staff (id int AUTO_INCREMENT PRIMARY KEY ZEROFILL UNSIGNED, empid VARCHAR(10), fname CHAR(30),
     lname CHAR(30),
     joineddt date(), dob date(), address VARCHAR(60), Aqual VARCHAR(60), tqual VARCHAR(60),  occupation  CHAR(25), dept CHAR(10), salary INT(10), deduct INT(6), nethome INT(10), mobilenumber INT(10), emerno INT(10), emername CHAR(25), backgroundver CHAR(20), backgrounddate date(), health CHAR(10), emplstatus CHAR(20), emplgrounds CHAR(30), 6,2), promotion CHAR(15), prevemployer VARCHAR(40), current pay DECIMAL(6,2)") 
     
x.execute("CREATE TABLE stock_purchase(id int AUTO_INCREMENT PRIMARY KEY ZEROFILL UNSIGNED, invoicenmbr int(15), invoicedate DATE(), retailername CHAR(60), mobilenumber VARCHAR(20), addr VARCHAR(130), grapes INT(3), cheery INT(3), oranges INT(3),apples INT(3),pineapple INT(3),guava INT(3),grapesgreen INT(3), banana INT(3), peaches INT(3), apricot INT(3), dryfruits INT(3), addedstock CHAR(20), addedprice DECIMAL(6,2),
    addedqty int(5), discount DECIMAL(6,2), totalkgs INT(3), total amt DECIMAL(10,2), grand total DECIMAL(10,2)")
    
 x.execute("CREATE TABLE anime(id int AUTO_INCREMENT PRIMARY KEY ZEROFILL UNSIGNED, name varchar(70), email varchar(140), pwd varchar(26))") 
   
#Adding multiple records on input
z = INSERT INTO anime (name, email, pwd, fora) VALUES (%s, %s, %s)
x.executemany(name, email, pwd, fora)
db.commit()

#Printout of 20 rows of records from database in ascending order
a = "SELECT * FROM anime BY ORDER name LIMIT 20"
x.execute(a)
b = x.fetchall()
for y in b
print(y)

#Selection of particular name to display from database
c = "SELECT * FROM anime WHERE name LIKE '%am%'"
x.execute(c)
d = x.fetchall()
for y in d
print(d)

#To escape query selection in database and prevent access
e = "SELECT * FROM anime WHERE name = %s"
f = ("samuel" ,)
x.execute(f)
g = x.fetchall()
db.commit()
for y in g
print(y)

#Delete records as need be from database
h = "DELETE FROM anime WHERE name = 'Samuel'"
x.execute(h)
db.commit()

#updating records in database
j = "UPDATE anime SET name = 'sam' WHERE email = 'example@gmail.com'"
x.execute(j)
db.commit()

k = datatime.datetime.now()
print(k)

while i < 40000

#Display all records from database
a = "SELECT * FROM anime BY ORDER name"
x.execute(a)
b = x.fetchall()
for y in b
print(y)
print("Total Records in Database:", x.rowcount)

print("Total Records Sorted (Ascending Order):", x.rowcount)
print("Total Records Deleted:", x.rowcount)
print("Total Records Updated:", x.rowcount)

if i == 40000:
break
print("Total available records in database has reached 40000, to continue...")
i += 1
continue
print("Further adding records....")
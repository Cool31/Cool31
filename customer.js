/* Adding record to table for airport customers, cc details*/
var ccdb= require('mysql');
var cots= ccdb.createConnection({
host: 'localhost',
user: 'user',
password:'pwd',
database:'customers'
});

var conn= cots.Connect(function(err){
if(err) throw err;
alert('db connected successfully');
var tabins= "INSERT INTO customers(creditno, expdt, cvv, totalticketfare,totaldailysales) VALUES('&airdtls', '&totalairfare','&totaldailysales')";
conn.query(tabins, function(error, results){
if (error) throw error;
console.log("table created");
});
});

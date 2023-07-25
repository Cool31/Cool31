var xs= require(mysql);

var conn= xs.createConnection({
host:'localhost',
user:'myuser',
password:'pwd',
database:'credit'
});

var xt= conn.connect(function(err){
if(err) throw err;
console.log("db Connected");
var tabin= "INSERT INTO credit(creditname, creditno,  expiry, cvv,credittoken, txidno) VALUES(&aircredit)";
conn.query(tabin, function(error){
if(error) throw error;
console.log('table created');
});
});

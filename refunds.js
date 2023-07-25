var txid=document.getElementById("refunds").value;
var xg= require('https://.../creditdb.js');
var xr= require('fs');

xg.createServer(function(err, datas){
if(err) throw err;
console.log('successfully created');
xr.readFile('./creditdb.js', txid, function(error, data){
if*(error) throw error;
datas.writeHead(200,
{'Content-Type' : 'text/html'});
datas.write(data);
return datas.end();
});
}).listen(8080);

var xf = require('https://www.bambora.com');

var xs = require('https://web.na.bambora.com/scripts/payment/payment.asp');

var vs = require('fs');

vs.open('datas.txt', 'w', function (err, file){
 if (err) throw err;
console.log('saved');
});

var filee= vs.createReadStream("./datas.txt");
filee.on("open", function(){
console.log('file is opened');
})

//ckeck customer name variable via formdata
vs.writeFile('datas.txt', formid, formsub, totalairfare, luggages, tktfare1, ticket, taxes, clas, function (err){
 if (err) throw err;
console.log('saved');
});

xf.createServer(function(vp, succ){
xf.readFile("datas.txt", function(err, data){
if(err){
succ.writeHead(404,
{"Content-Type": "datas.txt"});
return succ.end("404 not found");
}
succ.writeHead(200,
{"Content-Type": "datas.txt"});
succ.write(data);
return succ.end();
});
}).listen(8080);

vs.close("datas.txt");

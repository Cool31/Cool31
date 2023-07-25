var modem= require('nodemailer');
var trans= modem.createTransport({
service:'gmail',
auth:
{
user:'user'
password:'pwd'
}
});

var mailing={
from:'yourgmail',
to:'bamboramail',
cc:'',
subject:' CC payments - online shop',
text:'sending CC details for payment. Request Receipt with Tx ID & Receipt No via server'
}

var sender=sendMail(mailing, function(err, info){
if (err){
console.log('error');
} else{
console.log('mail send') + (info.response);
}
})
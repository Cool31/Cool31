var modem = require('nodemailer');

var trans = modem.createTransport({
service: 'gmail',
auth:
{
 user: 'username',
 password: 'password';
}
});

var mailoptions = {
from: 'example@gmail.com',
to: 'sender@ gmail.com',
'another@gmail.com',
subject: 'otp',
text: 'enter your otp to complete payment.  Time allotted is 2 minutes.'
/*or*/
html:
'<h1>Data extraction</h1>
<p>requested</p>'
}

var sen = sendMail(mailoptions, function (error, info)
{
if(error){
console.log('error')
}

else {
console.log('mail send') + 
(info.response);
}

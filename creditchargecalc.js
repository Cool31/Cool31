function expend(eve)
{
var payoption, i, pays, charging;
pay=[];
pays = eve.forms.id("expenses");
payoption = eve.options[eve.selectedIndex].text;

console.log(payoption);


if (approved == 1001 ||approved == 1002||approved ==1003||approved ==1004 && payoption == "AmericanExpress")
{
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}
else if
(approved == 1001 || approved == 1002 || approved ==1003 || approved ==1004 && payoption == "ChinaUnionPay")
{
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}
else if(approved == 1001 || approved == 1002 || approved ==1003 || approved ==1004 && payoption == "JCB")
{
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}
else if(approved == 1001 || approved == 1002 || approved ==1003 || approved ==1004 && payoption == "DinersClubCarteBlanche")
{
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}
else if(approved == 1001 || approved == 1002 || approved ==1003 || approved ==1004 && payoption == "DinersClubenRoute")
{
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}
else if(approved == 1001 || approved == 1002 || approved ==1003 || approved ==1004 && payoption == "DinersClubInternational")
{
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}
else if(approved == 1001 || approved == 1002 || approved ==1003 || approved ==1004 && payoption == "DiscoverCard")
{
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}
else if(approved == 1001 || approved == 1002 || approved ==1003 || approved ==1004 && payoption == "Laser")
{
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}
else if(approved == 1001 || approved == 1002 || approved ==1003 || approved ==1004 && payoption == "MasterCard")
{
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}
else if(approved == 1001 || approved == 1002 || approved ==1003 || approved ==1004 && payoption == "Visa")
{
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}
else if(approved == 1001 || approved == 1002 || approved ==1003 || approved ==1004 && payoption == "VisaElecteon")
{
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}
else if(approved == 1001 || approved == 1002 || approved ==1003 || approved ==1004 && payoption == "Maestro")
{
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}

var cardType, cardtoken, checkstatus;

/*User not choosen card selection, Luhn card method validation*/

var cardno = (document.getElementById("card").value);

var len = cardno.length; 
var cardType, checkin, chk, valid;

(chk = 0),
(prodArr = [
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
[0, 2, 4, 6, 8, 1, 3, 5, 7, 9],]),
(checkin = 0);

while(len--) {
checkin += prodArr[chk][parseInt(cardno.charAt(len), 10)];
chk ^= 1;
}

if(checkin % 10 === 0 && checkin > 0)
 {
valid = 'valid';
 } 
else
 {
valid = 'not valid';

cardtoken = card.toString().replace(/\s+/g, '');

if checkstatus == 34
{
cardType = American Express);
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}

if (/^(34)|^(37)/.test(cardtoken)) 
{
cardType = 'American Express';
 charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
 }
 
 if (/^(62)|^(88)/.test(cardtoken)) 
 {
cardType = 'China UnionPay';
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}

if (/^30[0-5]/.test(cardtoken)) 
{
cardType = 'Diners Club Carte Blanche';
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}

if (/^(2014)|^(2149)/.test(cardtoken)) 
{
cardType = 'Diners Club enRoute';
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}

if (/^36/.test(cardtoken)) {
cardType = 'Diners Club International';
 charging = (charges * grandfruit);
totaltopay = grandfruit + charging; 
}
      
if(/^(6011)|^(622(1(2[6-9]|[3-9][0-9])|[2-8][0-9]{2}|9([01][0-9]|2[0-5])))|^(64[4-9])|^65/.test(cardtoken)
) {
cardType = 'Discover Card';
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}
      
if (/^35(2[89]|[3-8][0-9])/.test(cardtoken)) {
cardType = 'JCB';
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}

if (/^(6304)|^(6706)|^(6771)|^(6709)/.test(cardtoken)) {
cardType = 'Laser';
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}

if (/^(5018)|^(5020)|^(5038)|^(5893)|^(6304)|^(6759)|^(6761)|^(6762)|^(6763)|^(0604)/.test(cardtoken )) {
cardType = 'Maestro'; 
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}

if (/^5[1-5]/.test(cardtoken )) {
cardType = 'MasterCard';
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}
      
if (^4/.test(cardtoken )) {
cardType = 'Visa';
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}
      
if(/^(4026)|^(417500)|^(4405)|^(4508)|^(4844)|^(4913)|^(4917)/.test(cardtoken )) {
cardType = 'Visa Electron';
charging = (charges * grandfruit);
totaltopay = grandfruit + charging;
}

console.log(cardtoken  + ' is a(n) ' + cardType + " and it's " + valid);
}







to check link of bank link of bambora
}

/*latest ticket class prices*/
function latest(){
var lat, latsub, latestprices, firstprices, ecoprices,  premiumprices,  busiprices, wtprices, latesttax, latestfirst, latesteco, latestpremium, latestbusi, latestwt, latesttaxes, latestpricecheck,  latestwtcheck, latesttaxcheck, disc, discounts;

if(isset(isAuthenticated() && isValid())){
console.log("Authoruzed");
lat= document.querySelector("#latest");
latsub= document.querySelector("#submits");
latestprices= new FormData(lat); firstprices=document.querySelector("#price"); ecoprices=document.querySelector("#priced"); premiumprices=document.querySelector("#price1"); busiprices=document.querySelector("#price2"); wtprices=document.querySelector("#weight"); latesttax=document.querySelector("#currenttax");

/*adding latest prices to server*/
latestfirst= FormData.append(firstprices, value);
if (FormData.has(latestfirst=='true')){
if(clas=="first" && 
flightno=="100" || flightno=="200" ||flightno=="300" ||flightno=="400" ||flightno=="500"){
fare=latestfirst; 
}
};
latesteco= FormData.append(ecoprices, value);
if (FormData.has(latesteco=='true')){
if(clas=="eco" && 
flightno=="100" || flightno=="200" ||flightno=="300" ||flightno=="400" ||flightno=="500"){
fare=latesteco;
}
};
latestpremium= FormData.append(premiumprices, value);
if (FormData.has(latestpremium=='true')){
if(clas=="premium" && 
flightno=="100" || flightno=="200" ||flightno=="300" ||flightno=="400" ||flightno=="500"){
fare=latestpremium;
}
latestbusi= FormData.append(busiprices, value);
if (FormData.has(latestbusi=='true')){
if(clas=="first" && 
flightno=="100" || flightno=="200" ||flightno=="300" ||flightno=="400" ||flightno=="500"){
fare=latestbusi;
}
}
latestwt= FormData.append(wtprices, value);
if (FormData.has(latestwt=='true')){
luggage=latestwt;
}
latesttaxes= FormData.append(latesttax, value);
if (FormData.has(latesttaxes=='true')){
taxes1=latesttaxes;
}

/*check if latest fares added*/
latestpricecheck= FormData.has(latestfirst, latesteco, latestpremium, latestbusi);
latestwtcheck= FormData.has(latestwt);
latesttaxcheck= FormData.has(latesttaxes);

/*discount fares*/
disc= document.querySelector("#discount");
discounts= FormData.append(disc, value);
if (FormData.has(discounts)=='true'){
disco= discounts;
   } 
  }
 }
}
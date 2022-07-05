<head>
<script src="https://../ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js">   
></script>

<script type="module" src ="paysys.js">
</script>
 import {txt} from "./paysys.js"
 </head>

<div data-ng-app="apps" data-ng-controller="control">
 
<div data-ng-include="paysystem.html">
  {{txt}}
</div>
</div>

  
<form id="processing">
Approval:<input type="number" id="respon" data-ng-model="approvalcase" value="Enter 1001/1002/1003/1004"/><br>
Declined:<input type="number" id="decline" data-ng-model="declinestat" value="Enter 1005/1012/1013/1027/1029/1039"/><br>
Retry:<input type="number" id="retry" data-ng-model="retrystat" value="Enter 1015/1017/1018/10191020/1021/1022"/><br>
Charg:<input type="number" id="charting" data-ng-model="cardcharges" value="Enter card payment charges"/>
<button data-ng-onclick="responded()">Submit</button>
 </form> 
  
<script>
var xt = angular.module("apps", []).controller ("control", function($scope,$timeout){
$scope.respond ="Approval response status"}).then(function(response){
$scope.text= response.data;
},
$timeout(function(){
$scope.text ="waiting for server data..."},3000),
function(response)$scope.error="'Data failed to upload'";
},
$scope.responded = function(){
   
}
    link:
    method: POST;
    url: "https://github.com/cool31/cool31/main/financial/paysystem.html";
 $scope.statuscode = response.status;

$scope.statusText = response.statusText;
 });  
});    
window.location..assign("https://github.com/cool31/cool31/main/financial/webpagestatus.html"); 
}

var approved = (document.getElementById("respon").value);
var chargedout = (document.getElementById("charting").value);
var declinedout  = (document.getElementById("decline").value);
var retryout = (document.getElementById("retry").value);

export{approved, chargedout, declinedout, retryout};
</script>


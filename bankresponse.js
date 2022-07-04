<script src="https://../ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js">   
></script>

<div data-ng-app="apps" data-ng-controller="control">
 
<div data-ng-include="paysystem.html">
</div>
</div>
console.log(txt); 
   
<form id="processing">
    Approval:<input type="number" id="response" data-ng-model="coderesponse" value="Enter 1001/1002/1003/1004/1005/1006/1008/1010/1015/1027/1031/1033/1040/1042"/><br>
Charges:<input type="number" id="charge" data-ng-model="cardcharges" value="Enter card payment charges"/>
<button data-ng-onclick="responded()">Submit</button>
 </form> 
  
<script>
function responded()
{
var xt = angular.module("apps", []).controller ("control", function($scope,$timeout){
$scope.respond ="Approval response status"}).then(function(response){
$scope.text= response.data;
},
$timeout(function(){
$scope.text ="waiting for server data..."},3000),
function(response)$scope.error="'Data failed to upload'";
},
    link:
    method: POST;
    url: "https://github.com/cool31/cool31/main/financial/paysystem.html";
 $scope.statuscode = response.status;

$scope.statusText = response.statusText;
 });  
});    
window.location..assign("https://github.com/cool31/cool31/main/financial/webpagestatus.html"); 
}
</script>


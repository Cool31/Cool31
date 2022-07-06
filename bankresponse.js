header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: https://github.com/cool31/cool31/main/financial/paysys.js");
<head>
<script src="https://../ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js">   
></script>

<script type="module" src ="https://github.com/cool31/cool31/main/financial/paysys.js">
</script>

 import {txt} from "./paysys.js"
 </head>

<div data-ng-app="apps" data-ng-controller="control">
 
<div data-ng-include="paysystem.html">
  {{txt}}
</div>
</div>
 
<form id="processing">
Approval:<input type="number" id="respon" data-ng-model="approved" value="Enter 1001/1002/1003/1004"/><br>
Declined:<input type="number" id="decline" data-ng-model="declined" value="Enter 1005/1012/1013/1027/1029/1039"/><br>
Retry:<input type="number" id="retry" data-ng-model="retry" value="Enter 1015/1017/1018/10191020/1021/1022"/><br>
Charg:<input type="number" id="charting" data-ng-model="cardcharges" value="Enter card payment charges"/>
<button data-ng-onclick="responded(approved, declined, retry, cardcharges)">Submit</button>
 </form> 
  
<script>
var xt = angular.module("apps", []).controller ("control", function($scope,$timeout,$http){
$scope.approved = null;
$scope.declined = null;
$scope.retry = null;$scope.cardcharges=null;
$scope.lblMsg;

scope.responded = function (approved, declined, retry, cardcharges) {
var data = {
approved: approved,
declined: declined,
retry: retry,
cardcharges:cardcharges
};

$http.post('/api/users/post', JSON.stringify(data)).then(function (response) {
if (response.data)

$scope.msg = "Post Data Submitted Successfully!";
}, function (response) {

$scope.msg = "Service not Exists";

$scope.statusval = response.status;

$scope.statustext = response.statusText;

$scope.headers = response.headers();
},
$timeout(function(){
$scope.text ="waiting for server data..."},3000),
function(response)$scope.error="'Data failed to upload'";
},
$scope.responded = function(){
    link:
    method: POST;
    url: "https://github.com/cool31/cool31/main/financial/paysystem.html";
 }   
 $scope.statuscode = response.status;

$scope.statusText = response.statusText;
 });  
});
    
xt.config(function($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist(['http://github.com/cool31/cool31/main/financial/.outputdata.php']);
});

export{approved, cardcharges, declined, retry};
</script>


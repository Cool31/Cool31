header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: https://github.com/cool31/cool31/main/financial/bankresponse.js");
<div data-ng-app="appapp" ng-controller="controls"></div>

<script type="module" src ="https://github.com/cool31/cool31/main/financial/bankresponse.js">
</script> 

export {txt};
import {{approved, declined, retry, cardcharges}} from "./bankresponse.js";

<div data-ng-include="paysystem.html";
  data-ng-include="bankresponse.html">
 </div>
 
 <script>
  var xxp =angular.module("appapp", []).controller("controls", function(){
 var requ ={
method: POST;
url: "https://github.com/cool31/cool31/main/financial/bankresponse.js", headers:{'Content-Type': 'application/json' }, data: 'txt':$scope.txt});

$http(requ).success(function(response) {$scope.usersData = response.users;$scope.response.users;
$scope.message = response.message;});
});

xxp.config(function($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist(['http://github.com/cool31/cool31/main/financial/.outputdata.php']);
});

</script> 

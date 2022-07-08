header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: https://GitHub.com/cool31/cool31/main/financial/bankresponse.js");

header("Access-Control-Allow-Origin:https://github.com/monsur/test-cors.org");
header("Access-Control-Allow-Origin:https://test-cors.org");

<system.webServer>
<httpProtocol> <customHeaders> <add name="Access-Control-Allow-Origin" value="*"/> 
 <add name="Access-Control-Allow-Headers" value="Content-Type" /> 
 <add name="Access-Control-Allow-Methods" value="GET, POST, PUT, DELETE, OPTIONS" /> 
</customHeaders>
</httpProtocol>
</system.webServer>

const express = require('express');
const request = require('request');
const app = express();
app.use((req, res, next) => { res.header('Access-Control-Allow-Origin', '*'); next();});
app.get('/bankresponse/random', (req, res) => { request( { url: 'https://github.com/cool31/cool31/main/financial/bankresponse.js/random' }, (error, response, body) => { if (error || response.statusCode !== 200) { return res.status(500).json({ type: 'error', message: err.message }); }
res.json(JSON.parse(body)); } )});
const PORT = process.env.PORT || 8000;app.listen(PORT, () => console.log(`=> console.log(`listening on ${PORT}`));
    
Header set Access-Control-Allow-Origin "https://github.com/cool31/cool31/main/financial/bankresponse.js"
Header set Access-Control-Allow-Methods "GET,PUT,POST,DELETE"
Header set Access-Control-Allow-Headers "Content-Type, Authorization"

<div data-ng-app="appapp" ng-controller="controls"></div>

<script type="module" src ="https://github.com/cool31/cool31/main/financial/bankresponse.js">
</script> 

export {txt};
import {{approved, chargedout, tryout, cardcharges}} from "./bankresponse.js";

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
</script> 

<?php
include 'fileget.php';
include 'fileformat.php';
include "fatalerrors.php";
include "networkmonitor.html";
include "virusscan.js";
include "fatalerrors.php";
include "customerdatavalidity.php"

ini_set('display_error', 1);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json"; charset="UTF-8");

echo .htmlspecialchars($_GET['input']);
echo filter_input(INPUT_GET, "input", FILTER_SANITIZE_SPECIAL_CHARS);
echo urlencode($_GET['input']);
$input = filter_input(INPUT_GET, "input", FILTER_SANITIZE_URL);

echo '<a href = "https://.../?input=" .$input.>XSS_Secured_input/output Data</a>';

session_start();
function csrftokengenerator(){
if(isset('csrf_token')){
/*create token if not present*/
$token = random_bytes(64);
($_SESSION['csrf_token']) = $token;
}
else{
/*reuse token*/
$token = ($_SESSION['csrf_token']);
}
return $token;

if($_GET['csrf_token'] == ($_SESSION['csrf_token']){
 unset($token);
 }
 else{
 die('token validation failed');    
 }
 

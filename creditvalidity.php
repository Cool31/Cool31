<?php
require_once "networkmonitor.php";

echo "htmlspecialchars($_SERVER['PHP_self'])";

$data = filter_input(INPUT_POST, 'data', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY);

$data = filter_input(INPUT_POST, 'data',  FILTER_DEFAULT, FILTER_FORCE_ARRAY);
 
$MY_INPUT = filter_input_array(INPUT_POST, [
    "item_id" => FILTER_SANITIZE_NUMBER_INT,
    "item_string_code" => FILTER_SANITIZE_STRING,
 "method" => FILTER_SANITIZE_STRING,
 "item_id_array" => array(
 'filter' => FILTER_SANITIZE_NUMBER_INT,
 'flags' => FILTER_REQUIRE_ARRAY
    )
]); 
 
$creditfullname=$cardno=$expdate=$expmonth=$expyear=$cvv= " ";

$creditfullnameErr=$cardnoErr=$expyearErr=$expmonthErr=$expdateErr=$cvvErr= " ";

if($_SERVER['REQUEST_METHOD'] == "POST"){
if(empty($_POST['$creditfullname']))
{
$creditfullnameErr = "Empty name field, Name required";
}else{
if(!preg_match_all("/^[a-zA-Z]*$/", $creditfullname))
{
$creditfullnameErr = "Alphabets only, no whitespaces, please";
}else{
creditfullname = funda($_POST['$cardno']);
   }
 }
}
 if(empty($_POST['$cardno']))
{
$cardnoErr = "Empty field, please. Card Number required";
}else{
if(!preg_match_all("/^[a-zA-Z]([0-9])*$/", $cardno))
{
$cardnoErr = "no whitespaces";
}else{
$cardno = funda($_POST['$cardno']);
  }
}

//checkdate() or validateDate()?? to crosschk

if(empty($POST['$expdate']){
$expdateErr = "Empty date, kindly fill";
}else{
if(preg_match_all("/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/",$expdate)) {
return true;
}else{
return false;
}else{
$expdate = funda($_POST['$expdate']);
  }
}

if(empty($_POST['$cvv'])){
$cvvErr = "Empty cvv, kindly fill with digits";
}else{
$cvv = funda($_POST['$cvv']);
}

function funda($dan)
{
$dan = trim($dan);
$dan = stripslashes($dan);
$dan = htmlspecialchars($dan);
return $dan;
}

$file_dir = "fileups/";
$filetarget = $file_dir . basename($FILES["expenses"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($filetarget['PATHINFO_EXTENSION']));
   if(isset($_POST["submit"])){
 $fileupstatus = getimagesize($_FILES["expenses"]["teme"]);
    if($fileupstatus !== false){
 echo "Upload file is right file....upload" .$fileupstatus("mime"). ".";
$uploadOK = 1;
}else{
echo "Not the right file...sorry!";
$uploadOk = 0;
  }
}
 if(file_exist($filetarget)){
echo "sorry, file already exists"
  $uploadOk = 0 ;
 }

if($_FILES["expenses"]["size"] > 200000){
echo "upload file is too large, sorry";
uploadOk = 0;
}

if($imageFileType !== "png" && $imageFileType !== "jpg" && £imageFileType !== "gif"){
 echo "only png, jpg and gif files accepted";
uploadOk = 0;
}

if(uploadOk == 0){
echo "file not uploaded, please try again!"
}else{
if(move_uploaded_file($_FILES['expenses']['teme'], $filetarget)){
echo "The file" . basename($_FILES['expenses']['name']). "is uploaded";
}else{
echo "file failed to upload, please check";
}

?>
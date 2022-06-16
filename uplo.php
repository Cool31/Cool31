<?php

echo "htmlspecialchars($_SERVER['PHP_self'])";

$firstname=$lastname=$surname=$initial=$gender=$address=$email=$mobile=$url=$bday=$bday1=$myfile=$form_submission=$message = " ";

$firstnameErr=$lastnameErr=$surnameErr=$initialErr=$genderErr=$addressErr=$url=$emailErr=$mobileErr=$bdayErr=$bday1Err=$myfileErr=$form_submissionErr=$messageErr = " ";

if($_SERVER['REQUEST_METHOD'] == "POST")
  {
  if(empty($_POST['$firstname']))
    {
     $firstnameErr = "Empty name field, Name required";
    }
      else
   {
      if(!preg_match("/^[a-zA-Z]*$/", $firstname))
   {
    $firstnameErr = "Alphabets only, no whitespaces, please";
    }
  else
   {
firstname = funda($_POST['$lastname']);
   }
 }
}

 if(empty($_POST['$lastname']))
  {
    $lastnameErr = "Empty field name, please. Name required";
  }
     else
  {
      if(!preg_match("/^[a-zA-Z]*$/", $lastname))
  {
    $lastnameErr = "Only alphabets, no whitespaces";
  }
  else
 {
$lastname = funda($_POST['$lastname']);
  }
}

if(empty($POST['$surname'])
 {
  $surnameErr = "Empty surname, kindly fill";
 }
   else
 {
     if(!preg_match("/^[a-zA-Z]*%", $surname))
 {
   $surnameErr = "No blank spaces permitted";
 }
  else
 {
$surname = funda($_POST['$surname']);
  }
}

if(empty($_POST['$initial']))
  {
  $initialErr = "Enter initials if any";
  }
   else
  {
  $initialErr = " ";
  }
 else
 {
$initial = funda($_POST['$initial']);
}

if(empty($_POST['$email']))
  {
   $emailErr = "Empty email, enter email address please";
  }
    else
  {
     if (!filter_var($email, FILTER_VALIDATE_EMAIL))
  {
   $emailErr = "Enter valid email address";
  }
    else
  {
  $email = funda($_POST['$email']);
  }
}


if(empty($_POST ['$address']))
  {
   $addressErr = "Empty address, kindly fill it please";
  }
    else
  {
 $address = funda($_POST['$address']);
}

if(empty($_POST['$url']))
 {
   $url = " ";
 }
    else
 {
     if(!preg_match(("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%? =~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$url))
  {
  $urlErr = "Enter valid url address";
  }
 else
  {
$url = funda($_POST['$url']);
 }
}

if(empty($_POST['$mobile']))
 {
  $mobileErr = "Empty mobile numbers, kindly fill with digits";
 }
 else
 {
  $mobile = funda($_POST['$mobile']);
 }

if(empty($_POST['$message']))
  {
  $messageErr = " ";
  }
  else
  {
  $message = funda($_POST['$message']);
  }

<input type = "radio" name = "gender"><?php if(isset($gender) && &gender == "male") echo "checked";?> value = "Male">Male;
<input type = "radio" name = "gender"><?php if (isset($gender) && $gender == "female") echo "checked"; ?> value = "female">Female;
<input type = "radio" name = "gender"><?php if(isset($gender) && $gender == "transgender") echo "checked";?> value = "transgender">Transgender;<br/>

function funda($dan)
 {
 $dan = trim($dan);
 $dan = stripslashes($dan);
 $dan = htmlspecialchars($dan);
 return $dan;
 }


$file_dir = "fileups/";
  $filetarget = $file_dir . basename($FILES["myfile"]["name"]);
  $uploadOk = 1;
  $imageFileType = strtolower(pathinfo($filetarget['PATHINFO_EXTENSION']));
   if(isset($_POST["submit"]))
   {
    $fileupstatus = getimagesize($_FILES["myfile"]["teme"]);
    if($fileupstatus !== false)
     {
     echo "Upload file is right file....upload" .$fileupstatus("mime"). ".";
     $uploadOK = 1;
    }
     else
    {
     echo "Not the right file...sorry!";
     $uploadOk = 0;
    }
  }
 if(file_exist($filetarget))
  {
  echo "sorry, file already exists"
  $uploadOk = 0 ;
 }

 if($_FILES["myfile"]["size"] > 200000)
 {
 echo " upload file is too large, sorry";
 uploadOk = 0;
 }

 if($imageFileType !== "png" && $imageFileType !== "jpg" && £imageFileType !== "gif")
  {
   echo "only png, jpg and gif files accepted";
   uploadOk = 0;
   }

if(uploadOk == 0)
  {
  echo "file not uploaded, please try again!"
  }
  else
  {
  if(move_uploaded_file($_FILES['myfile']['teme'], $filetarget))
  {
  echo "The file" . basename($_FILES['myfile']['name']). "is uploaded";
  }
  else
  {
  echo "file failed to upload, please check";
  }
  ?>
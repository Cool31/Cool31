<?php
$cookiename = "user";
$cookievalue = mymodel;
setcookie($cookiename, $cookievalue, time() + (86400 *30), "/");
?>
<html>
<body>
<? php
if(!isset ($_COOKIE[$cookiename]){
 echo "cookie is not set" .$cookiename;
}
else{
echo "cookie is set". $_COOKIE([$cookiename]);
}

if(navigator.cookieEnabled === false){
 alert('cookies not enabled in browser');
 }
}
?>
</body>
</html>
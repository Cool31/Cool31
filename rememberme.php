<php ?=
function login($user){
$token = GenerateRandomToken();
storeTokenForUser($user);
$cook = $user . ":" . $token;
$mac = hash_hmac(sha256,$cook, SECRET_KEY);
$cook .= ":".$mac;
setcookie('rememberme', $cook);
}

/*validate token*/
function remember(){
 Scook = isset($_COOKIE['rememberme']) ? $_COOKIE['rememberme'] : '';
 if($cook){
 list($user, $token, $mac) = explode(':' $cook);
if(!hash_equals(hash_hmac('sha256', $user . ':'. $token, SECRET_KEY)$mac);
return false;
 }  
 
$usertoken = fetchTokenByUserName($user);
if(hash_equals($token, $usertoken){
    logUserIn($user);
    }
  }
}

<?=
if(!isset($_SERVER['PHP_AUTH_USER'])){
header('WWW-Authenticare: Basic realm ="MyRealm"');
header('HTTP/1.0, 401 Unauthorized');
exit;
}
echo "<p> Hello $_SERVER['PHP_AUTH_USER'] </p>";
$user = $_SERVER['PHP_AUTH_USER'];
echo "<p> You entered $_SERVER['PHP_AUTH_PW'] as your password</p>";
$pwd = $_SERVER['PHP_AUTH_PW'];
?>
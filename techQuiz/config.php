<?php 
define('MYSQL_NAME','root');
define('MYSQL_HOST','localhost');
define('MYSQL_DATABASE','itpecexam');
define('MYSQL_PASSWORD','');

$pdoOptions = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION );
$conn = new PDO ('mysql:host='  .MYSQL_HOST.';dbname='  .MYSQL_DATABASE,MYSQL_NAME,MYSQL_PASSWORD,$pdoOptions);

?>
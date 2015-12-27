<?php
session_start();

$DB['host'] = "localhost"; 
$DB['id'] = /*your id*/; 
$DB['password'] = /*your password*/; 
$DB['db'] = /*your db name*/; 
$connect = mysql_connect($DB['host'], $DB['id'], $DB['password']) or die("Can't Connect MySQL Server!!");

mysql_query("SET NAMES UTF8"); 
mysql_select_db($DB['db']);

?>

<?php
include("../config.php");
if(!isset($_SESSION["user_id"])){
    echo "error";
    exit;
}else{
    $query = "SELECT idx FROM message";
    $result = mysql_num_rows(mysql_query($query));
    
    echo $result;
    exit;
}
?>
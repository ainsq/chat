<?php
include("../config.php");
if(!isset($_SESSION["user_id"]) || !isset($_POST["sender"]) || !isset($_POST["message"])){
    echo "error";
    exit;
}else{
    /*sendun : sendusernic  |  sendm : sendmessage*/
    $sendun = mysql_real_escape_string(htmlspecialchars(stripcslashes($_POST["sender"])));
    $sendm = mysql_real_escape_string(htmlspecialchars(stripcslashes($_POST["message"])));
    $query = "INSERT INTO `message` VALUES(NULL, '$sendun', '$sendm')";
    $result = mysql_query($query);
    if($result){
        echo "$sendm";
        exit;
    }else{
        echo "fail";
        exit;
    }
}
?>

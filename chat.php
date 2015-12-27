<?php
include "../config.php";
?>
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>채팅방</title>
    </head>
        
<?
if(isset($_POST["postit"]) && isset($_SESSION["user_id"])){
    ?>
    <body>
        <div id="send_div">
            <input type="text" id="sendChatValue"/>
            <button id="sando">전송</button>
        </div>
        <div id="request_div"></div>
    </body>
    <?php
        $usernics = $_SESSION["user_nic"];
        echo "<script>var usernic = '$usernics';</script>";
    ?>
    <script src="chat.js"></script>
</html>
<?
}else{
    echo "<script>alert('잘못된 접근입니다!');history.back();</script></html>";
    exit;
}
?>
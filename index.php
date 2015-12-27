<?php
include "../config.php";
?>
    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8"/>
        <title>하이개그챗</title>
    </head>
    <body>
        <?php
if(isset($_SESSION["user_id"])){
  ?>
            <form id="post_id" method="post" action="chat.php">
                <input type="hidden" name="postit" value="<?=$_SESSION['user_id']?>" />
                <input type="submit"/>
            </form>
            <script>
                document.getElementById("post_id").submit();
            </script>
    </body>
    </html>
    <?
  exit;
}else{
?>
        <div>로그인이 필요한 서비스입니다.</div>
        <a href="http://higag.net/account/login.php">로그인하기</a>
        </body>
        </html>
        <?
    exit;
}
?>
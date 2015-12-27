var lastSendIdx = 0;
getxmlhttp(0, "");

document.getElementById('sando').onclick = function(){
    if(document.getElementById('sendChatValue').value != ""){
        sendmessage();
        document.getElementById('sendChatValue').value="";
    }
};

document.getElementById('sendChatValue').onkeydown = function(){
    if(event.keyCode == 13 && document.getElementById('sendChatValue').value != ""){
        sendmessage();
        document.getElementById('sendChatValue').value="";
    }
}

var a = setInterval(ab, 500);

function ab(){
    getmessage();
}

/* checktype의 정의 */
/*
0 : 맨 처음 수신
1 : 보통 메세지 수신
2 : 보통 메세지 발신
*/

function sendmessage(){
    var sendMessage = "sender=" + usernic + "&message=" + document.getElementById('sendChatValue').value;
    getxmlhttp(2, sendMessage);
}

function getmessage(){
    var getmessage = "lastIdx=" + lastSendIdx;
    getxmlhttp(1, getmessage);
}

function getxmlhttp(type, sendtext){
    var xmlhttp = null;
    if(window.XMLHttpRequest){
        xmlhttp =  new XMLHttpRequest();
    }else if(Window.ActiveXObject){
        xmlhttp =  new ActiveXObject('Microsoft.XMLHTTP');
    }


    xmlhttp.open('POST', typegetxml(type));
    xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState=='4' && xmlhttp.status==200){
            if( xmlhttp.status==500 || xmlhttp.status==404 || xmlhttp.status==403 ){
                console.log( xmlhttp.status );
            }else{
                var responseValue = xmlhttp.responseText;
                aftersend(type, responseValue);
            }
        }
    }
    if(type==0){
        xmlhttp.send();
    }else if(type==1 || type==2){
        xmlhttp.send(sendtext);
    }
}

function typegetxml(type){
    if(type==0){
        return "./firstcheck.php";
    }
    else if(type==1){
        return "./getmessage.php";
    }else if(type==2){
        return "./sendmessage.php";
    }
}

function aftersend(type, responseValue){
    if(type==0){
        lastSendIdx = Number(responseValue);
    }else if(type==1){
        getxmlhttp(0, "");
        pulling(responseValue);
    }else if(type==2){
        if(responseValue != "error"){
            makesent(usernic, responseValue, 2);
            lastSendIdx++;
        }else{
            alert('전송오류!');
        }
    }
}

function pulling(responseValue){
    if(responseValue == "error"){
        console.log("error!");
        return;
    }else if(responseValue != ""){
        var jsons = JSON.parse(responseValue);
        var jsonslength = Object.keys(jsons).length;
        var i=0;

        for(i=0; i<jsonslength; i++){
            makesent(jsons[i].sender,jsons[i].message, 1);
        };
        return;
    }
}

function makesent(sender, message, type){
    var target = document.getElementById("request_div");
    var plustext = "["+ sender+"]"+message;
    var nodetext = document.createTextNode(plustext);
    var tg = document.createElement("div");
    if(type==2){
      tg.style.color = "blue";
    }
    tg.appendChild(nodetext);
    target.appendChild(tg);
}

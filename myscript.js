window.onload = function(){

var sec=0;
var tens=0;

var apendTens = document.getElementById("tens");

var apendSeconds = document.getElementById("seconds");

var btSt=document.getElementById("button-start");

var btSp = document.getElementById("button-stop");

var btRst =document.getElementById("button-reset");

var Interval;
btSt.onclick=function(){
    clearInterval(Interval);
     Interval
    = setInterval(startTimer,10);
}

btSp.onclick= function(){
    clearInterval(Interval);
}

btRst.onclick = function(){
    clearInterval(Interval);
    tens="00";
    sec="00";
    apendTens.innerHTML = tens;
    apendSeconds.innerHTML=sec;
}


function startTimer(){
    tens++;


    if(tens<=9){
        apendTens.innerHTML = "0"+tens;
    }

    if(tens>9){
        apendTens.innerHTML = tens;
    }

    if(tens>99){
        console.log("sec");
        sec++;
        apendSeconds.innerHTML="0"+sec;
        tens=0;
        apendTens.innerHTML="0"+0;
    }

    if(sec>9){
        apendSeconds.innerHTML=sec;
    }
}
}
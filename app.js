//Variables for button
const startStopBtn=document.querySelector("#startStopBtn")
const resetBtn=document.querySelector("#resetBtn")

//variable for time values
let seconds=0;
let minutes=0;
let hours=0;

//variable for leading zeros;
let leadingseconds=0;
let leadingminutes=0;
let leadinghours=0;

//variale for set interval and stopwatch function
let timerInterval=null;
let timerStatus="stopped"

// Stop Watch Function

function stopWatch(){
    seconds++

    if(seconds/60 === 1){
        seconds=0;
        minutes++;

        if(minutes/60 === 1){
            minutes=0;
            hours++;
        }
    }
    //for seconds
    if (seconds<10) {
        leadingseconds="0" + seconds.toString();
    }
    else{
        leadingseconds=seconds;
    }
//for minutes
if (minutes<10) {
    leadingminutes="0" + minutes.toString();
}
else{
    leadingminutes=minutes;
}
//for hours
if (hours<10) {
    leadinghours="0" + hours.toString();
}
else{
    leadinghours=hours;
}

    let displayTimer=document.getElementById("timer").innerText= 
    leadinghours + ":" + leadingminutes + ":" + leadingseconds;
}
//window.setInterval(stopWatch,1000)
;
startStopBtn.addEventListener("click",function(){
    if(timerStatus==="stopped"){
        timerInterval=window.setInterval(stopWatch,1000);
        document.getElementById("startStopBtn").innerHTML='<i class="fa-solid fa-pause" id="pause"></i>';
        timerStatus="started";
    }
    else{
        window.clearInterval(timerInterval);
        document.getElementById("startStopBtn").innerHTML='<i class="fa-solid fa-play" id="play"></i>';
        timerStatus="stopped";
    }
});

//reset button 
resetBtn.addEventListener("click",function(){
    window.clearInterval(timerInterval);
    seconds=0;
    mintues=0;
    hours=0;
    document.getElementById("timer").innerHTML="00:00:00";
})

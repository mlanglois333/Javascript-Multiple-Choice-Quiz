var mainBody = document.getElementById("#main");
var timerDisp = document.getElementById("#timer");
var scoreDisp = document.getElementById("#score");
var startBtn = document.getElementById("#startQuiz");
var currentScore = 0;
var currentTime = 0;
var questions = [
    { 
        question: "q1",
        answers: {
            a: "a",
            b: "b",
            c: "c",
            b: "d",
        },
        correct: "a"
    },
    { 
        question: "q2",
        answers: {
            a: "a",
            b: "b",
            c: "c",
            b: "d",
        },
        correct: "a"
    },
    { 
        question: "q3",
        answers: {
            a: "a",
            b: "b",
            c: "c",
            b: "d",
        },
        correct: "a"
    },
    { 
        question: "q4",
        answers: {
            a: "a",
            b: "b",
            c: "c",
            b: "d",
        },
        correct: "a"
    },
    { 
        question: "q5",
        answers: {
            a: "a",
            b: "b",
            c: "c",
            b: "d",
        },
        correct: "a"
    },
]
startBtn.addEventListener("click", timer(180, timerDisp)),

function quiz() {



}


function timer (duration, display) {

    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

//window.onload = function () {
  //  var threeMinutes = 60 * 3,
    //    display = timerDisp;
    //startTimer(threeMinutes, display);
//};





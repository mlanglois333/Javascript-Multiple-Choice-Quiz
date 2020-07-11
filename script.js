var mainBody = document.querySelector("#main");
var timerDisp = document.querySelector("#timer");
var scoreDisp = document.querySelector("#score");
var startBtn = document.querySelector("#startQuiz");
var questions = document.querySelector("questions");
var answers = document.querySelector("answers");
var answerA = document.querySelector("A");
var answerB = document.querySelector("B");
var answerC = document.querySelector("C");
var answerD = document.querySelector("D");

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
    }
];

function quiz() {



}


function score() {




}

function timer() {

 

let secondsRemaining = 60;
setInterval(function() {
if (secondsRemaining > 0) { 
    timerDisp.textContent = secondsRemaining; 
    secondsRemaining--;}
    else {return}
},
    1000); 



}





startBtn.addEventListener("click", timer());




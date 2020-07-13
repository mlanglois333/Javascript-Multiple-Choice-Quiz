var mainBody = document.querySelector("#main");
var timerDisp = document.querySelector("#timer");
var scoreDisp = document.querySelector("#score");
var startBtn = document.querySelector("#startQuiz");
var questionEl = document.getElementById("questions");
var answers = document.getElementById("answers");
var answerA = document.getElementById("a");
var answerB = document.getElementById("b");
var answerC = document.getElementById("c");
var answerD = document.getElementById("d");
let indexNo = 0;
var questions = [
    { 
        question: "q1",
        
            a: "a",
            b: "b",
            c: "c",
            d: "d",
       
        correct: "a"
    },
    { 
        question: "q2",
        
            a: "a",
            b: "b",
            c: "c",
            d: "d",
        
        correct: "a"
    },
    { 
        question: "q3",
        
            a: "a",
            b: "b",
            c: "c",
            d: "d",
        
        correct: "a"
    },
    { 
        question: "q4",
        
            a: "a",
            b: "b",
            c: "c",
            d: "d",
        
        correct: "a"
    },
    { 
        question: "q5",
        
            a: "a",
            b: "b",
            c: "c",
            d: "d",
        
        correct: "a"
    }
];
let arrLength = questions.length ;

function quiz() {

    let qu = questions[indexNo];
    questionEl.innerHTML = "<p>" + qu.question + "</p>";
    answerA.innerHTML = "<p>" +qu.a + "</p>";
    answerB.innerHTML = "<p>" +qu.b + "</p>";
    answerC.innerHTML = "<p>" +qu.c + "</p>";
    answerD.innerHTML = "<p>" +qu.d + "</p>";

}

function nextQ(){

    indexNo++;
    quiz();

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




quiz();


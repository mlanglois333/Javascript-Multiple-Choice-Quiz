var mainBody = document.getElementById("main");
var timerDisp = document.getElementById("timer");
var scoreDisp = document.getElementById("score");
var strtBtn = document.getElementById("strtBtn");
var questionEl = document.getElementById("questions");
var answers = document.getElementById("answers");
var answerA = document.getElementById("a");
var answerB = document.getElementById("b");
var answerC = document.getElementById("c");
var answerD = document.getElementById("d");
let indexNo = 0;
let secondsRemaining = 60;
let score = 60;
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
let arrLength = questions.length - 1 ;

function quiz() {

    let qu = questions[indexNo];
    questionEl.innerHTML = "<p>" + qu.question + "</p>";
    answerA.innerHTML = "<p>" +qu.a + "</p>";
    answerB.innerHTML = "<p>" +qu.b + "</p>";
    answerC.innerHTML = "<p>" +qu.c + "</p>";
    answerD.innerHTML = "<p>" +qu.d + "</p>";

    console.log("quiz");
}

function nextQ(){

    indexNo++;
    quiz();
    console.log("next");
}


function timer() {

 


setInterval(function() {
if (secondsRemaining > 0) { 
    timerDisp.textContent = secondsRemaining; 
    secondsRemaining--;}
    else {return}
},
    1000); 
    console.log("timer");
}


function checkA(){
    if (questions[indexNo].correct === "a" && indexNo < arrLength ) {
        nextQ();
    }
    else if (questions[indexNo].correct != "a") {score = score - 10;displaySc();}
    else {console.log("end display");}
    console.log("a");
    
}

function checkB(){
        if (questions[indexNo].correct === "b" && indexNo < arrLength ) {
            nextQ();
        }
        else if (questions[indexNo].correct != "b") {score = score - 10;displaySc();}
        console.log("b");
    }

function checkC(){
            if (questions[indexNo].correct === "c" && indexNo < arrLength ) {
                nextQ();
            }
        
            else if (questions[indexNo].correct != "c") {score = score - 10;displaySc();}
 console.log("c");       }
        
function checkD(){
                if (questions[indexNo].correct === "d" && indexNo < arrLength ) {
                    nextQ();
                }
                else if (questions[indexNo].correct != "d") {score = score - 10;displaySc();}
            }
   
function displaySc(){
            scoreDisp.innerHTML = "<p>" + score + "</p>";}



strtBtn.addEventListener("click", function(){quiz()});
strtBtn.addEventListener("click", function(){timer()});
answerA.addEventListener("click", function(){checkA()});
answerB.addEventListener("click", function(){checkB()});
answerC.addEventListener("click", function(){checkC()});
answerD.addEventListener("click", function(){checkD()});
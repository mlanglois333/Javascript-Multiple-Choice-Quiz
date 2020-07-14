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
var scoreBoard = document.getElementById("scoreBoard");
var scoreTitle = document.getElementById("scoreTitle");
var scoreContent = document.getElementById("scoreContent");
let highScore = [];
let indexNo = 0;
let secondsRemaining = 60;

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






function endScrn() {  
 
 var score = secondsRemaining;
var scoreLength = highScore.length;


var initials = prompt("Enter your initals");
var addScr = initials + " -- " + score;

function renderScore(){

    for (i = 0; i <= scoreLength; i++) {
 scoreContent.append(highScore[i]);}
 
}





highScore.push(addScr);
renderScore();
clear();
console.log(highScore);
strtBtn.innerHTML="<button> Click to start!</button";
    strtBtn.addEventListener("click", function(){replay()});
    




}

function quiz() {
    scoreContent.innerHTML = "";
    strtBtn.innerHTML="";
    let qu = questions[indexNo];
    questionEl.innerHTML = "<p>" + qu.question + "</p>";
    answerA.innerHTML = "<button>" +qu.a + "</button>";
    answerB.innerHTML = "<button>" +qu.b + "</button>";
    answerC.innerHTML = "<button>" +qu.c + "</button>";
    answerD.innerHTML = "<button>" +qu.d + "</button>";
    
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
    timerDisp.textContent = secondsRemaining + " seconds remaining"; 
    secondsRemaining--;}
    else {
        alert("Time is up, you lose :(");
        replay();

    
    }
},
    1000); 
    console.log("timer");
}






function checkA(){
    if (questions[indexNo].correct === "a" && indexNo < arrLength ) {
        nextQ();
    }
    else if (questions[indexNo].correct != "a") {secondsRemaining = secondsRemaining-10;}
    else {endScrn(); 
        
        console.log("end display");}
    console.log("a");
    
}

function checkB(){
        if (questions[indexNo].correct === "b" && indexNo < arrLength ) {
            nextQ();
        }
        else if (questions[indexNo].correct != "b") {secondsRemaining = secondsRemaining-10;}
        else {endScrn(); console.log("end display");}
        console.log("b");
    }

function checkC(){
            if (questions[indexNo].correct === "c" && indexNo < arrLength ) {
                nextQ();
            }
        
            else if (questions[indexNo].correct != "c") {secondsRemaining = secondsRemaining - 10;}
            else {endScrn(); console.log("end display");}
 console.log("c");       }
        
function checkD(){
                if (questions[indexNo].correct === "d" && indexNo < arrLength ) {
                    nextQ();
                }
                else if (questions[indexNo].correct != "d") {secondsRemaining = secondsRemaining - 10;}
                else {endScrn();
                    console.log("end display");}
            }
   




function displaySc(){
            scoreDisp.innerHTML = "<p> current score: " + score + "</p>";}



     function clear(){
         indexNo= 0;
                secondsRemaining = 60;
                score = 60;
                questionEl.innerHTML = "";
                answerA.innerHTML = "";
                answerB.innerHTML = "";
                answerC.innerHTML = "";
                answerD.innerHTML = "";
                console.log(clear);
                
            }

            function replay() {
                var tryAg = confirm("Try again?");
                if (tryAg === true) {restart();}
                else {alert("Thank you for playing!");
                }
                
                
                }
            
function restart(){
    clear();
    quiz();
}

function startAppear(){
    strtBtn.innerHTML="<button> Click to start!</button";
    strtBtn.addEventListener("click", function(){quiz()});
    strtBtn.addEventListener("click", function(){timer()});
}



answerA.addEventListener("click", function(){checkA()});
answerB.addEventListener("click", function(){checkB()});
answerC.addEventListener("click", function(){checkC()});
answerD.addEventListener("click", function(){checkD()});
window.onload= startAppear();
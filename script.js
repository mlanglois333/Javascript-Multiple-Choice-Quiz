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
var formEl = document.getElementById("formEl");
var scoreContent = document.getElementById("scoreContent");
let highScore = [];
let indexNo = 0; 
let  x = true;

var questions = [
    {
        question: "How many milliseconds are in a second?",

        a: "1,000",
        b: "100",
        c: "10,000",
        d: "1,000,000",

        correct: "a"
    },
    {
        question: "Which of the following terms is not used in a loop:",

        a: "but",
        b: "for",
        c: "if",
        d: "else",

        correct: "a"
    },
    {
        question: "Which of the following can be used to modify the appearance of a page",

        a: "all of them",
        b: "html",
        c: "css",
        d: "js",

        correct: "a"
    },
    {
        question: "Which is a term specific to an aspect of JavaScript:",

        a: "hoisting",
        b: "heaving",
        c: "hoarding",
        d: "horchata",

        correct: "a"
    },
    {
        question: "How long did it take to write the code for this quiz",

        a: "What day is it now?",
        b: "20 hours",
        c: "30 hours",
        d: "40 hours",

        correct: "a"
    }
];
let arrLength = questions.length - 1;
let secondsRemaining = 60;



function endScrn() {

    var score = secondsRemaining;
    var scoreLength = highScore.length;


    var initials = prompt("Enter your initals");
    var addScr = initials + " -- " + score;
 
    function renderScore() {

        for (i = 0; i <= scoreLength; i++) {
            scoreContent.append(highScore[i]);
        }

    }
  




    highScore.push(addScr);
    renderScore();
   clear();
    console.log(highScore);
startAppear();
  console.log(secondsRemaining);




}














function clear() {
    indexNo = 0;
    

    questionEl.innerHTML = "";
    answerA.innerHTML = "";
    answerB.innerHTML = "";
    answerC.innerHTML = "";
    answerD.innerHTML = "";
    console.log(clear);

}


function strtQuiz()
 { 

     
    
    secondsRemaining = 60;
    
    var interval = setInterval(function () {

        secondsRemaining--;

        if (secondsRemaining <= 0) {
            clearInterval(interval);
            timerDisp.innerHTML = "";
            questionEl.innerHTML = "Out of time, you LOSE!!!";
            startAppear();

            return;
        }
     


        else {
            timerDisp.innerHTML = secondsRemaining;
            console.log("Timer --> " + secondsRemaining);
        }
    }
    
     , 1000);



     function quiz() {
    
     
    
    
   
        strtBtn.innerHTML = "";
        let qu = questions[indexNo];
        questionEl.innerHTML = "<p>" + qu.question + "</p>";
        answerA.innerHTML = "<button>" + qu.a + "</button>";
        answerB.innerHTML = "<button>" + qu.b + "</button>";
        answerC.innerHTML = "<button>" + qu.c + "</button>";
        answerD.innerHTML = "<button>" + qu.d + "</button>";
    
    
    }
    
    
    
    
    function nextQ() {
    
        indexNo++;
        quiz();
        console.log("next");
    }
    
    
    
    function checkA() {
        if (questions[indexNo].correct === "a" && indexNo < arrLength) {
           
            nextQ();
        }
        else if (questions[indexNo].correct != "a") { secondsRemaining = secondsRemaining - 10; }
        else if (questions[indexNo].correct === "a" && indexNo === arrLength){
            x = false;
            console.log(x)
            endScrn();
            clearInterval(interval);
            return;
         
        }
        console.log("a");
    
    }
    
    function checkB() {
        if (questions[indexNo].correct === "b" && indexNo < arrLength) {
            nextQ();
        }
        else if (questions[indexNo].correct != "b") { secondsRemaining = secondsRemaining - 10; }
        else { endScrn(); console.log("end display"); }
        console.log("b");
    }
    
    function checkC() {
        if (questions[indexNo].correct === "c" && indexNo < arrLength) {
            nextQ();
        }
    
        else if (questions[indexNo].correct != "c") { secondsRemaining = secondsRemaining - 10; }
        else { endScrn(); console.log("end display"); }
        console.log("c");
    }
    
    function checkD() {
        if (questions[indexNo].correct === "d" && indexNo < arrLength) {
            nextQ();
        }
        else if (questions[indexNo].correct != "d") { secondsRemaining = secondsRemaining - 10; }
        else {
            endScrn();
            console.log("end display");
        }
    }
    
function firstEvnt(){
 
    if (x === false) {return}
else { answerA.addEventListener("click", function () { checkA() });
answerB.addEventListener("click", function () { checkB() });
answerC.addEventListener("click", function () { checkC() });
answerD.addEventListener("click", function () { checkD() });
x =false;
}
}

quiz();
firstEvnt();





    









}


function startAppear() {
    strtBtn.innerHTML = "<button> Click to start!</button";

   


}




startAppear();



 strtBtn.addEventListener("click", function () { strtQuiz() });

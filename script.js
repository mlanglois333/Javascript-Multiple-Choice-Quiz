const timerDisp = document.getElementById("timer");
const strtBtn = document.getElementById("strtBtn");
const questionEl = document.getElementById("questions");
const answers = document.getElementById("answers");
const answerA = document.getElementById("a");
const answerB = document.getElementById("b");
const answerC = document.getElementById("c");
const answerD = document.getElementById("d");
const formEl = document.getElementById("formEl");
const scoreContent = document.getElementById("scoreContent");
const submitBtn = document.getElementById("submitBtn");
let highScore = [];
let indexNo = 0;


const questions = [
    {
        question: "How many milliseconds are in a second?",

        a: "10,000",
        b: "100",
        c: "1000",
        d: "1,000,000",

        correct: "c"
    },
    {
        question: "Which of the following terms is not used in JavaScript:",

        a: "else",
        b: "but",
        c: "if",
        d: "for",

        correct: "b"
    },
    {
        question: "Which of the following can be used to modify the appearance of a page",

        a: "JavaScript",
        b: "html",
        c: "css",
        d: "all of them",

        correct: "d"
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

        a: "20 hours",
        b: "30 hours",
        c: "40 hours",
        d: "What day is it?",

        correct: "d"
    }
];


let arrLength = questions.length - 1;
let secondsRemaining = 60;



var myTimer;
function clock() {
    myTimer = setInterval(myClock, 1000);


    function myClock() {
        timerDisp.innerHTML = secondsRemaining + " seconds remaining";
        --secondsRemaining;
        if (secondsRemaining <= 0) {
            clearInterval(myTimer);
            alert("Time is up! Better luck next time!");
            clear();
            startAppear();

        }
    }
}



function quiz() {
    let qu = questions[indexNo];

    questionEl.innerHTML = "<p>" + qu.question + "</p>";
    answerA.innerHTML = qu.a;
    answerB.innerHTML = qu.b;
    answerC.innerHTML = qu.c;
    answerD.innerHTML = qu.d;
}

function startAppear() {
    strtBtn.style.visibility = "visible";

}
function startOff() {
    strtBtn.style.visibility = "hidden";
}

function dispOff() {
    formEl.style.visibility = "hidden";
}

function hiOff() {
    scoreContent.innerHTML = "";
}

function dispOn() {
    formEl.style.visibility = "visible";
    scoreContent.style.visibility = "visible";

}

function contentOn() {

    questionEl.style.visibility = "visible";
    answerA.style.visibility = "visible";
    answerB.style.visibility = "visible";
    answerC.style.visibility = "visible";
    answerD.style.visibility = "visible";
    timerDisp.style.visibility = "visible";
}
function contentOff() {

    questionEl.style.visibility = "hidden";
    answerA.style.visibility = "hidden";
    answerB.style.visibility = "hidden";
    answerC.style.visibility = "hidden";
    answerD.style.visibility = "hidden";
    timerDisp.style.visibility = "hidden";
}



function renderScore() {

    var initials = document.getElementById("initials").value;
    var score = secondsRemaining;
    var scoreLength = highScore.length;



    var addScr = {
        in: initials,
        sc: score
    }


    highScore.push(addScr);
    if (scoreLength >= 1) {
        highScore.sort(function (a, b) { return b.sc - a.sc });
    }


    for (i = 0; i <= scoreLength; i++) {

        scoreContent.append(highScore[i].in + " score: " + highScore[i].sc);
        scoreContent.append(document.createElement("br"));

    }


    dispOff();
    clear();
    startAppear();
}



function clear() {
    indexNo = 0;
    secondsRemaining = 60;
    contentOff();
    return;

}


function strtQuiz() {
    contentOn();
    hiOff();
    startOff();
    quiz();
    clock();
}







function nextQ() {

    indexNo++;
    quiz();

}


function checkA() {
    if (questions[indexNo].correct === "a" && indexNo < arrLength) {

        nextQ();
    }
    else if (questions[indexNo].correct != "a") { secondsRemaining = secondsRemaining - 10; }
    else if (questions[indexNo].correct === "a" && indexNo === arrLength) {


        dispOn();
        clearInterval(myTimer);
        contentOff();
        return;

    }


}

function checkB() {
    if (questions[indexNo].correct === "b" && indexNo < arrLength) {
        nextQ();
    }
    else if (questions[indexNo].correct != "b") { secondsRemaining = secondsRemaining - 10; }
    else if (questions[indexNo].correct === "b" && indexNo === arrLength) {


        dispOn();
        clearInterval(myTimer);
        contentOff();
        return;

    }

}

function checkC() {
    if (questions[indexNo].correct === "c" && indexNo < arrLength) {
        nextQ();
    }

    else if (questions[indexNo].correct != "c") { secondsRemaining = secondsRemaining - 10; }
    else if (questions[indexNo].correct === "c" && indexNo === arrLength) {


        dispOn();
        clearInterval(myTimer);
        contentOff();
        return;

    }

}

function checkD() {
    if (questions[indexNo].correct === "d" && indexNo < arrLength) {
        nextQ();
    }
    else if (questions[indexNo].correct != "d") { secondsRemaining = secondsRemaining - 10; }
    else if (questions[indexNo].correct === "d" && indexNo === arrLength) {


        dispOn();
        clearInterval(myTimer);
        contentOff();
        return;

    }
}





startAppear();
dispOff();
hiOff();
contentOff();

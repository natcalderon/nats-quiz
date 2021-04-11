// When start button is clicked
var startPage = document.getElementById("start");
var startBtn = document.getElementById("start-btn")
var quizSection = document.getElementById("quiz-section");
var queText = document.getElementById("queText")
var btn1 = document.getElementById("btn-1")
var btn2 = document.getElementById("btn-2")
var btn3 = document.getElementById("btn-3")
var btn4 = document.getElementById("btn-4")
var btnClick = document.getElementsByClassName("click")
var feedback = document.getElementById("feedback");
var endResults = document.getElementById("end-results");
var time = 60;
var timeSet = document.getElementById("timer");
var activeQuestion = 0;
var score = 0;
var selectAnswer = "";
console.log(selectAnswer)

var questions = [
    {
        q: "What is Superman's real name?",
        o: [ "Clark Kent", "Michael Scott", "Kal El", "Keel peel"],
        

        a: 0
    },
    {
        q: "What species is Wonder Woman?",
        o: {
            a: "God",
            b: "Alien",
            c: "Plain ol' Lady",
            d: "Amazonian"
         },

         a: 3
    },
    {
        q: "Who killed Bruce Wayne's parents?",
        o: {
            a: "Joe Chill",
            b: "Joe Shmoe",
            C: "Joe Jack",
            d: "Steve Harvey",
         },

         a: 0
    },
    {
        q: "What is NOT one of Swamp Thing's powers?",
        o: {
            a: "Elemential",
            b: "Immortality",
            C: "Fire",
            d: "Astral Projection",
         },

         a: 2
    }

]

startBtn.onclick = clickStart;

function clickStart() {
    startPage.setAttribute ('class', 'hide') 
    quizSection.classList.remove('hide')
    startQuiz();
    startTimer();
}


var timerId;
function startTimer() {
    timerId = setInterval(timer, 1000);
    timeSet.textContent = time;
}

function timer() {
    time--;
    timeSet.textContent = time;
    if (time === 0) {
        //end quiz function
        // endScreen();
    }
}

btnClick.onclick = verifyAnswer;

var startQuiz = function() {
    console.log(activeQuestion)

    queText.textContent = questions[activeQuestion].q;


    btn1.textContent = questions[activeQuestion].o[0];
    btn2.textContent = questions[activeQuestion].o[1];
    btn3.textContent = questions[activeQuestion].o[2];
    btn4.textContent = questions[activeQuestion].o[3];

var answer = questions[activeQuestion].a
    
    if (a===1) {
        btn1.setAttribute('value','answer')
    }
    if (a===2) {
        btn2.setAttribute('answer')
    }

}

function verifyAnswer() {
    getAttribute("value")
    if(value) {
        rightAnswer
    } else {
        wrongAnswer
    }
}

function rightAnswer(){
    score = time
    activeQuestion+=1
    if(activeQuestion > questions.length) {
        endGame
    }
    startQuiz
}
var startPage = document.getElementById("start");
var startBtn = document.getElementById("start-btn")
var quizSection = document.getElementById("quiz-section");
var queText = document.getElementById("queText")
var btn1 = document.getElementById("btn-0")
var btn2 = document.getElementById("btn-1")
var btn3 = document.getElementById("btn-2")
var btn4 = document.getElementById("btn-3")
var btnClick = document.getElementsByClassName("click")
var feedback = document.getElementById("feedback");
var endResults = document.getElementById("end-results");
var time = 60;
var timeSet = document.getElementById("timer");
var activeQuestion = 0;
var score = 0;
var highScore = document.getElementById("high-score");
var submit = document.getElementById("submit")
var leaderboard = document.getElementById("leaderboard")


var questions = [
    {
        q: "What is Superman's real name?",
        o: [ "Clark Kent", "Michael Scott", "Kal El", "Keel peel"],
        

        a: 2
    },
    {
        q: "What species is Wonder Woman?",
        o: ["God", "Alien", "Plain ol' Lady", "Amazonian"],

         a: 3
    },
    {
        q: "Who killed Bruce Wayne's parents?",
        o: ["Joe Chill", "Joe Shmoe", "Joe Jack", "Steve Harvey"],

         a: 0
    },
    {
        q: "What is NOT one of Swamp Thing's powers?",
        o: ["Elemential", "Immortality", "Fire", "Astral Projection"],

         a: 2
    }

]

startBtn.onclick = clickStart;

function clickStart() {
    startPage.setAttribute ('class', 'hide') 
    quizSection.classList.remove('hide')
    makeQuestion();
    startTimer();
}


var timerId;

function startTimer () {
    timerId = setInterval(timer, 1000)
    timeSet.textContent = "Time Left: " + time
}

function optionClick (optionIndex, answerIndex) {
    if(optionIndex === answerIndex) {
        return true
    }
    return false
}



function changeQuestion() {
    activeQuestion += 1
    if(activeQuestion === questions.length) {
        endQuiz();
    } else {
    makeQuestion() }
}

function makeQuestion() {

    // Gets our question elementy by queTest
    var queText = document.getElementById("queText")
    // Applies the question text to the above elmement 👆
    queText.textContent = questions[activeQuestion].q;
    
    // Goes through questions array
    for (var optionIndex = 0; optionIndex < questions[activeQuestion].o.length; optionIndex++) {   

        // Get each button
        var btn = document.getElementById("btn-"+ optionIndex)

        // Set text for button
        btn.textContent = questions[activeQuestion].o[optionIndex]

        // If this current elment is the correct answer, apply correctAnswer function
        // If worng, apply wrong answer
        if(optionIndex === questions[activeQuestion].a) {
            
            btn.onclick = correctAnswer
        } else {
            btn.onclick = wrongAnswer
        }
    }
}

function correctAnswer() {
    
    feedback.textContent = "yay you are right"
    score += 1
    changeQuestion()
    
}



//  this function runs when answer is wrong
function wrongAnswer() {
    time -= 10
    feedback.textContent = ("Wrong");
    changeQuestion();
}


function timer () {
    time--;
    timeSet.textContent = "Time Left: " + time
    if ( time <= 0) {
        //call end quiz function
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerId);
    quizSection.setAttribute ('class', 'hide') 
    endResults.classList.remove('hide')
    highScore.textContent = ("You're Score is " + score)
    
}

submit.addEventListener('click', function(event) {
    event.preventDefault();

    var scoreInput = document.querySelector("#initials").value;
    console.log(scoreInput);

    localStorage.setItem('scoreInput', scoreInput);
    localStorage.setItem('score', score);

    renderLeaderboard()
})

function renderLeaderboard() {

    for (let i = 0; i < localStorage.length; i++) {
    var scoreInput = localStorage.getItem('scoreInput')
    var score = localStorage.getItem('score')
    leaderboard.textContent =  scoreInput + score
    }
}



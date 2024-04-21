var indexQuestion = 0; // Current index of question we are on
var indexAnswer = ""; // Current choice we are on 
var timer = 0;  // A clock that goes up by 1 every second
var timeLastSubmit = 0;  // the time we last submitted an answer
var timeExpired = false;  // Did time expire for current question?
var timerFunction; // Store the timer here

// number of seconds to wait for each question
var WAIT_TIME = 30;

// all questions to be used on the website
var QUESTIONS = [
    {
        "question": "Which city is the capital of Ontario?",
        "answer": "Toronto"
    },
    {
        "question": "Which city is the capital of Canada?",
        "answer":"Ottawa"
    },
    {
        "question": "Which continent does the south pole reside?",
        "answer": "Antartica"

    },
];

function loadApplication() {
    document.getElementById("btnNext").addEventListener("click", clickNext)
    loadQuestion(indexQuestion);   // load the first question into the web page
    // update the timer every second and check if question has been answered yet
    // timerFunction = setInterval(function(){
    //     timer++;
    //     checkExpirationTime();
    // },1000);
}


function startTimer() {
    // update the timer every second and check if question has been answered yet
    clearInterval(timerFunction);
    timer = 0;
    timerFunction = setInterval(function () {
        timer++;
        checkExpirationTime();
    }, 1000);
}

function clickNext() {
    // make sure that the user has answered the question before the time has expired
    // timerFunction = timer;
    checkExpirationTime();
    // // Get the answer from drop down
    // var selectedIndexAnswer = document.getElementById('choices').selectedOptions[0].value;

    // // Get the anwer from the array
    // var answer = QUESTIONS[indexQuestion].choices[i];
    checkAnswer();
};


function checkAnswer() {
    // Compare answer.  Only if correct, do you move onto next question -   if(answer == QUESTIONS[indexQuestion].answer)
    if (indexAnswer == QUESTIONS[indexQuestion].choices[QUESTIONS[indexQuestion].answer]) {
        nextQuestion();
    }
    else {
        alert('Please try again.');
    }
}


function checkExpirationTime() {
    // check the time, once the clock has reached 30 seconds do not move to the next quesiton
    if (timer < WAIT_TIME) {
        document.getElementById("seconds").innerHTML = 30 - timer;
    }
    else {
        timeExpired = true;
        alert('Please try again.');
        clearInterval(timerFunction);
    }
}

function nextQuestion() {
    // advance to the next question, until the there are no more questions
    if (indexQuestion < QUESTIONS.length - 1) {
        indexQuestion++;
        loadQuestion(indexQuestion);
    }
}

function selectAnswer(event) {
    //Select the answer to current question 
    indexAnswer = event.target.value;
}


function loadQuestion(indexQuestion) {
    startTimer();
    indexAnswer = QUESTIONS[indexQuestion].choices[0];
    // grab the question
    document.getElementById("question").textContent = QUESTIONS[indexQuestion].question;
    // build the html string for select menu
    var choices = "";
    var i = 0;
    //loop through the choices
    while (i < QUESTIONS[indexQuestion].choices.length) {
        // create a string of <option>answer</option><option>answer</option><option>answer</option>...  and load it into the choices variable
        choices += "<option>" + QUESTIONS[indexQuestion].choices[i] + "</option>";
        i++;
    }
    document.getElementById("choices").innerHTML = choices;
    document.getElementById("choices").addEventListener("change", selectAnswer)
}

// When the DOM is ready, run the function loadApplication();
document.addEventListener("DOMContentLoaded", loadApplication);
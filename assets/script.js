// Define all variables

// Header variables
var viewHighscoresBtn = document.getElementById('view-highscores');
var timerEl = document.getElementById('timer');

// Start quiz section variables
var startQuizEl = document.getElementById('start-quiz'); // id for entire section
var startBtn = document.getElementById('start-btn');

// Questions section variables
var questionsEl = document.getElementById('questions'); // id for entire section
var question = document.getElementById('question'); 
var choice1Btn = document.getElementById('choice1'); // button
var choice2Btn = document.getElementById('choice2'); // button
var choice3Btn = document.getElementById('choice3'); // button
var choice4Btn = document.getElementById('choice4'); // button
var correctWrong = document.getElementById('correct-wrong'); 

// Finish quiz section variables
var finishQuizEl = document.getElementById('finish-quiz'); // id for entire section
var finalScore = document.getElementById('final-score');
var name = document.getElementById('input-name');
var submitScoreBtn = document.getElementById('submit-score'); // button

// Highscore section variables
var highscoresEl = document.getElementById('highscores'); // id for entire section
var highscoreList = document.getElementById('highscore-list');
var goBackBtn = document.getElementById('go-back'); // button
var clearHighscoresBtn = document.getElementById('clear-highscores'); //button

// Questions, answers, and correct answers
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["A. <scripting>", "B. <script>", "C. <js>", "D. <javascript>"],
        correctAnswer: "B"
    },

    {
        question: "How do you create a function in JavaScript?",
        answers: ["A. function myFunction()", "B. function:myFunction()", "C. function = myFunction()", "D. function myFunction{}"],
        correctAnswer: "A"
    },

    {
        question: "How do you write an IF statement in JavaScript?",
        answers: ["A. if i = 5", "B. if i == 5 then", "C. if (i==5)", "D. if i = 5 then"],
        correctAnswer: "C"
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: ["A. onchange", "B. onmouseclick", "C. onmouseover", "D. onclick"],
        correctAnswer: "D"
    },

    {
        question: "How do you declare a JavaScript variable?",
        answers: ["A. v carName;", "B. variable carName;", "C. var carName;", "D. carName;"],
        correctAnswer: "C"
    },

    {
        question: "Which operator is used to assign a value to a variable?",
        answers: ["A. =", "B. x", "C. -", "D. *"],
        correctAnswer: "A"
    }
];

questionsEl.style.display = "none";
finishQuizEl.style.display = "none";
highscoresEl.style.display = "none";

// timer function 
function countdown() {
    var timeLeft = 70;
  
    var timeInterval = setInterval(function () {
      
      if (timeLeft > 0) {
        timerEl.textContent = timeLeft + "s";
        timeLeft--;
      } else if (timeLeft <= 0 ) {
        timerEl.textContent = "Time's Up!";
        clearInterval(timeInterval);
      } 
    }, 1000);
  }

  // start quiz function
  function startQuiz() {
      startQuizEl.style.display = "none";
      correctWrong.style.display = "none";
      questionsEl.style.display = "block";
      
      countdown();
  }

  startBtn.addEventListener("click", startQuiz);
  
  




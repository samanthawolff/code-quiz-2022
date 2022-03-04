// Define all variables

// Header variables
var viewHighscoresBtn = $('#view-highscores');
var timer = $('#timer'); // setInterval countdown
var timeLeft = 100;

// Start quiz section variables
var startQuizEl = $('#start-quiz'); // id for entire section
var startBtn = $('#start-btn');

// Questions section variables
var questionsEl = $('#questions'); // id for entire section
var question = $('#question'); 
var choice1Btn = $('#choice1'); // button
var choice2Btn = $('#choice2'); // button
var choice3Btn = $('#choice3'); // button
var choice4Btn = $('#choice4'); // button
var correctWrong = $('#correct-wrong'); 

// Finish quiz section variables
var finishQuizEl = $('#finish-quiz'); // id for entire section
var finalScore = $('#final-score');
var name = $('#input-name');
var submitScoreBtn = $('#submit-score'); // button

// Highscore section variables
var highscoresEl = $('#highscores'); // id for entire section
var highscoreList = $('#highscore-list');
var goBackBtn = $('#go-back'); // button
var clearHighscoresBtn = $('#clear-highscores'); //button

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


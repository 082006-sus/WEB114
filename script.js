// Socccer quiz 

// variables question number and score
let score = 0;
let currentQuestion = 0;

// Question array
const questions = [
    {
        question: "Who won the most Balon D'or awards?",
        answers: ["Benzema", "CR7(Ronaldo)", "Messi"],
        correct: "Messi"
    },

    {
        question: "Who is DA GOAT?",
        answers: ["Neymar", "CR7", "Messi"],
        correct: "Messi"
    },

    {
        question: "Best team ever?",
        answers: ["Barcelona", "AC Milan", "Real Madrid(wrong)"],
        correct: "Barcelona"
    }
];

// Elements from html
let questionText = document.getElementById("question");

let answerOne = document.getElementById("answerOne");
let answerTwo = document.getElementById("answerTwo");
let answerThree = document.getElementById("answerThree");

let resultText = document.getElementById("result");

let scoreText = document.getElementById("score");

let startButton = document.getElementById("startButton");

// Fnction to load questions
function loadQuestion() {

    let q = questions[currentQuestion];

    questionText.textContent = q.question;

    answerOne.textContent = q.answers[0];
    answerTwo.textContent = q.answers[1];
    answerThree.textContent = q.answers[2];
}

// Function to check answers
function checkAnswer(answer) {

    // if answer is correct
    if (answer === questions[currentQuestion].correct) {
        resultText.textContent = "Correct!";
        score++;
    }

    else {
        resultText.textContent = "Wrong!";
    }

    // update score
    scoreText.textContent = "Score: " + score;

    // move to next question
    currentQuestion++;

    // if quiz is finished
    if (currentQuestion >= questions.length) {

        questionText.textContent = "Quiz Finished";

        answerOne.style.display = "none";
        answerTwo.style.display = "none";
        answerThree.style.display = "none";

        resultText.textContent = "Final Score: " + score;
    }

    else {
        loadQuestion();
    }
}

startButton.addEventListener("click", function() {

    startButton.style.display = "none";

    // show answer buttons
    document.getElementById("answerArea").style.display = "block";

    loadQuestion();
});

// answer button events
answerOne.addEventListener("click", function() {
    checkAnswer(answerOne.textContent);
});

answerTwo.addEventListener("click", function() {
    checkAnswer(answerTwo.textContent);
});

answerThree.addEventListener("click", function() {
    checkAnswer(answerThree.textContent);
});
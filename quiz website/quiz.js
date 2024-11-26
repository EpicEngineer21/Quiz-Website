const landingPage = document.querySelector(".landing-page");
const instructionsPage = document.querySelector(".instructions-page");
const gameCategory = document.querySelector(".game-category");
const quizSection = document.querySelector(".quiz");
const scorePage = document.querySelector(".score-page");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const submitButton = document.querySelector(".submit");

let currentQuestionIndex = 0;
let questions = [];
let userAnswers = [];

// Show Instructions Page
function showInstructions() {
    landingPage.style.display = "none";
    instructionsPage.style.display = "";
}

// Start Quiz
function startQuiz() {
    instructionsPage.style.display = "none";
    gameCategory.style.display = "";
}

// Show Category Selection
function showGameCategory() {
    landingPage.style.display = "none";
    gameCategory.style.display = "";
    quizSection.style.display = "none";
}

// Show Quiz Page
function showQuiz(category) {
    gameCategory.style.display = "none";
    quizSection.style.display = "";
    getQuestions(category);
}

// Fetch Questions
async function getQuestions(category) {
    const API_URL = `https://opentdb.com/api.php?amount=5&type=multiple&category=${encodeURIComponent(category)}`;
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        questions = data.results;
        displayQuestion();
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
}

// Display Question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.incorrect_answers.forEach((option) => {
        addOption(option, false);
    });
    addOption(currentQuestion.correct_answer, true);

    // Disable previous button for the first question
    previousButton.disabled = currentQuestionIndex === 0;

    // Hide submit button until the last question
    submitButton.style.display = currentQuestionIndex === questions.length - 1 ? "" : "none";
}

// Add Option to Question
function addOption(text, isCorrect) {
    const optionElement = document.createElement("button");
    optionElement.textContent = text;
    optionElement.classList.add("option");
    optionElement.dataset.correct = isCorrect;
    optionElement.addEventListener("click", selectOption);
    optionsContainer.appendChild(optionElement);
}

// Select Option
function selectOption(event) {
    const selectedOption = event.target;
    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach(option => option.classList.remove("selected"));
    selectedOption.classList.add("selected");

    const isCorrect = selectedOption.dataset.correct === "true";
    userAnswers[currentQuestionIndex] = { answer: selectedOption.textContent, isCorrect };
}

// Navigate Question
function navigateQuestion(direction) {
    if (direction === "next") {
        currentQuestionIndex++;
    } else if (direction === "previous") {
        currentQuestionIndex--;
    }
    displayQuestion();
}

// Submit Quiz
function submitQuiz() {
    let score = 0;
    userAnswers.forEach(answer => {
        if (answer.isCorrect) score++;
    });

    document.getElementById("score").textContent = `${score} / ${questions.length}`;
    document.getElementById("feedback").textContent = score === questions.length ? "Excellent!" : "Good effort!";
    quizSection.style.display = "none";
    scorePage.style.display = "";
}

// Restart Game
function showLandingPage() {
    scorePage.style.display = "none";
    landingPage.style.display = "";
}

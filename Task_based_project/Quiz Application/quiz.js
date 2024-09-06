const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "Which language is primarily used for web development?",
        choices: ["Python", "JavaScript", "Java", "C++"],
        correct: "JavaScript"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Mars"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

function loadQuiz() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    choicesElement.innerHTML = '';
    
    currentQuestion.choices.forEach(choice => {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = choice;
        label.appendChild(input);
        label.appendChild(document.createTextNode(choice));
        li.appendChild(label);
        choicesElement.appendChild(li);
    });
}

function getSelectedChoice() {
    const answerElements = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answerElements.forEach(answer => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

function showResult() {
    resultElement.innerText = `You scored ${score} out of ${quizData.length}!`;
}

submitButton.addEventListener('click', () => {
    const selectedChoice = getSelectedChoice();
    if (selectedChoice) {
        if (selectedChoice === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuiz();
        } else {
            showResult();
            submitButton.disabled = true;
        }
    } else {
        alert("Please select an answer before submitting.");
    }
});

loadQuiz();

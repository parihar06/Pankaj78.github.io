const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "Who discovered gravity?",
    options: ["Newton", "Einstein", "Tesla", "Galileo"],
    answer: "Newton"
  },
  {
    question: "H2O is?",
    options: ["Oxygen", "Hydrogen", "Water", "Salt"],
    answer: "Water"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  let q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach(option => {
    let btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === quizData[currentQuestion].answer) {
    score++;
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML =
      `<h2>Your Score: ${score}/${quizData.length}</h2>`;
  }
}

loadQuestion();

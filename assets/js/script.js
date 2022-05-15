// selectors & variables 
var renderQs = document.getElementById("quiz-question") // selects just the h4 to render Q
var renderChoices = document.querySelectorAll(".quiz-choices") // selects all elements to append the choice selections 
var startBtn = document.getElementById("start-btn")
var timerEl = document.getElementById("timer")

var time = 60;

// define questions
var quizQs = [
  {
    question: "What happened to Anakin Skywalker during the battle with Count Dooku?",
    choices: [
      "He lost his left leg",
      "He lost his right arm",
      "He lost his right leg",
      "He lost the battle"
    ],
    answer: "He lost his right arm"
  },
  {
    question: "Who played the part of Commander Cody?",
    choices: [
      "Jay Laga'aia",
      "Temuera Morrison",
      "Ahmed Best",
      "Joel Edgerton"
    ],
    answer: "Temuera Morrison"
  },
  {
    question: "According to the Emperor, what was Luke Skywalker's weakness?",
    choices: [
      "His faith in the Light Side of the Force",
      "His faith in his friends",
      "His lack of vision",
      "His resistance to the Dark Side of the Force"
    ],
    answer: "His faith in his friends"
  },
  {
    question: "Where did the Clone Wars begin?",
    choices: [
      "Tatooine",
      "Geonosis",
      "Naboo",
      "Coruscant"
    ],
    answer: "Geonosis"
  },
  {
    question: "Who created the Star Wars franchise?",
    choices: [
      "JRR Tolkien",
      "George Martin",
      "George Lucas",
      "James Cameron"
    ],
    answer: "George Lucas"
  }
];


// activate timer
function countdown() {
  time--;
  timerEl.textContent = time;
  if (time <= 0){
    endQuiz(); 
  }
}

// loop through questions
function showQuestion(q){ 
  // question is rendered in the h4 by referencing js object
  var i = 0;
  var qLength = quizQs.length;
  var choices = quizQs[i].choices;
  console.log(choices)
  
  


  for (var i = 0; i < qLength; i++){
    renderQs.textContent = q[i].question;
    console.log(renderQs.textContent)
    renderChoices[i].textContent = q[i].choices;
    //renderChoices[i].textContent = quizQs[i].choices;
    //console.log(renderChoices[1].textContent);
  };
  for (var i = 0; i < choices; i++){
    renderChoices[i].textContent = choices;
  }
  
}

// functions are called -- start quiz
showQuestion(quizQs);
//console.log(showQuestion);
//startBtn.addEventListener("click", startQuiz)
//countdown();
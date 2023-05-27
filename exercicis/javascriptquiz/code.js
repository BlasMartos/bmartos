// Array amb les preguntes i les tres respostes que utilitzem
var questions = [
  [
    "1: Qué mostrará?", "NaN", "15", "105"
  ],
  [
    "2: Aquest codi funciona?", "Sí i mostra 10", "Sí i mostra 25", "No"
  ],
  [
    "3: Aquest codi funciona?", "No", "Sí i mostra: 7", "Sí i mostra 52"
  ],
  [
    "4: Qué valor mostrará alert?", "1", "5", "0"
  ],
  [
    "5: Aquest codi funciona?", "No", "sí i mostra 0", "sí i mostra 12"
  ],
  [
    "6: Quin valor mostra?", "true", "2 €", "10 €"
  ],
  [
    "7: Quin valor mostra alert?", "8", "6", "5"
  ],
  [
    "8: Què mostrarà per pantalla?", "Volvo Saab Ford", "Saab Ford", "Ford"
  ],
  [
    "9: Què mostrarà a la pantalla?", "Juanito", "Maria", "Juanito Maria"
  ],
  [
    "10: Què mostrarà l’alert?", "L1", "L2", "demo2"
  ]
];
var correctAnswers = ["105", "Sí i mostra 10", "Sí i mostra 52", "0", "No", "2 €", "8", "Saab Ford", "Maria", "L2"];
// Array amb les rutes de les imatges que utilitzem en el Quiz
var newSRC = ["imatges/1.png", "imatges/2.png", "imatges/3.png", "imatges/4.png", "imatges/5.png", "imatges/6.png", "imatges/7.png", "imatges/8.png", "imatges/9.png", "imatges/10.png"];



var indexAnswers = [];

var userAnswers = ["", "", "", "","", "","", "","", ""];

let answerElements = document.getElementsByName("respostes");

function showResult() {
  var userCorrectAnswers = 0;
  for (var i = 0; i < correctAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      userCorrectAnswers++;
    }
  }
  document.getElementById("result").textContent = userCorrectAnswers + "/10";

}

function selectAnswer(index) {

  indexAnswers[question] = index;
  userAnswers[question] = answerElements[index].value;

  console.log(userAnswers[question]);

  next();
}


function unCheck() {

  for (let index = 0; index < answerElements.length; index++) {
    answerElements[index].checked = false;
  }
  if (indexAnswers[question])
    answerElements[indexAnswers[question]].checked = true;

}




let image = 0;
let question = 0;;

let div = document.getElementsByClassName("button_div")[0];
let quizDiv = document.getElementById("quiz_div");
let finishDiv = document.getElementById("final_div");
let title = document.querySelector(".title_div h1");
let divTimer = document.getElementById("timer");


function quiz() {

  var imagen = document.getElementById("image");
  imagen.src = newSRC[image];
  document.getElementById("question").textContent = questions[question][0];
  document.getElementById("resposta1").textContent = questions[question][1];
  document.getElementById("resposta_1").value = questions[question][1];
  document.getElementById("resposta2").textContent = questions[question][2];
  document.getElementById("resposta_2").value = questions[question][2];
  document.getElementById("resposta3").textContent = questions[question][3];
  document.getElementById("resposta_3").value = questions[question][3];
  unCheck();
}


function back() {

  if (image === 0) {

    return;
  } else {
    image--;
    question--;
    quiz();
  }

  return;
}

function next() {

  if (image === 9) {

    return;
  } else {
    image++;
    question++;
    quiz();
  }
  return;
}



function finish() {
  setTimeout(function () {
    quizDiv.style.display = "none";
    document.getElementById("big_div").style.height = "200px";
    document.getElementById("big_div").style.width = "180px";
    setTimeout(function () {
      divTimer.style.display = "none";
      finishDiv.style.display = "flex";
      
    }, 500);

  }, 500);
  showResult();

}


// Metode per començar el Quiz
function startQuiz() {
  setTimeout(function () {

    div.style.display = "none";

    title.classList.add("move-up");

    setTimeout(function () {
      document.getElementById("big_div").style.height = "650px";
      document.getElementById("big_div").style.width = "75%";
      setTimeout(function () {
        quizDiv.style.display = "flex";
      }, 500);

    }, 500);

    startTimer();
  }, 500);

}

let time = 600;
let timerInterval;
let timerElement = document.getElementById('timer');

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (time > 0) {
    time--;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timerElement.innerHTML = `${padNumber(minutes)}:${padNumber(seconds)}`;
  } else {
    clearInterval(timerInterval);
    alert('¡Tiempo finalizado!');
    finish();
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  time = 600;
  timerElement.innerHTML = '10:00';
}

function padNumber(number) {
  return number.toString().padStart(2, '0');
}
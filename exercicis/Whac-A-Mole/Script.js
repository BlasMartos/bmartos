var images = ["img_1", "img_2", "img_3", "img_4", "img_5", "img_6", "img_7", "img_8", "img_9"
];
var score = 0;
let randomNumber = null;
let time = 60;
let stopGame = false;
let auxiliar;
function muestraTopo() {
    if (stopGame){
        return;
    }
    // Fem un numero aleatori de l'u al nou 
    randomNumber = Math.floor(Math.random() * 9);
    while(auxiliar===randomNumber){
        randomNumber = Math.floor(Math.random() * 9);
    }
   
    var newImage = document.getElementById(images[randomNumber]);
    newImage.src = "Imatges/topoSi.jpg";

    setTimeout(function () {
        newImage.src = "Imatges/topoNo.jpg";
    }, 500);
    auxiliar = randomNumber;
}
function startGame(){
    setInterval(muestraTopo, 1000);
    Timer();
   
}

function Timer(){
     time--;
     if (time === 0){
        stopGame = true;
     }else{
        setTimeout(Timer, 1000);

     } 
      document.getElementById("timer").textContent = "Time: " + time;
}


function clicked(image) {
    if (stopGame){
        return;
    }
    if(image.id === images[randomNumber].toString()){
        var audio = new Audio('boing.mp3');
        audio.play(); 
        randomNumber= -5;
        changeScore(10);
        
     }else {
        changeScore(-5);
     }
     image.src = "Imatges/topoPam.jpg";
    setTimeout(function () {
        image.src = "Imatges/topoNo.jpg";
    }, 500);
    
    
}

function changeScore(newScore){
    if (score - -newScore <= 5){
        score = 0;
        document.getElementById("score").textContent = "Score: " + score;
        return;
    }
    if (newScore >= 0){
        score += newScore;
    }
    else{
        score-= -newScore;
    }
    document.getElementById("score").textContent = "Score: " + score;
}


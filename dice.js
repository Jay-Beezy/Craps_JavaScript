/*
@author Jay-Beezy
@file dice.js
@date 3/16/2020
@brief

  Everytime the roll button is clicked, two die variables become randomized.
  Render is constantly called, and outputs the results of the two die.
  Therefore, a picture of the two dice are generated with every roll.

*/

let diceCanvas = document.getElementById("dice");
let diceContext = diceCanvas.getContext('2d');
var rollButton = document.getElementById('roll-button');

diceContext.font = "50pt Calibri";
diceContext.fillStyle = "red";

function getRandomInt(max) {
  return Math.floor(Math.random() * 6) + 1;
}

let dice1 = 0;
let dice2 = 0;
let totalDice = 0;

rollButton.addEventListener("click", (e) => {
    dice1 = getRandomInt(7);
    dice2 = getRandomInt(7);
    totalDice = dice1 + dice2;
    GameConsole.write("You rolled a " + totalDice + " !");
});

function renderDice(){
  //First Die
  if(dice1 == 1){
    rollD1One();
  }
  else if(dice1 == 2){
    rollD1Two();
  }
  else if(dice1 == 3){
    rollD1Three();
  }
  else if(dice1 == 4){
    rollD1Four();
  }
  else if(dice1 == 5){
    rollD1Five();
  }
  else if(dice1 == 6){
    rollD1Six();
  }

  //Second Die
  if(dice2 == 1){
    rollD2One();
  }
  else if(dice2 == 2){
    rollD2Two();
  }
  else if(dice2 == 3){
    rollD2Three();
  }
  else if(dice2 == 4){
    rollD2Four();
  }
  else if(dice2 == 5){
    rollD2Five();
  }
  else if(dice2 == 6){
    rollD2Six();
  }
}

function rollD1One(){
  diceContext.beginPath();
  diceContext.fillStyle = 'red';
  diceContext.fillRect(0,0,150,150);

  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(75, 75, 15, 0, 2 * Math.PI);
  diceContext.fill();
}

function rollD1Two(){
  diceContext.beginPath();
  diceContext.fillStyle = 'red';
  diceContext.fillRect(0,0,150,150);

  //Top Dot
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(40, 40-2, 15, 0, 2 * Math.PI); //adjusting height by 2
  diceContext.fill();

  //Bottom Dot
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(110, 110+2, 15, 0, 2 * Math.PI); //adjusting height by 2
  diceContext.fill();
}

function rollD1Three(){
  diceContext.beginPath();
  diceContext.fillStyle = 'red';
  diceContext.fillRect(0,0,150,150);

  //Top Dot
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(40, 40-2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Middle Dot
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(75, 75, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Bottom Dot
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(110, 110+2, 15, 0, 2 * Math.PI);
  diceContext.fill();
}

function rollD1Four(){
  diceContext.beginPath();
  diceContext.fillStyle = 'red';
  diceContext.fillRect(0,0,150,150);

  //Top Dot Right
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(40, 40-2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Top Dot Left
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(110, 40-2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Bottom Dot Right
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(40, 110+2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Bottom Dot Left
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(110, 110+2, 15, 0, 2 * Math.PI);
  diceContext.fill();
}

function rollD1Five(){
  diceContext.beginPath();
  diceContext.fillStyle = 'red';
  diceContext.fillRect(0,0,150,150);

  //Top Dot Right
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(40, 40-2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Top Dot Left
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(110, 40-2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Middle Dot
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(75, 75, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Bottom Dot Right
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(40, 110+2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Bottom Dot Left
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(110, 110+2, 15, 0, 2 * Math.PI);
  diceContext.fill();
}

function rollD1Six(){
  diceContext.beginPath();
  diceContext.fillStyle = 'red';
  diceContext.fillRect(0,0,150,150);

  //Top Dot Right
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(40, 40-2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Top Dot Left
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(110, 40-2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Middle Dot Left
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(40, 75, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Bottom Dot Right
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(40, 110+2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Middle Dot Right
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(110, 75, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Bottom Dot Left
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.style = '3px';
  diceContext.arc(110, 110+2, 15, 0, 2 * Math.PI);
  diceContext.fill();

}

function rollD2One(){
  diceContext.beginPath();
  diceContext.fillStyle = 'red';
  diceContext.fillRect(160,0,150,150);

  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(235, 75, 15, 0, 2 * Math.PI);
  diceContext.fill();
}

function rollD2Two(){
  diceContext.beginPath();
  diceContext.fillStyle = 'red';
  diceContext.fillRect(160,0,150,150);

  //Top Dot
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(200, 40-2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Bottom Dot
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(270, 110+2, 15, 0, 2 * Math.PI);
  diceContext.fill();
}

function rollD2Three(){
  diceContext.beginPath();
  diceContext.fillStyle = 'red';
  diceContext.fillRect(160,0,150,150);

  //Top Dot
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(200, 40-2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Middle Dot
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(235, 75, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Bottom Dot
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(270, 110+2, 15, 0, 2 * Math.PI);
  diceContext.fill();
}

function rollD2Four(){
  diceContext.beginPath();
  diceContext.fillStyle = 'red';
  diceContext.fillRect(160,0,150,150);

  //Top Dot Right
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(200, 40-2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Top Dot Left
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(270, 40-2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Bottom Dot Right
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(200, 110+2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Bottom Dot Left
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(270, 110+2, 15, 0, 2 * Math.PI);
  diceContext.fill();
}

function rollD2Five(){
  diceContext.beginPath();
  diceContext.fillStyle = 'red';
  diceContext.fillRect(160,0,150,150);

  //Top Dot Right
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(200, 40-2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Top Dot Left
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(270, 40-2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Middle Dot
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(235, 75, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Bottom Dot Right
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(200, 110+2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Bottom Dot Left
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(270, 110+2, 15, 0, 2 * Math.PI);
  diceContext.fill();
}

function rollD2Six(){
  diceContext.beginPath();
  diceContext.fillStyle = 'red';
  diceContext.fillRect(160,0,150,150);

  //Top Dot Right
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(200, 40-2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Top Dot Left
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(270, 40-2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Middle Dot Left
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(200, 75, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Middle Dot Right
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(270, 75, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Bottom Dot Right
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(200, 110+2, 15, 0, 2 * Math.PI);
  diceContext.fill();

  //Bottom Dot Left
  diceContext.beginPath();
  diceContext.fillStyle = 'white';
  diceContext.arc(270, 110+2, 15, 0, 2 * Math.PI);
  diceContext.fill();
}

function diceSplat(t) {
  diceContext.fillStyle = 'black';
  diceContext.fillRect(diceCanvas.width/2-5,0,10,150);
  renderDice();
  window.requestAnimationFrame(diceSplat);
}
window.requestAnimationFrame(diceSplat);

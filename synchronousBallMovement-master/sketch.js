var database;
var form;
var game;
var player;
var gameState = 0;
var playerCount;

function setup(){
  createCanvas(400, 400);
database = firebase.database();
game = new Game();
game.getState();
game.start();

}
function draw(){

}


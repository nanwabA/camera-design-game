var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var c1Img,c2Img
   var c3Img, c4Img;
   var track
var cars, car1, car2, car3, car4;
var ground;


function preload(){
c1Img=loadImage("images/racingcar1.png")
c2Img=loadImage("images/racingcar2.png")
c3Img=loadImage("images/racingcar3.png")
c4Img=loadImage("images/racingcar4.png")
track=loadImage("images/track.png")
ground=loadImage("images/ground.png")



}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();




  



}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

  }
  if(gameState=== 2 ){

game.end()

  }
}

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;
var distance = 0;

var form, player, game;
var startbg,bg;
var car1,car2,car3,car4,cars;

function preload()
{
    startbg = loadImage('images/startbg.png');
    bg = loadImage('images/background.jpg');
}

function setup()
{
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();

  backgroundImage = createSprite(displayWidth/2,displayHeight/2);
  backgroundImage.addImage(startbg);

  game = new Game();
  game.getState();
  game.start();

}


function draw()
{
  background("white");
  if(playerCount ===  4)
  {
    game.update(1);
  }

  if(gameState === 1)
  {
    game.play();
    backgroundImage.addImage(bg);
  }
  drawSprites();
}

class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start()
  {
    if(gameState === 0)
    {
      player = new Player();
      var PlayerCountRef = await database.ref('playerCount').once("value");
      if(PlayerCountRef.exists())
      {
        playerCount = PlayerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
      car1 = createSprite(200,300);
      car2 = createSprite(400,300);
      car3 = createSprite(600,300);
      car4 = createSprite(800,300);

      cars = [car1,car2,car3,car4];
      car1.visible = false;
      car2.visible = false;
      car3.visible = false;
      car4.visible = false;
  }

  play()
  {
    form.hide();
    textSize(30);
    Player.getPlayerInfo();

    if(allPlayers!==undefined)
    {
      var index = 0;
      var x = 0;
      var y;

      for(var plr in allPlayers)
      {
        index += 1;
        x += 200;
        y = displayHeight-allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

         if(index === player.index)
         {
           cars[index - 1].shapeColor = "red";
           camera.position.x = displayWidth/2;
           camera.position.y = cars[index-1].y;
         }
           
      }
      
    }

    car1.visible = true;
    car2.visible = true;
    car3.visible = true;
    car4.visible = true;

    if(keyDown("Up") && player.index !== null)
    {
      player.distance += 50;
      player.update();
    }
    if(keyDown("Down") && player.index !== null)
    {
      player.distance -= 50;
      player.update();
    }
    drawSprites();
  }
}

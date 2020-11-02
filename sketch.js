var PLAY=1;
var END=0;
var gameState=PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime;
var score;
var ground1;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500);
  
  ground1=createSprite(400,485,900,28)
  ground1.velocityX=-4;
  console.log(ground1.x);
  
  monkey=createSprite(80,455,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
   FoodGroup = createGroup();
   obstacleGroup=createGroup();
  
  
  score=0;
  
  survivaltime=0;
  
}


function draw() {
background("black")
  
  
  if(gameState===PLAY){
  stroke("white");
  textSize(20);
  fill("white");
  text("score :"+score,400,50);
  
 ground1.x=ground1.width/2
  
  if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -12;
  }
  monkey.velocityY=monkey.velocityY+0.9;
  
  monkey.collide(ground1);
  
  bananas();
  stone();
  
  if(FoodGroup.isTouching(monkey)){
     FoodGroup.destroyEach();
    score=score+2;
  }
    
   stroke("red");
  textSize(20);
  fill("red");
  text("survivaltime : "+ survivaltime, 100,50);
    survivaltime = survivaltime + Math.round(frameCount/80);
  }
  
  if(obstacleGroup.isTouching(monkey)){
     gameState=END;
  }
  
  
  if(gameState===END){
 monkey.visible=false;
 ground1.visible=false;
 FoodGroup.destroyEach();
 obstacleGroup.destroyEach();
 FoodGroup.setVelocityXEach(0);
 obstacleGroup.setVelocityXEach(0);
 FoodGroup.setLifetimeEach(0);
 obstacleGroup.setLifetimeEach(0);
    
    stroke("yellow")
    fill("yellow")
    textSize(30);
    text("Game Over",200,200)
    
    
    
    
  }
  
  drawSprites();
  
  
}

function bananas(){
  
  if(frameCount % 200=== 0) {
  var banana1=createSprite(450,500,20,20);
    banana1.y = Math.round(random(200,120));
    banana1.addImage(bananaImage);
    banana1.scale = 0.1;
    banana1.velocityX = -3;
    
    banana1.lifetime = 200;
    
    FoodGroup.add(banana1);
  } 
    
}  
  
  
function stone(){
  
  if(frameCount % 300 === 0) {
  var obstacles=createSprite(450,500,20,20);
    obstacles.y = Math.round(random(455,460));
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.1;
    obstacles.velocityX = -4;
    
    obstacles.lifetime = 200;
    
    obstacleGroup.add(obstacles);
  
  
  }
  
  
  
}
  
  
  
  
  
  
  






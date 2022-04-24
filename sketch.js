var bgimage;
var spaceshipimage;
var spaceship;
var meteorimage;
var meteor;
var meteorGroup;

function preload(){
bgimage=loadImage("background.jpg");
spaceshipimage=loadImage("spaceship.png");
meteorimage=loadImage("obstacle1.png")

}



function setup() {
  createCanvas(900, 600);
  spaceship=createSprite(200,500,30,50);
  spaceship.addImage(spaceshipimage);
  spaceship.scale=0.3;

  meteor=createSprite(500,100);
  meteor.addImage(meteorimage);
  meteor.scale=0.3;
  meteor.velocityY=6

  meteorGroup=createGroup()

  
}

function draw() {
  background(bgimage);

  if(keyIsDown(LEFT_ARROW)){
    spaceship.x=spaceship.x-4
  }

  if(keyIsDown(RIGHT_ARROW)){
    spaceship.x+=4
  }



    
    
  
  drawSprites();
  
}

function spawnMeteors(){
  
}

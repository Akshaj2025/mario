var mario, mario_running, mario_on_ground, edges;
var groundImage; 

function preload(){

 mario_running = loadImage("mario1.png");
 groundImage = loadImage("ground1.png");
 mario_on_ground = loadImage("mario2.png")

}  

function setup(){
  createCanvas(1500,1200);
  

  mario = createSprite(50,160,20,50);
  mario.addImage(mario_on_ground)
  edges = createEdgeSprites();
  
  ground= createSprite (1900,1000,400,20)
  ground.addImage(groundImage)
  ground.x = ground.width/2


  mario.scale = 0.3;
  mario.x = 150
}


function draw(){

  background("blue");
  
 
  console.log(mario.y)
  ground.velocityX = -2
  if(ground.x < 0){
  ground.x = ground.width/2
  }
 
  if(keyDown("space")){
    mario.addImage(mario_running)
    mario.velocityY = -10;
  }
  
  mario.velocityY = mario.velocityY + 0.5;


  mario.collide(ground)
 
  drawSprites();
}

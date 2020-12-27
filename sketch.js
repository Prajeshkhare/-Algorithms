movingRect.shapeColor = "green";
movingRect.debug = true;

movingRect.velocityX=-5
fixedRect.velocityX=5
}

function draw() {
background(0);  
//movingRect.x = World.mouseX;
//movingRect.y = World.mouseY;

console.log(movingRect.x-fixedRect.x)

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
  &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
  &&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green"; 
}

drawSprites();
if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
movingRect.velocityX= movingRect.velocityX *(-1)
fixedRect.velocityX= fixedRect.velocityX*(-1)

  }
if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
&&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
  movingRect.velocityY= movingRect.velocityY*(-1)
  fixedRect.velocityY= fixedRect.velocityY*(-1)
}
}
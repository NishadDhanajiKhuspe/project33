 var backGround,backGroundImg,backGroundImage;
function preload(){
  backGroundImg =loadImage("snow2.jpg");
  backGroundImage =loadImage("snow3.jpg")
}
function setup() {
  createCanvas(4000,1000);
  backGround = createSprite(400, 200, 1000, 4000);
  backGround.addImage(backGroundImg);
  
}

function draw() {
  background(255,255,255); 
   keyPressed();
  drawSprites();
}
function keyPressed(){
  if(keyCode === 32){
    backGround.changeImage(backGroundImage);
  }
}

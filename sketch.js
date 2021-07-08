var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,20,50)
  
}

function draw() 
{
 background("white")
if (keyDown("RIGHT")) {
background("orange")  
}
if (keyDown("LEFT")) {
background("blue")  
}
if (keyDown("UP")) {
background("yellow")  
}
if (keyDown("DOWN")) {
background("green")  
}
drawSprites();
}









function setup() {
  createCanvas(1200,400);
  a1 = new Box(500, 300, 20, 20);
  a2 = new Box(470, 300, 20, 20);
  a3 = new Box(440, 300, 20, 20);
  a4 = new Box(410, 300, 20, 20);
  a5 = new Box(380, 300, 20, 20);
  a6 = new Box(350, 300, 20, 20);
  ground=createSprite(425,325,250,20);
}

function draw() {
  background("yellow");  
  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();
  a6.display();
  ground.display();
  drawSprites();
}
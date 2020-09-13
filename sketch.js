var fixedRect, movingRect, otherRect;

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(400, 100, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200,50,50);
  movingRect.shapeColor = "green";
  //otherRect = createSprite(600,100,80,30);
  edges = createEdgeSprites();

  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;

  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  //bounceOff(movingRect,otherRect);
 // bounceOff(fixedRect,otherRect);

  movingRect.bounceOff(edges);
  fixedRect.bounceOff(edges);
  drawSprites();
}


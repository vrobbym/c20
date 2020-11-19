var fixedRect, movingRect;

function setup() {
  createCanvas(600,600);
  
  fixedRect = createSprite(300,300, 50,50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(100,100,50,70);
  movingRect.shapeColor = "green";

}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  var distanceBetweenLeft = fixedRect.x - movingRect.x;
  var maxDistanceBetween = fixedRect.width/2 + movingRect.width/2;
  var distanceBetweenRight = movingRect.x - fixedRect.y;

  var distanceBetweenTop = fixedRect.y-movingRect.y;
  var maxDistanceBetweenY= fixedRect.height/2+ movingRect.height/2;
  var distanceBetweenBottom = movingRect.y-fixedRect.y;

  
  if(distanceBetweenLeft < maxDistanceBetween  && distanceBetweenRight < maxDistanceBetween && distanceBetweenTop< maxDistanceBetweenY&& distanceBetweenBottom<maxDistanceBetweenY){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
    

  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
    

  }

  drawSprites();
 
}
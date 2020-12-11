var a, b;
function setup() {
  createCanvas(800,400);
  a=createSprite(200, 200, 30, 50);
  b=createSprite(400,300 , 70,50);
}

function draw() {
  background(255,255,255);
  b.x=mouseX;
  b.y=mouseY;  
  if(b.x-a.x<a.width/2+b.width/2 && a.x-b.x<a.width/2+b.width/2 && 
    b.y-a.y<a.height/2+b.height/2 && a.y-b.y<a.height/2+b.height/2 ){
      a.shapeColor="pink";
      b.shapeColor="pink";
    }
    else{
    a.shapeColor="blue";
    b.shapeColor="blue";
  }
 console.log(b.x-a.x);
  
  drawSprites();
}
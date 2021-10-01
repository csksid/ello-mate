
var blower
var blowermouth

var ball = createSprite(100,100,50,50)

function blow(){
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05})
}
function setup() {

  button = createButton("Click to blow")
  button.position(width / 2, height - 100)
  button.class("blowButton")
  button.mousePressed(blow)

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  show() 
  drawSprites();

}
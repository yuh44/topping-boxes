// Step 1: namspacing physics Engine world and bodies
const Engine = Matter.Engine;  //Universe
const World = Matter.World;   //Earth
const Bodies = Matter.Bodies;  //Humans, Trees, Animals etc

// Step 2: Create Engine and World for ouwn game
var myEngine, myWorld;

var object1, ground, ball;

var box1, box2;

function setup() {
  createCanvas(400, 400);
  //Step 3: creating engine for your own engine
  myEngine = Engine.create(); // myEngine will have it's own world
  myWorld = myEngine.world;


  box1 = new Box(240, 50, 50, 100);
  box2 = new Box(200, 300, 50, 50);
  
  ground = new Ground(200,390,400,20)



  var ball_options = {
    restitution: 0.8
  }
  ball = Bodies.circle(100, 10, 10, ball_options)



  World.add(myWorld, ball)


}

function draw() {
  // Step 6 : Update your engine using physics engine
  Engine.update(myEngine)
  background("lightblue");

  //Step 7: drawing the object
  rectMode(CENTER)

  box1.display();
  box2.display();

  ground.display();

  ellipseMode(RADIUS)
  fill("purple");
  ellipse(ball.position.x, ball.position.y, 20, 20)

}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var line1,line2,line3,ground,ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ball=createSprite(200,655,30,30)
	ball.shapeColor=("green")
ball.velocityY=-7
ball.velocityX=7

	

line1=createSprite(670,620,20,100)
line1.shapeColor=("yellow")

ground=createSprite(320,670,1000,15)
ground.shapeColor=("red")

line2=createSprite(605,655,150,20)
line2.shapeColor=("yellow")

line3=createSprite(520,615,20,100)
line3.shapeColor=("yellow")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	paper = new Paper()



	dustbin = new Dustbin(1200,650);
	//paper = new Paper
	ground = new Ground(width/120, 670, width, 20)


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  dustbin.display();
  //paper.display();
  ground.display();

  rectMode(CENTER);
  drawSprites();
 
}




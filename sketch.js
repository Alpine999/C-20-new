
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane_options={
isStatic: true
}

var block1
var block2


var rotator1= {
	isStatic: true
}
var rotator2={
	isStatic: true
}
var rotator3={
	isStatic: true
}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	plane_options = createSprite(400,700,800,20)
	
	

	

	//Create the Bodies Here.
	plane = Bodies.rectangle(400,700,800,20,plane_options)

	var rotator_options={
		isStatic: true
	}

	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options)
	World.add(world,rotator1)

	rotator2 = Bodies.rectangle(250,200,150,20,rotator_options)
	World.add(world,rotator2)

	rotator3 = Bodies.rectangle(250,200,150,20,rotator_options)
	World.add(world,rotator3)

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	Engine.update(engine);
}


function draw() {
  rectMode(CENTER);
  background("green");
  
	




  drawSprites();
 
}




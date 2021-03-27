
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobobject1=new Bob(200,500,50);
	bobobject2=new Bob(300,500,50);
	bobobject3=new Bob(400,500,50);
	bobobject4=new Bob(500,500,50);
	bobobject5=new Bob(600,500,50);
	roof1=new Roof(400,100,500,100);
	rope1=new Rope(bobobject1.body,roof1.body,-100*2,0);
  rope2=new Rope(bobobject2.body,roof1.body,-50*2,0);
  rope3=new Rope(bobobject3.body,roof1.body,0*2,0);
  rope4=new Rope(bobobject4.body,roof1.body,50*2,0);
  rope5=new Rope(bobobject5.body,roof1.body,100*2,0);


	Engine.run(engine);

	
   
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  


  keyPressed();
 
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-100,y:-100}); } 
} 








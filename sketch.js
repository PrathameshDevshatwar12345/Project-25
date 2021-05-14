const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject;
var world;
var paper;
//var paperb;


function setup() {
	createCanvas(1366,634);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,600,width,65);
	dustbinObj=new dustbin(1100,557);
	paper=new crumbledPaper(100,550,50);
	//paperb=createEngine(paper.x,paper.y,paper.width,paper.height);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  groundObject.display();
  dustbinObj.display();
  paper.display();

  drawSprites();
}


function keyPressed() {
	if (keyCode===UP_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{x:490,y:-630});
	}

	if (keyCode===RIGHT_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{x:250,y:-250});
	}

	if (keyCode===LEFT_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{x:-250,y:-250});
	}

	if (keyCode===DOWN_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{x:0,y:250});
	}
}
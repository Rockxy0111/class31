
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var divisions=[];
var plinkos=[];
var paeticles=[];




var divisionHeight=300;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(240,800,480,10);
   

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
    
  for (var j = 0; j <=width; j = j + 80) {
    plinkos.push(new Plinko(j,75));
    }

  for (var j = 0; j <=width; j = j + 80) {
    plinkos.push(new Plinko(j,175));
    }

  for (var j = 0; j <=width; j = j + 80) {
    plinkos.push(new Plinko(j,275));
    }

        
  for (var j = 0; j <=width; j = j + 80) {
    plinkos.push(new Plinko(j,375));
    }





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ground.display()
  for (let k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }  

  for (let j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }  
  drawSprites();
 
}




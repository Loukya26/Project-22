const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var bob_options = {
		restitution:0.1
	}

	roof = Bodies.rectangle(400,100,250,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(300,300,40,bob_options)
	World.add(world,bob1)

	bob2 = Bodies.circle(350,300,40,bob_options)
	World.add(world,bob2)

	bob3 = Bodies.circle(400,300,40,bob_options)
	World.add(world,bob1)

	bob4 = Bodies.circle(450,300,40,bob_options)
	World.add(world,bob2)

	bob5 = Bodies.circle(500,300,40,bob_options)
	World.add(world,bob1)

	rope1 = new Rope(bob1,roof,300,100)
	rope2 = new Rope(bob2,roof,350,100)
	rope3 = new Rope(bob3,roof,400,100)
	rope4 = new Rope(bob4,roof,450,100)
	rope5 = new Rope(bob5,roof,500,100)
	

	Engine.run(engine);
	
	con1 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:80,y:0},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  })
	  World.add(world,con1)
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
    ellipse(bob1.position.x,bob1.position.y,40,40)
	ellipse(bob2.position.x,bob2.position.y,40,40)
	ellipse(bob3.position.x,bob3.position.y,40,40)
	ellipse(bob4.position.x,bob4.position.y,40,40)
	ellipse(bob5.position.x,bob5.position.y,40,40)

	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()
	
       
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
		console.log("up arrow pressed")
      Matter.Body.applyForce(bob1,{x:0,y:0},{x:1,y:0});
    }
}

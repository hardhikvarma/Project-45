
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var vaccine;
var doctor,doctorImg;
var background_img;
var slingShot;
var covid1,covid2,covid3,covid4,covid5,covid6;

function preload()
{
	doctorImg = loadImage("doctor.jpg");
  background_img = loadImage("background_img.jpg");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,670,1600,10);

	vaccine = new Vaccine(570,490,50);
	slingShot = new Slingshot(vaccine.body,{x:100,y:450});

	covid1 = new Covid(1000,400,25);
	covid2 = new Covid(1100,300,25);
	covid3 = new Covid(900,400,25);
	covid4 = new Covid(900,300,25);
	covid5 = new Covid(1100,400,25);
	covid6 = new Covid(1000,300,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(background_img);
 image(doctorImg,100,420,150,250)
  
  ground.display();
  vaccine.display();
  slingShot.display();
  covid1.display();
  covid2.display();
  covid3.display();
  covid4.display();
  covid5.display();
  covid6.display();
 
  detectollision(vaccine,covid1);
  detectollision(vaccine,covid2);
  detectollision(vaccine,covid3);
  detectollision(vaccine,covid4);
  detectollision(vaccine,covid5);
  detectollision(vaccine,covid6);

}

function mouseDragged(){
    Matter.Body.setPosition(vaccine.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
	 slingShot.attach(vaccine.body);
	}
   }

   function detectollision(lvaccine,lcovid){
 covidBodyPosition = lcovid.body.position;
 vaccineBodyPosition = lvaccine.body.position;
 var distance=dist(vaccineBodyPosition.x, vaccineBodyPosition.y, covidBodyPosition.x, covidBodyPosition.y)
 if(distance<=lcovid.r+lvaccine.r)
 {
Matter.Body.setStatic(lcovid.body,false);
 }

   }
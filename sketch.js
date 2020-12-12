
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dayImage,boyImage,boy;

function preload()
{
	dayImage=loadImage("Plucking mangoes/1.jpg");
	boyImage=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mangoes(1350,340,20);
	mango2 = new Mangoes(1300,400,20);
	mango3 = new Mangoes(1200,400,20);
	mango4 = new Mangoes(1400,250,20);
	mango5 = new Mangoes(1250,410,20);
	mango6 = new Mangoes(1250,360,20);
	mango7 = new Mangoes(1520,400,20);
	mango8 = new Mangoes(1300,290,20);
	mango9 = new Mangoes(1420,330,20);
	mango10 = new Mangoes(1410,400,20);
	mango11 = new Mangoes(1480,350,20);
	ground = new Ground(800,690,1600,20);
	tree = new Tree(1350,450,500,500);
	stone = new Stone(300,300,15);
	 
	launcher = new Launcher(stone.body,{x:240,y:580});
	boy = createSprite(300,635,20,20);
	boy.addImage(boyImage);
	boy.scale=0.1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(dayImage);
  ground.display();
  tree.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  stone.display();
  launcher.display();
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);


  drawSprites(); 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
	if(keyCode===32)
	{
		Matter.Body.setPosition({x:40,y:620});
		launcher.attach(stone);
	}
}

function detectCollision(body1,body2){
   mangoBodyPosition=body2.body.position
   stoneBodyPosition=body1.body.position

   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,
					  mangoBodyPosition.x,mangoBodyPosition.y);
	
	if(distance<=body2.r+body1.r)
	{
		Matter.Body.setStatic(body2.body,false);
	}
}


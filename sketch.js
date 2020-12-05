
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	boyImage=loadImage("sprites/boy.png")
	treeImage=loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(1015,338,50)
	mango2 = new Mango(1220,314,47)
	mango3 = new Mango(869,354,50)
	mango4 = new Mango(900,450,48)
	mango5 = new Mango(1070,275,44)
	ground1 = new Ground(650,680,1300,20)
	stone1 = new Stone(190,530,30)
	sling1 = new Slingshot(stone1.body,{x:190,y:530})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine)
  	image(boyImage,150,450,200,300)
	image(treeImage,800,200, 500,500)
	text(mouseX+","+mouseY,mouseX,mouseY);
  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
  sling1.display();
  detectcollition(stone1,mango1);
  detectcollition(stone1,mango2);
  detectcollition(stone1,mango3);
  detectcollition(stone1,mango4);
  detectcollition(stone1,mango5);

}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
    sling1.fly()
}

function detectcollition(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if(distance<=lstone.radius+lmango.radius){
		Matter.Body.setStatic(lmango.body,false)
	}
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1, stone1, rubber1, platform1, iron1;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9, sand10, sand11, sand12;

function preload()
{
	
}

function setup() {
var canvas = createCanvas(1100, 700);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
   platform1=new Platform(600,height,1200,30);
   hammer1=new Hammer(200, 100);
   stone1=new Stone(300, 300, 70, 70);
   iron1=new Iron(200, 350);
   rubber1=new Rubber(800, 350, 80);
   sand1=new Sand(500, 450, 10);
   sand2=new Sand(510, 450, 10);
   sand3=new Sand(515, 450, 10);
   sand4=new Sand(520, 450, 10);
   sand5=new Sand(525, 450, 10);
   sand6=new Sand(530, 450, 10);
   sand7=new Sand(535, 450, 10);
   sand8=new Sand(540, 450, 10);
   sand9=new Sand(545, 450, 10);
   sand10=new Sand(550, 450, 10);
   sand11=new Sand(555, 450, 10);
   sand12=new Sand(560, 450, 10);
  
  

}


function draw() {
  rectMode(CENTER);
  background("skyblue");

  Engine.update(engine);


  hammer1.display();
  textSize(20)
  fill("black");
  text("Hammer", hammer1.body.position.x, hammer1.body.position.y);
  stone1.display();
  fill("red");
  text("Stone", stone1.body.position.x, stone1.body.position.y);
  platform1.display();
  iron1.display();
  fill("blue");
  text("Iron", iron1.body.position.x, iron1.body.position.y);
  rubber1.display();
  fill("white");
  text("Rubber", rubber1.body.position.x, rubber1.body.position.y);
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();

 



  drawSprites();
 
}




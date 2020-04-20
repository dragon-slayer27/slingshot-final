const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var sling;
var ball;
var block1,block2,block3,block4,block5

function setup() {
  createCanvas(windowWidth,windowHeight);

   engine = Engine.create();
   world = engine.world;

   block1 = new Ground(800,612,150,15);
   block2 = new Ground(948,356,150,15);
   block3 = new Ground(1114,612,150,15);
   block4 = new Ground(1258,456,150,15);
   block5 = new Ground(653,456,150,15);


   ball = new Ball(30,400,30);

   box1 = new Box(900,350,50,50);
   box2 = new Box(950,350,50,50);
   box3 = new Box(925,200,50,50);
   box4 = new Box(1220,400,50,50);
   box5 = new Box(1270,400,50,50);
   box6 = new Box(1245,250,50,50);
   box7 = new Box(1070,475,50,50);
   box8 = new Box(1120,475,50,50);
   box9 = new Box(1095,325,50,50);
   box10 = new Box(760,400,50,50);
   box11 = new Box(810,400,50,50);
   box12 = new Box(785,250,50,50);
   box13 = new Box(620,350,50,50);
   box14= new Box(670,350,50,50);
   box15 = new Box(645,100,50,50);

   sling = new SlingShot(ball.body, {x:120, y:480});
  
}

function draw() {
  background(233,56,63);
  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();


  ball.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
sling.fly();
}

function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(ball.body, {x:230,  y:400}  );
 sling.attach(ball.body);
}
}
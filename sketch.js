const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    Image=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    var options={
        isStatic:false,
        restituation:1.0,
        friction:0.5,
        density:1.0
    }
ground1=new Ground(410,305,250,20);
ground2=new Ground(860,200,200,20);
//colour to ground

//polygon
Polygon=Bodies.rectangle(200,100,50,50,options)
World.add(world,Polygon)
Point=new point(this.Polygon,{x:50,y:50});
//first tower 
//level four
block1=new block(320,275,30,40)
fill(255)
block2=new block(350,275,30,40)
block3=new block(380,275,30,40)
block4=new block(410,275,30,40)
block5=new block(440,275,30,40)
block6=new block(470,275,30,40)
block7=new block(500,275,30,40)
//level two
block8=new block(350,235,30,40);
block9=new block(380,235,30,40)
block10=new block(410,235,30,40);
block11=new block(440,235,30,40);
block12=new block(470,235,30,40);
//level three
block13=new block(380,195,30,40);
block14=new block(410,195,30,40);
block15=new block(440,195,30,40);
//top
block16=new block(410,155,30,40);
//second tower
//level (1)
Block1=new block(800,170,30,40);
Block2=new block(830,170,30,40);
Block3=new block(860,170,30,40);
Block4=new block(890,170,30,40);
Block5=new block(920,170,30,40);
//level (2)
Block6=new block(830,130,30,40);
Block7=new block(860,130,30,40);
Block8=new block(890,130,30,40);
//level (3)[top]
Block9=new block(860,90,30,40);

}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
    ground2.display();
    //first tower
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
//second tower
Block1.display();
Block2.display();
Block3.display();
Block4.display();
Block5.display();
Block6.display();
Block7.display();
Block8.display();
Block9.display();
//polgon display
Polygon.display();
Point.display();
    strokeWeight(4);
   
}


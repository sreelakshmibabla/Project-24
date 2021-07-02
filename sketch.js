const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var hammer;
var rubber;
var stone;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

  //creating objects
    plane = new Plane(600,height,1200,20);

    hammer = new Hammer(10,100);

    rubber = new Rubber(200,450,40);

    stone = new Stone(400,450);

    iron = new iron(800,450);

    metal1 = new Metal(600,450,10);
    metal2 = new Metal(630,450,10);
    metal3 = new Metal(660,450,10);
    metal4 = new Metal(690,450,10);
    metal5 = new Metal(720,450,10);
    metal6 = new Metal(750,450,10);
    metal7 = new Metal(780,450,10);
    metal8 = new Metal(800,450,10);
    metal9 = new Metal(830,450,10);
    metal10 = new Metal(865,450,10);

}
function draw(){
    background("lightPink");
    Engine.update(engine);

  //displaying objects
    plane.display();

    hammer.display();

    rubber.display();

    stone.display();

    iron.display();

    metal1.display();
    metal2.display();
    metal3.display();
    metal4.display();
    metal5.display();
    metal6.display();
    metal7.display();
    metal8.display();
    metal9.display();
    metal10.display();
}
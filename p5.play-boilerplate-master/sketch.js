const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinko, division;
var ground,particle;





function preload(){




}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
}
var plinko=[];
var particles=[];
var division=[]
var divisionHeight=300;


function draw() {
  background(255,255,255);  
  drawSprites();
}
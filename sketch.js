//const matterMin = require("./matter.min");

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball, blower, blowermouth;
var button;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ball = new Ball (400, 100, 50, 50);
  blower = new Blower (280, 230, 100, 20);
  blowermouth = new Blowermouth (400, 200, 100, 80);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowbutton")
  button.mousePressed(blow);

}

function draw() 
{
  background(51);
  
  ball.show();
  blower.show();
  blowermouth.show();

  Engine.update(engine);

}

function blow(){
  Matter.Body.applyForce(ball.body, {x: 0, y: 0}, {x: 0.0, y: 0.05});
}

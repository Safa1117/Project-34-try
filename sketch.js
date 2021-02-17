const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundIMG;

var ground, hero, fly;

function preload() {
//preload the images here
  backgroundIMG=loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1200,20);

  hero = new Hero(200,200,80,80);
  fly = new Fly(hero.body, {x:500, y:50});
}

function draw() {
  background(backgroundIMG);
  Engine.update(engine);

  ground.display();
  fly.display();
  hero.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}
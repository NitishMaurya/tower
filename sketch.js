var ground,polygon
var block8,block9,block10,block11,block12,block13,
block14,block15,block16
var stand;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
function preload(){

    poly=loadImage("polygon.png")

}
function setup() {
    createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
//adding blocks
    //level two
block8 = new Block(330,635,30,40)
block9 = new Block(360,635,30,40)
block10 = new Block(390,635,30,40)
block11 = new Block(420,635,30,40)
block12 = new Block(450,635,30,40)
//level three
block13 = new Block(360,595,30,40)
block14 = new Block(390,595,30,40)
block15 = new Block(420,595,30,40)
// top
block16 = new Block(390,555,30,40)
//making ground
ground = new Ground(width/2, height-20,width,10)
//stand= new Ground(width/2, 30,50,10)



//polygon holder with sling
polygon = Bodies.circle(50,200,20)
World.add(world,polygon)
sling = new Slingshot(polygon,{x:50,y:200})
}
function draw() {
    
  background("white");
  Engine.update(engine)
  ground.display()
  //stand.display()
  fill("blue")
  block8.display();
  block9.display();  
  block10.display();  
  block11.display();  
  block12.display();  
  block13.display();  
  block14.display();  
  block15.display();  
  block16.display();  
  imageMode(CENTER)
  image(poly, polygon.position.x, polygon.position.y,50,50)  
sling.display();
  
drawSprite();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
  }
function mouseReleased(){
    sling.fly();
}


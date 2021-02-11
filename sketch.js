const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.constraint;
const World = Matter.World;


var shelf1, shelf2, shelf3;
var ground1;
var particles = [];


function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;
  
  shelf1 = new movingShelf(400, 473, 230, 50);

  ground1 = new Ground(400, 495, 1600, 30);

}


function draw() {
  background(255, 217, 161);  

  Engine.update(engine);

  shelf1.display();

  if(frameCount%60===0){
    particles.push(new Particles(random(10, 475), 10, 30, 30));
  }
 for (var p = 0; p < particles.length; p++) {
    particles[p].display();
  }


}

function mouseDragged() {
  Matter.Body.setPosition(shelf1.body, {x: mouseX, y: mouseY});
}

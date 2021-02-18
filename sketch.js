const Engine = Matter.Engine;
const World = Matter.World;
//const Events = Matter.Events,
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var count = 10;
function setup() {

  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
    keyPressed();
    
}
 


function draw() {
  background("black");
  textSize(20);

  fill("red");
  text("Score: "+score,84,450);
  text("Particles Left: "+count,560,450);

  fill("white");
  text("PRESS SPACE TO DROP PARTICLES",230,35);

  text("500",23,590);

  text("100",103,590);

  text("100",183,590);

  text("300",263,590);

  text("300",343,590);
  

  text("100",423,590);

  text("300",503,590);

  text("300",583,590);

  text("500",663,590);

  text("100",743,590);

  if(count <= 0){

    textSize(44);
    text("GAME OVER",275,242);

  }

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

}

function keyPressed(){

    if(keyCode === 32 && count > 0 && mouseX < 801 ){

      particles.push(new Particle(mouseX, 10,10));
      count = count - 1;

    }
  
}

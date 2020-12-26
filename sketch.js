var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var zombie1IMG, zombie1;
var zombie2, zombie2IMG;
var zombie3, zombie3IMG;
var backdrop;
var groundIMG;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	zombie1IMG = loadImage("zombie1.png");
	zombie2IMG = loadImage("zombie2.png");
	zombie3IMG = loadImage("zombie3.png");
	backdrop = loadImage("background.jpg");
	groundIMG = loadImage("ground.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    groundSprite=createSprite(width/2, height-30, width,10);
	groundSprite.addImage(groundIMG);
	groundSprite.scale = 1.7;

	zombie1 = createSprite(100,height-110);
	zombie1.addImage(zombie1IMG);
	zombie1.scale = 0.7;

	zombie2 = createSprite(750, height-115);
	zombie2.addImage(zombie2IMG);
	zombie2.scale = 0.55;

	zombie3 = createSprite(600,height-115);
	zombie3.addImage(zombie3IMG);
	zombie3.scale = 0.6;

	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backdrop);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  

  //To draw the sprites
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW || touches.length > 0) {
	
    Matter.Body.setStatic(packageBody,false);
  }
}






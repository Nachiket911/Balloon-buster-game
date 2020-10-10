// declaration of the background, balloon, bow and arrow sprites. 
var backgroundX, backgroundY;
var rBalloon,pBalloon,gBalloon,bBalloon;
var red_balloon,pink_balloon,green_balloon,blue_balloon;
var selectBalloon;
var gandiv, bow;
var arrow, arrowImage; 
var score;
var arrowGroup, redBalloonsGroup, blueBalloonsGroup, greenBalloonsGroup, 
    pinkBalloonsGroup;

// to preload images.
function preload(){
  
  // this command loads the background image.
  backgroundY = loadImage("background0.png");
  
  // these commands load the balloon images.
  rBalloon = loadImage("red_balloon0.png");
  pBalloon = loadImage("pink_balloon0.png");
  gBalloon = loadImage("green_balloon0.png");
  bBalloon = loadImage("blue_balloon0.png");
  
  // this command loads the bow image.
  bow = loadImage("bow0.png");
  
  // this command loads the arrow image.
  arrowImage = loadImage("arrow0.png");
  
}
  
// this creates objects just for 1 frame.
function setup() {
  
  // this creates the canvas.
  createCanvas(600, 600);
  
  // giving the score an initial value.
  score = 0;  
  
  // this creates the background.
  backgroundX = createSprite(200, 300, 600, 600);
  backgroundX.addImage("backgroundX",backgroundY );
  backgroundX.scale = 3;
  backgroundX.velocityX = -4;
       
  // creating the bow sprite.
  gandiv = createSprite(560, 300, 20, 20);
  gandiv.addImage(bow);
  
  // creating the balloon and the arrow groups.
  redBalloonsGroup = new Group();      
  blueBalloonsGroup = new Group();
  greenBalloonsGroup = new Group();
  pinkBalloonsGroup = new Group();  
  arrowGroup = new Group();
   
}

 // this creates ojects for multiple frames.
function draw() {

    // this resets the background.
   if (backgroundX.x < 0){
    
    backgroundX.x = backgroundX.width/2;
          
  }
  
  // releasing the arrow if the space key goes own.
  if(keyWentDown("space")){
      
    appearArrow();
    arrow.velocityX = -4;
    arrow.y = gandiv.y
    
  } 
  
  // giving the mouse control over the bow.
  gandiv.y = mouseY;
  
  // function to spawn the balloons.
  spawnBalloons();
  
  // incrementing the score when the arrow touches each ballooni
  if(redBalloonsGroup.isTouching(arrowGroup)){
        
        score += 1;
        
        blueBalloonsGroup.destroyEach();
        arrowGroup.destroyEach();
        
      }
  
   if(blueBalloonsGroup.isTouching(arrowGroup)){
        
        score += 1;
        
        blueBalloonsGroup.destroyEach();
        arrowGroup.destroyEach();
        
      }
  
   if(pinkBalloonsGroup.isTouching(arrowGroup)){
        
        score += 3;
        
        pinkBalloonsGroup.destroyEach();
        arrowGroup.destroyEach();
        
      }  
  
     if(greenBalloonsGroup.isTouching(arrowGroup)){
        
        score += 2;
        
        greenBalloonsGroup.destroyEach();
        arrowGroup.destroyEach();
        
      } 
  
  // this makes the sprites appear.
  drawSprites();
 
  // making the score appear and giving it its size and colouri
  textSize(24);
  stroke("red");
  text("Score : " + score, 400, 30);
 
}

// this createes the arrow, adds its image reduces its sizei
function appearArrow() {
  
  arrow = createSprite(520, 300, 20, 20);
  arrow.addImage(arrowImage);
  arrow.scale = 0.3;
  arrow.lifetime = -1;
  gandiv.y = mouseY;
  
  arrowGroup.add(arrow);  
  
}

 // function to spawn the balloons.
function spawnBalloons (){

  // does the activiies every 80 frames.
  if(frameCount % 80 === 0){
  
    // creating the balloons sprite and making random balloons appear.
    var balloons = createSprite(Math.round(random(1,4)), 0, 20, 20);
    if(balloons.x === 1){
    
      redBalloon();    
    
   }else if(balloons.x === 2){
  
      pinkBalloon();       
            
   }else if (balloons.x === 3){
               
      greenBalloon();    
          
   }else if (balloons.x === 4){
  
     blueBalloon();     
     
}    
  
}
  
}

// function calling the red balloon.
function redBalloon(){
  
  //giving the red balloon all its properties.
  red_balloon = createSprite(30, 600, 20, 20);
  red_balloon.addImage(rBalloon);
  red_balloon.scale = 0.1;
  red_balloon.velocityY = -5;  
  red_balloon.lifetime = -1; 
    
  // adding red balloon to its group.    
  redBalloonsGroup.add(red_balloon);
  
}

// function calling the blue balloon.
function blueBalloon(){

  //giving the blue balloon all its properties.
  blue_balloon = createSprite(150, 600, 20, 20);
  blue_balloon.addImage(bBalloon);
  blue_balloon.scale = 0.1;
  blue_balloon.velocityY = -5;
  blue_balloon.lifetime = -1;  
  
  // adding blue balloon to its group.   
  blueBalloonsGroup.add(blue_balloon);
  
}

// function calling the pink balloon.
function pinkBalloon(){

  //giving the pink balloon all its properties.
  pink_balloon = createSprite(70, 600, 20, 20);
  pink_balloon.addImage(pBalloon);
  pink_balloon.scale = 1.2; 
  pink_balloon.velocityY = -5;  
  pink_balloon.lifetime = -1;

  // adding pink balloon to its group.  
  pinkBalloonsGroup.add(pink_balloon);
  
}

// function calling the green balloon.
function greenBalloon(){

  //giving the green balloon all its properties.
  green_balloon = createSprite(110, 600, 20, 20);
  green_balloon.addImage(gBalloon);  
  green_balloon.scale = 0.1;  
  green_balloon.velocityY = -5;  
  green_balloon.lifetime = -1;  
      
  // adding green balloon to its group.   
  greenBalloonsGroup.add(green_balloon);
  
}
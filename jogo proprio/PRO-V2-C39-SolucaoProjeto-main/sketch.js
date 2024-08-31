/*--------------------------------------------------------*/
var madeira, madeiraImg;
var parafuso, parafusoImg;
var parafusadeira, parafusadeiraImg;
var madeira2;

var score=0;

var gameOver, restart;
var ground;
var ground2;
var parede1;

function preload(){
  madeiraImg = loadImage("madeira.jpg");
  parafusadeiraImg = loadImage("parafusadeira.png");
  parafusoImg = loadImage("parafuso.png");
}

function setup() {
  createCanvas(1495, 792);

  parafusadeira = createSprite(770,180,20,50);
  parafusadeira.addImage("parafusadeira", parafusadeiraImg);
  parafusadeira.scale = 0.3;

  madeira = createSprite(500,900,2500,50);
  madeira.addImage("madeira", madeiraImg);
  madeira.scale = 0.5;

  madeira2 = createSprite(1400,900,1920,50);
  madeira2.addImage("madeira2", madeiraImg);
  madeira2.scale = 0.5;

  parafuso = createSprite(1520,530,1920,50);
  parafuso.addImage("parafuso", parafusoImg);
  parafuso.scale = 0.3;
  parafuso.velocityX = -4;

  parafuso.debug = false;
  parafuso.setCollider("rectangle", 0, 0, 40, 360);

  parafusadeira.debug = false;
  parafusadeira.setCollider("rectangle", -240, 300, 40, 360);

  ground = createSprite(700, 680, 20, 50);
  ground.visible = false;

  ground2 = createSprite(700, 563, 10, 10);
  ground2.visible = false;

  parede1 = createSprite(500, 493, 100, 100);
  parede1.visible = false;
  
}

function draw() {
  background("white");
  
  if(keyDown("s")){
    parafusadeira.y = parafusadeira.y + 4;
   }

   if(keyDown("w")){
    parafusadeira.y = parafusadeira.y - 4;
   }

  if(parafusadeira.isTouching(parafuso)) {
    parafuso.velocityX = 0;
    parafuso.y = parafuso.y +4;
    
  }

  if(parafuso.isTouching(ground)) {
    parafuso.velocityX = -4;
  }

  if(parafuso.isTouching(parede1)) {
    parafuso.x = 1920;
    parafuso.y = 530;
    score = score - 2;
  }

  if(parafuso.x < 0) {
    parafuso.x = 1920;
    parafuso.y = 530;
  }

  if(parafuso.x < 1) {
    score = score + 1;
  }
  

  if(parafusadeira.isTouching(ground2)) {
    parafusadeira.y = parafusadeira.y - 4;
  }

  textSize(20);
  text("pontuação: "+score, 20, 20);


  drawSprites();
}
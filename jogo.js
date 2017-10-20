inScreen = true;

/*function preload() {
	pac = loadImage("imagens/pacmandireita.png", "imagens/pacmanFECHADO.png");
}*/

function setup() {

	createCanvas(900, 460);
  background(0);
  pac = createSprite(40, 40, 10 ,10);
  pac.scale = 0.03;
  
  pac.addAnimation("stopped", "imagens/pacmanHorizontal.png");
  pac.addAnimation("movingH", "imagens/pacmanHorizontal.png", "imagens/pacmanFECHADO.png");
  pac.addAnimation("movingV", "imagens/pacmanVertical.png", "imagens/pacmanFECHADO.png" );

}

function draw() {
  background(0);
  creatPac();
  
  
   drawSprites();
  stroke(255,0,0);
  fill(255,0,0);
  rect(200, 20, 40, 40);
  
  stroke(0,255,255);
  fill(0,255,255);
  rect(280, 20, 40, 40);
  
  stroke(234,173,234);
  fill(234,173,234);
  rect(360, 20, 40, 40);
}

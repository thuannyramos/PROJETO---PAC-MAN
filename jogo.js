inScreen = true;
posicaoFantasma = positionGhost();


function preload() {
  blinky = loadImage("imagens/ghost-blinky.png");
  inky = loadImage("imagens/ghost-inky.png");
  pinky = loadImage("imagens/ghost-pinky.png");
  clyde = loadImage("imagens/ghost-clyde.png");
}

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
  

 // imageMode(CENTER); 

  //posicaoFantasma = movFantasma(posicaoFantasma);

  /*image(blinky, posicaoFantasma[0][0], posicaoFantasma[0][1], 40, 40);
  image(inky,posicaoFantasma[1][0], posicaoFantasma[1][1], 40, 40);
  image(pinky, posicaoFantasma[2][0], posicaoFantasma[2][1], 40, 40);
  image(clyde,posicaoFantasma[3][0], posicaoFantasma[3][1], 40, 40);*/

  image(blinky, 200, 30, 40, 40);
  image(inky,250, 30, 40, 40);
  image(pinky, 300, 30, 40, 40);
  image(clyde,350, 30, 40, 40);
}



inScreen = true;
var w = 900;
var h = 500;
var bloco = 30;
var cima = 0; var baixo  = 1; var direita = 2; var esquerda = 3;
var x, y;

posicaoFantasma = [[(w/2) - 25, (h/2) - 25, cima], [(w/2) + 25, (h/2) - 25, direita], [(w/2) - 25, (h/2) + 25, esquerda], [ (w/2) + 25, (h/2) + 25, baixo]];

function preload() {
  fantasma = [];
  for (i = 0; i < 4; i++)
  fantasma[i]  = loadImage("imagens/fantasma0" +  i + ".png");
}

cenario = [
  ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'],
  ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ['b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b'],
  ['b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b'],
  ['b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b'],
  ['b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b'],
  ['b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b'],
  ['b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b', 'v', 'v', 'v', 'v', 'b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b'],
  ['b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b', 'v', 'v', 'v', 'v', 'b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b'],
  ['b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b', 'v', 'v', 'v', 'v', 'b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b'],
  ['b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b', 'b', 'b', 'b', 'b', 'b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b'],
  ['b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b'],
  ['b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b'],
  ['b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b'],
  ['b', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'b'],
  ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
  ];

function colisao (cx, cy) {
  colColuna = Math.floor (cx/bloco);
  colLinha = Math.floor (cy/bloco);
  if (cenario [colLinha][colColuna] == 'b') {
	  return true;
  }
  else {
	  return false;
  } 
  
}

function setup() {

  createCanvas(w, h);
  x = 100;
  y = 100;
  background(0);
  pac = createSprite(55, 85, 10 ,10);
  pac.scale = 0.03;
  
  pac.addAnimation("stopped", "imagens/pacmanHorizontal.png");
  pac.addAnimation("movingH", "imagens/pacmanHorizontal.png", "imagens/pacmanFECHADO.png");
  pac.addAnimation("movingV", "imagens/pacmanVertical.png", "imagens/pacmanFECHADO.png" );

}

function draw() {
  background(0);
  
  creatPac();
  drawSprites();
  

  imageMode(CENTER); 

  //posicaoFantasma = movFantasma(posicaoFantasma);

  for(i = 0; i < 4; i++) image(fantasma[i], posicaoFantasma[i][0], posicaoFantasma[i][1], 40, 40);
  
  //matriz
  for (i = 0; i < cenario.length; i++) {
	  for (j = 0; j < cenario[0].length; j++) {
		  if (cenario[i][j] == 'b') {
			fill (100, 100, 225); 
			rect (j*bloco, i*bloco, bloco, bloco);
		  }
      }
  }
  
  // texto
  var contadorNivel = 1; 
  var contadorVida = 4; 
  var contadorPonto = 0;
  
  textSize (20);
  fill (225);
  text ("Pontuação: " + contadorPonto, 20, 25);
  text ("Vidas: " + contadorVida, 430, 25);
  text ("Nível: " + contadorNivel, 780, 25);  
  
  // colisao
  if (keyIsDown(LEFT_ARROW)) {
	  if (!colisao (x-4-bloco/2, y)) {
		x = x-4;
	  }
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
	  if (!colisao(x+4+bloco/2, y)){
		  x = x+4;
      }
  }
}



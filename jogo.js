inScreen = true;
var w = 900;
var h = 500;
var bloco = 30;
var cima = 0; var baixo  = 1; var direita = 2; var esquerda = 3;
var contadorNivel = 1; 
var contadorVida = 4; 
var contadorPonto = 0;

posicaoFantasma = [[(w/2) - 40, (h/2) - 15, cima], [(w/2) + 10, (h/2) - 15, direita], [(w/2) - 40, (h/2) + 25, esquerda], [ (w/2) + 10, (h/2) + 25, baixo]];


function preload() {
  fantasma = [];
  for (i = 0; i < 4; i++)
  fantasma[i]  = loadImage("imagens/fantasma0" +  i + ".png");
	var cenario = [];
	cenario = cenarioCriar(3);
}

function setup() {
  createCanvas(w, h);
  x = 100;
  y = 100;
  background(0);
  pac = createSprite(45, 75, 10 , 10);
  pac.scale = 0.02;
  
  pac.addAnimation("stopped", "imagens/pacmanHorizontal.png");
  pac.addAnimation("movingH", "imagens/pacmanHorizontal.png", "imagens/pacmanFECHADO.png");
  pac.addAnimation("movingV", "imagens/pacmanVertical.png", "imagens/pacmanFECHADO.png" );

}

function draw() {
  background(0);
  
  creatPac();
  drawSprites();
  

  imageMode(CENTER); 

  // posicaoFantasma = movFantasma(posicaoFantasma);

  for(i = 0; i < 4; i++) image(fantasma[i], posicaoFantasma[i][0], posicaoFantasma[i][1], 35, 35);
  
  // matriz
  for (i = 0; i < cenario.length; i++) {
	  for (j = 0; j < cenario[0].length; j++) {
		  if (cenario[i][j] == 'b') {
			fill (100, 100, 225); 
			rect (j*bloco, i*bloco, bloco, bloco);
		  }
		  else if(i>=2 && i<16 && cenario[i][j] == 'v') {
			fill (200, 150, 150);
			ellipse (j*bloco+15, i*bloco+15, bloco-15, bloco-15);}
	}
  }
  
  
  // texto
 
  
  textSize (20);
  fill (225);
  text ("Pontuação: " + contadorPonto, 20, 25);
  text ("Vidas: " + contadorVida, 430, 25);
  text ("Nível: " + contadorNivel, 780, 25);  

  
  }
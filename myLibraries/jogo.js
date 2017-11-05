var inScreen = true;
var w = 901;
var h = 481;
var bloco = 30;
var contadorNivel = 1; 
var contadorVida = 4; 
var contadorPonto = 0;
var cima = 0; var baixo  = 1; var direita = 2; var esquerda = 3;
var cenario = [];
var estado = 0;
var myFont; var logo;

posicaoFantasma = [[(w/2) - 40, (h/2) - 15, direita], [(w/2) + 10, (h/2) - 15, esquerda], [(w/2) - 40, (h/2) + 25, direita], [ (w/2) + 10, (h/2) + 25, esquerda]];


function preload() {
  myFont = loadFont('font/Pixeled.ttf');
  fantasma = [];
  for (i = 0; i < 4; i++)
  fantasma[i]  = loadImage("imagens/fantasma0" +  i + ".png");
   cenarioCriar(contadorNivel);
   logo = loadImage("imagens/Pac-Man_logo.png");
}

function setup() {
  createCanvas(w, h);
  background(0);
  pac = createSprite(45, 75, 10 , 10);
  pac.scale = 0.02;  
  pac.addAnimation("stopped", "imagens/pacmanHorizontal.png");
  pac.addAnimation("movingH", "imagens/pacmanHorizontal.png", "imagens/pacmanFECHADO.png");
  pac.addAnimation("movingV", "imagens/pacmanVertical.png", "imagens/pacmanFECHADO.png" );

}

function draw() {
  if(estado === 0) menu();
  if(estado === 1) iniciarJogo();
  if(estado === 2) passouFase();
  if(estado === 3) gameOver();
  if(estado === 4) instrucoes();
  }

  
/*
     function life(){
      if (contadorNivel == 1) { //2350
        if (contadorPonto == 50) {
         contadorNivel++;
         cenario = cenarioCriar(contadorNivel);
       iniciarJogo();
        }
      }
      
      if (contadorNivel == 2)	{
        if (contadorPonto == 4660) {
         contadorNivel++;
         cenario = cenarioCriar(contadorNivel);
         pac.position.x = 45;
         pac.position.y = 75;
        }
      }  
      
      if (contadorNivel == 3)	{
        if (contadorPonto == 6980) {
         contadorNivel++;
         cenario = cenarioCriar(contadorNivel);
         pac.position.x = 45;
         pac.position.y = 75;
        }
      }
      
      if (contadorNivel == 4)	{
        if (contadorPonto == 9250) {
          contadorNivel++;
          cenario = cenarioCriar(contadorNivel);
          pac.position.x = 45;
          pac.position.y = 75;
        }
      }
      
      /*if (contadorNivel == 5)	
      if (contadorPonto == 11540) {
        contadorNivel++;
        cenario = cenarioCriar(contadorNivel);
        pac.position.x = 45;
        pac.position.y = 75;
      }*/ 
     
     

    
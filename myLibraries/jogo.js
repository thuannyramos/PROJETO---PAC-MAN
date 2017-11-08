var inScreen = true;
var w = 901;
var h = 481;
var bloco = 30;
var contadorNivel = 1;
var contadorVida = 4;
var contadorPonto = 0;
var cima = 0; var baixo  = 1; var direita = 2; var esquerda = 3;
var cenario = [];
var estado = 2;
var myFont; 
var logo; 
var coracao;
var velPac = 2;
var velFant = 2.75;


posicaoFantasma = [[(w/2) - 40, (h/2) - 15, direita], [(w/2) + 10, (h/2) - 15, esquerda], [(w/2) - 40, (h/2) + 25, direita], [ (w/2) + 10, (h/2) + 25, esquerda]];


function preload() {
  myFont = loadFont('font/Pixeled.ttf');
  fantasma = [];
  for (i = 0; i < 4; i++)
  fantasma[i]  = loadImage("imagens/fantasma0" + i + ".png");
  cenarioCriar(contadorNivel);
  logo = loadImage("imagens/Pac-Man_logo.png");
  coracao = loadImage("imagens/game-life.gif");
}

function setup() {
  createCanvas(w, h);
  frameRate(60);
  background(0);
  pac = createSprite(45, 75, 10 , 10);
  pac.scale = 1.5;
  pac.addAnimation("stopped", "imagens/pacmanHorizontal00.png");
  pac.addAnimation("movingH", "imagens/pacmanHorizontal00.png", "imagens/pacmanHorizontal01.png","imagens/pacmanFECHADO.png");
  pac.addAnimation("movingV", "imagens/pacmanVertical00.png", "imagens/pacmanVertical01.png","imagens/pacmanFECHADO.png" );
  pac.addAnimation("morte", "imagens/pcMorte00.png", "imagens/pcMorte01.png","imagens/pcMorte02.png","imagens/pcMorte03.png", "imagens/pcMorte04.png","imagens/pcMorte05.png","imagens/pcMorte06.png", "imagens/pcMorte07.png","imagens/pcMorte08.png","imagens/pcMorte09.png", "imagens/pcMorte10.png");
}

function draw() {
  if(estado === 0) menu();
  if(estado === 1) iniciarJogo();
  if(estado === 2) gameOver();
  if(estado === 3) instrucoes();
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

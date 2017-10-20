var posicao = new Array(40,40);
inScreen = true;


function preload() {
	pac = loadImage("imagens/pacmandireita.png");
}

function setup() {

	createCanvas(700, 280);
	background(0);

}

function draw() {
  background(0);
  
   imageMode(CENTER);
  
   posicao = creatPac(posicao);
   image(pac, posicao[0], posicao[1], 40 ,40);
  
  
  
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

var posicao = new Array(40,40);
inScreen = true;


/*function preload() {
	pac = loadImage("imagens/pacmandireita.png", "imagens/pacmanFECHADO.png");
}*/

function setup() {

	createCanvas(700, 280);
  background(0);
  pac = createSprite(10, 10, 10 ,10);
  pac.scale = 0.05;
  var pacParado = pac.addAnimation("stoped", "imagens/pacmandireita.png");

  pac.addAnimation("moving", "imagens/pacmandireita.png", "imagens/pacmanFECHADO.png");
  

  //pac.addAnimation("movingLeft", "imagens/pacmanesquerda.png", "imagens/pacmanFECHADO.png");
  pac.addAnimation("stop", "imagens/pacmanesquerda.png");

}

function draw() {
  background(0);
  
   //imageMode(CENTER);
  
   creatPac();
   //image(pac, posicao[0], posicao[1], 40 ,40);
  
  
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

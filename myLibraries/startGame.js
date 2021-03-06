function iniciarJogo(){
    background(0);
    drawSprites();
    cursor(ARROW);

    imageMode(CENTER); 
  
    // matriz do cenário
    for (i = 0; i < cenario.length; i++) {
      for (j = 0; j < cenario[0].length; j++) {
        if (cenario[i][j] === 'b') {
        fill(corR,corG,corB); 
        rect (j*bloco, i*bloco, bloco, bloco);
        }
        else if(i>=1 && i<16 && cenario[i][j] === 'v') {
        fill (200, 150, 150);
        ellipse (j*bloco+15, i*bloco+15, bloco-15, bloco-15);}
        if (cenario [i][j] === 'k') {
        fill (225);
        ellipse (j*bloco+15, i*bloco+15, 22, 22);
        }
      }
    }

    for(i = 0; i < 4; i++) 
		image(fantasma[i], posicaoFantasma[i][0], posicaoFantasma[i][1], 30, 30);

    if(iniciar){
    posicaoFantasma = movFantasma(posicaoFantasma);
    colidiu(pac.position.x, pac.position.y,posicaoFantasma);
    creatPac();
    }
    if(keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW))
      iniciar = true;

    cabecalho();

  }
    
function cabecalho(){
  textSize (15);
  fill (255,255,255);
  textFont(myFont);
  text ("Level: " + contadorNivel, 20, 25); 
  text ("Score: " + contadorPonto, 751, 25);

  imageMode(CENTER); 
  for( i = 0; i < contadorVida; i ++){
    image(coracao, 375 + i*50, 15, 20, 20);
    }
}

function passarFase(){
  cont = 0;
  
    for (i = 0; i < cenario.length; i++) {
        for (j = 0; j < cenario[0].length; j++) {
        if (cenario[i][j] === 'v'){
          cont++;
        }
    }
  }
    if (cont === 0){
      velFant = 0;
			velPac  = 0;
      if(contadorNivel === 5){
        setTimeout(win, 200);
      }
      else{
      setInicio();
      contadorNivel++;
      cenarioCriar(contadorNivel);
      } 
  }
}

function reiniciarJogo(){
  setInicio();
	contadorNivel = 1;
	contadorPonto = 0;
	contadorVida = 4;
	cenarioCriar(contadorNivel);
}

function iniciarJogo(){
    background(0);
    
    creatPac();
    drawSprites();
    
    imageMode(CENTER); 
  
    posicaoFantasma = movFantasma(posicaoFantasma);
  
    for(i = 0; i < 4; i++) image(fantasma[i], posicaoFantasma[i][0], posicaoFantasma[i][1], 35, 35);
    
    // matriz do cenário
    for (i = 0; i < cenario.length; i++) {
      for (j = 0; j < cenario[0].length; j++) {
        if (cenario[i][j] == 'b') {
        fill (100, 100, 225); 
        rect (j*bloco, i*bloco, bloco, bloco);
        }
        else if(i>=1 && i<16 && cenario[i][j] == 'v') {
        fill (200, 150, 150);
        ellipse (j*bloco+15, i*bloco+15, bloco-15, bloco-15);}
        if (cenario [i][j] == 'k') {
        fill (225);
        ellipse (j*bloco+15, i*bloco+15, 22, 22);
        }
      }
    }
  }
    
     function cabecalho(){
      textSize (20);
      fill (225);
      text ("Score: " + contadorPonto, 20, 25);
      text ("Vidas: " + contadorVida, 430, 25);
      text ("Nível: " + contadorNivel, 780, 25); 
     }
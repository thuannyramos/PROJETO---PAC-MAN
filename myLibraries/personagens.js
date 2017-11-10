tempo = 0;

function creatPac(){

//Movimentação lateral - Pac

if (keyIsDown(LEFT_ARROW)){
	if(!bateu)
		pac.changeAnimation("movingH");

	if (!(colisao (pac.position.x-2-bloco/2, pac.position.y - 10) || colisao (pac.position.x-2-bloco/2, pac.position.y + 10))) {
	  if(inScreen)
		{
		pac.position.x  -= velPac;
		pac.mirrorX(-1);
	  }
	  else {
		pac.position.x = w - 40;
		pac.mirrorX(1);
		inScreen = true;
	  }
	}
}

 if (keyIsDown(RIGHT_ARROW)){
	if(!bateu)
		pac.changeAnimation("movingH");
	if (!(colisao(pac.position.x+0+bloco/2, pac.position.y - 10) || colisao(pac.position.x+0+bloco/2, pac.position.y + 10))) {
		if(inScreen){
			pac.position.x +=velPac;
			pac.mirrorX(1);
		}
		else {
			pac.position.x = 40;
			pac.mirrorX(-1);
			inScreen = true;
		}
	}
}

if(pac.position.x < 0 || pac.position.x > w || pac.position.y < 45 || pac.position.y > h - 30) 
	inScreen = false;
  

//Movimentação vertical - Pac

if (keyIsDown(UP_ARROW)){
	if(!bateu)
		pac.changeAnimation("movingV");
	if (!( colisao(pac.position.x - 10 , pac.position.y-1-bloco/2) || colisao(pac.position.x + 10 , pac.position.y-1-bloco/2) )) {
      if(inScreen){
			pac.position.y -= velPac;
			pac.mirrorY(1);
		}
      else{
			pac.position.y = h - 30;
			pac.mirrorY(1);
		 	inScreen = true;
		}
	}
}

if (keyIsDown(DOWN_ARROW)){
	if(!bateu)
		pac.changeAnimation("movingV");
	if (!(colisao(pac.position.x - 10, pac.position.y+0+bloco/2) || colisao(pac.position.x + 10, pac.position.y+0+bloco/2))) {
		if(inScreen){
			pac.position.y += velPac;
			pac.mirrorY(-1);
		}
		else
		{
			pac.position.y = 70;
		 	pac.mirrorY(1);
			inScreen = true;
		}
	}
}
	colisaoComida(pac.position.x, pac.position.y);
}

// movimentação dos fantasmas
function movFantasma(pF){
	for(i = 0; i < 4; i++){
		for(j = 0; j < 2; j++){
		
			// posicao x
			if( j === 0) {
				if ( pF[i][2] === esquerda ){
					if(!(colisaoFantasma(pF[i][0]-bloco/2, pF[i][1]-bloco/2)))
						pF[i][0] -= velFant;
					else {
						pF[i][2] = posFantAleatoria();

					}
				}

				if ( pF[i][2] === direita ){
					if(!(colisaoFantasma(pF[i][0] + bloco/2, pF[i][1])))
						pF[i][0] += velFant;
					else {
						pF[i][2] = posFantAleatoria();
					}
				}
			}	

		   // posicao y
			if (j === 1) {
				if ( pF[i][2] === cima ){
					if(!(colisaoFantasma(pF[i][0], pF[i][1] - bloco/2)))
						pF[i][1] -= velFant;
					else {
						pF[i][2] = posFantAleatoria();
					}
				}

				if ( pF[i][2] === baixo )  {
					if(!(colisaoFantasma(pF[i][0], pF[i][1] + bloco/2)))
						pF[i][1] += velFant;
					else {
						pF[i][2] = posFantAleatoria();
					}
				}
			}

		}
	}
		return pF;
}

//Posição aleátoria do fantasma
function posFantAleatoria(){
	pos = Math.floor((Math.random()*4));
	
	if ( pos === direita) 
		return direita;
	if ( pos === esquerda) 
		return esquerda;
	if ( pos === cima) 
		return cima;
	if ( pos === baixo) 
		return baixo;
 }


// Colisão pac-cenario
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

//Colisão pac-comida
function colisaoComida (cx, cy){
	colColuna = Math.floor (cx/bloco);
	colLinha = Math.floor (cy/bloco);
	
	    //Comida ponto
		if (cenario [colLinha][colColuna] === 'v') {
			cenario [colLinha][colColuna] = 'x';
			contadorPonto +=10;
			passarFase();
		}

		//Comida Velocidade
		if (cenario [colLinha][colColuna] === 'k') {
			cenario [colLinha][colColuna] = 'x';
			tempo = millis() + 6000;			
		}

		//Super - Velocidade do Pac
		if(parseInt(tempo) > parseInt(millis()))
			velPac = 4 + (contadorNivel - 1) * 0.5;
		else
			velPac = 2;	

		
}

//Colisão Fantasma-cenário
function colisaoFantasma(cx, cy){
	colColuna = Math.floor (cx/bloco);
  	colLinha = Math.floor (cy/bloco);
	
	if (cenario [colLinha][colColuna] == 'b') {
	  return true;
  	}
  	else {
	  return false;
  	}
}

//Colisão pac-Fantasma
function colidiu(x, y, pF){
	 for( i = 0; i < 4; i++){
		if( dist(x, y, pF[i][0], pF[i][1]) < 30 && !bateu){
			contadorVida--;
			pac.changeAnimation("morte");
			pac.mirrorY(1);
			velFant = 0;
			velPac  = 0;
			bateu  = true; 
			if(contadorVida === 0){
				estado = 2;
			}
			else{	
				setTimeout(reStart, 500);
			}
		}
	}
}

//Reinicio da fase depois que perde uma vida
function reStart() {
	pac.position.x = 45;
	pac.position.y = 75;
	pac.mirrorX(1);
	velFant = 2.75 + (contadorNivel - 1) * 0.5;
	posicaoFantasma = [[(w/2) - 40, (h/2) - 15, direita], [(w/2) + 10, (h/2) - 15, esquerda], [(w/2) - 40, (h/2) + 25, direita], [ (w/2) + 10, (h/2) + 25, esquerda]];
	pac.changeAnimation("stopped");
	bateu = false;
	velPac  = 2	;
}
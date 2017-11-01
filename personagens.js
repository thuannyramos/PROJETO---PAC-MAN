function creatPac(){
	
	//Movimentação lateral - Pac
  if (keyIsDown(LEFT_ARROW)){
		pac.changeAnimation("movingH");

	if (!(colisao (pac.position.x-1-bloco/2, pac.position.y - 10) || colisao (pac.position.x-1-bloco/2, pac.position.y + 10))) {
	  if(inScreen)
		{
		pac.position.x  -= 5;
		pac.mirrorX(-1);
	  }
	  
	  else {
		pac.position.x = w - 40;
		pac.mirrorX(1);
		inScreen= true;
	  }	
	}  
	colisaoComida(pac.position.x, pac.position.y);
}
 if (keyIsDown(RIGHT_ARROW)){
		pac.changeAnimation("movingH");
	if (!(colisao(pac.position.x+0+bloco/2, pac.position.y - 10) || colisao(pac.position.x+0+bloco/2, pac.position.y + 10))) {
		if(inScreen){
			
			pac.position.x +=5;
			pac.mirrorX(1);
		}
		else {
			pac.position.x = 40;
			pac.mirrorX(-1);
			inScreen = true;
	}	}
	
	colisaoComida(pac.position.x, pac.position.y);
  }
  
  if(pac.position.x < 0 || pac.position.x > w || pac.position.y < 0 || pac.position.y > h) {
		inScreen = false;
  }
  
    
  //Movimentação vertical - Pac
	
   if (keyIsDown(UP_ARROW)){
		pac.changeAnimation("movingV");
	
	if (!( colisao(pac.position.x - 10 , pac.position.y-1-bloco/2) || colisao(pac.position.x + 10 , pac.position.y-1-bloco/2) )) {	
      if(inScreen){
			pac.position.y -= 5;
			pac.mirrorY(1);
		}
    
      else{
			pac.position.y = h - 40;
			pac.mirrorY(-1);
		 	inScreen= true;
		}
	}		
	colisaoComida(pac.position.x, pac.position.y);
}

   if (keyIsDown(DOWN_ARROW)){
		pac.changeAnimation("movingV");
		
	  if (!(colisao(pac.position.x - 10, pac.position.y+0+bloco/2) || colisao(pac.position.x + 10, pac.position.y+0+bloco/2))) {	
		if(inScreen)
		{
			pac.position.y += 5;
			pac.mirrorY(-1);
		}
    
       else{
		 pac.position.y = 40;
		 pac.mirrorY(-1);
		 inScreen= true;
		}
	  }
	}
	colisaoComida(pac.position.x, pac.position.y);
 //else pac.changeAnimation("stopped");

}

	// movimentação dos fantasmas 
	function movFantasma(pF){
		for(i = 0; i < 4; i++){
			for(j = 0; j < 2; j++){
			// posicao x 
			if( j === 0) {
				if ( pF[i][2] == esquerda )  
					pF[i][j] -= 2;
				if ( pF[i][2] == direita )  
					pF[i][j] += 2;
		    if(pF[i][j] >= 900) {
				pF[i][j] = 10;
			}
			if(pF[i][j] <= 0) {
				pF[i][j] = 890;
			}
		}
		   // posicao y
		  if (j===1) {
			pF[i][j] -= 2;
			if(pF[i][j] >= 460) {
				pF[i][j] = 40;
			}
			if(pF[i][j] <= 0) {
				pF[i][j] = 420;
			}
		   }
		
		}
	}
	return pF;
}

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

function colisaoComida (cx, cy){
	colColuna = Math.floor (cx/bloco);
   colLinha = Math.floor (cy/bloco);
	if (cenario [colLinha][colColuna] == 'v') {
	  cenario [colLinha][colColuna] = 'x';
	 contadorPonto +=10;
  } 
}

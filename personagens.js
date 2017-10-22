function creatPac(){
	
	//Movimentação lateral - Pac
  if (keyIsDown(LEFT_ARROW)){
		pac.changeAnimation("movingH");

	  if(inScreen)
		{
		pac.position.x  -= 5;
		pac.mirrorX(-1);
	}
	  
	  else {
		pac.position.x = 660;
		pac.mirrorX(1);
		inScreen= true;
	}	 
}
 if (keyIsDown(RIGHT_ARROW)){
		pac.changeAnimation("movingH");

		if(inScreen){
		pac.position.x +=5;
		pac.mirrorX(1);
	}
		
		else {
			pac.position.x = 40;
			pac.mirrorX(-1);
			inScreen = true;
		}
  }
  
  if(	pac.position.x < 0 || 	pac.position.x > 700 || 	pac.position.y < 0 || 	pac.position.y > 280) {
		inScreen = false;
  }
  
  //Movimentação vertical - Pac
	
   if (keyIsDown(UP_ARROW)){
		pac.changeAnimation("movingV");
		
    if(inScreen){
			pac.position.y -= 5;
			pac.mirrorY(1);
		}
    
    else{
			pac.position.y = 240;
			pac.mirrorY(-1);
		 	inScreen= true;
		}
}

   if (keyIsDown(DOWN_ARROW)){
		pac.changeAnimation("movingV");
		
		if(inScreen)
		{
			pac.position.y +=5;
			pac.mirrorY(-1);
		}
    
    else{
		 pac.position.y = 40;
		 pac.mirrorY(-1);
		 inScreen= true;
		}
	}
 //else pac.changeAnimation("stopped");

	}
	
//Posição inicial dos fantasmas 
	function positionGhost(){
		pos = new Array();
		for (i = 0; i < 4; i++) {
			pos[i] = new Array();
			for (j = 0; j < 2; j++) {
				if( i === 0){
					if( j % 2 === 0)
					pos[i][j] = Math.random(45,100);
					else
					pos[i][j] = Math.random(45,60);
				}
			else {
            if( j % 2 === 0) // posicao x
			 pos[i][j] = Math.random(100,700) + pos[i-1][j];
			else // posicao y
			 pos[i][j] = Math.random(60,300) + pos[i-1][j];
			}
		}
		}
		return pos;
	}

	// movimentação dos fantasmas 
	function movFantasma(pF){
		for(i = 0; i < 4; i++){
			for(j = 0; j < 2; j++){
			// posicao x 
			if( j % 2 === 0) {
			pF[i][j] -= 10;
		    if(pF[i][j] >= 900) {
				pF[i][j] = 10;
			}
			if(pF[i][j] <= 0) {
				pF[i][j] = 890;
			}
		}
		   // posicao y
		   else {
			pF[i][j] -= 5;
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


function creatPac(posicao){
	
	//Movimentação lateral - Pac
  
  if (keyIsDown(LEFT_ARROW)){
	  
	  if(inScreen)
		 posicao[0] -= 5;
	  
	  else {
		 posicao[0] = 660;
		 inScreen= true;
	}	 
}
  if (keyIsDown(RIGHT_ARROW)){
		
		if(inScreen)
			posicao[0]+=5;
		
		else {
			posicao[0]= 40;
			inScreen= true;
		}
  }
  
  if(posicao[0] < 0 || posicao[0] > 700 || posicao[1] < 0 || posicao[1] > 280) {
		inScreen = false;
  }
  
  //Movimentação vertical - Pac
	
  if (keyIsDown(UP_ARROW)){
    
    if(inScreen)
		posicao[1]-=5;
    
    else{
		 posicao[1] = 240;
		 inScreen= true;
		}
}

  if (keyIsDown(DOWN_ARROW)){
		
		if(inScreen)
		posicao[1] +=5;
    
    else{
		 posicao[1] = 40;
		 inScreen= true;
	}
}

	return posicao;
	
	}
	
	
function creatBlinky(){}
function creatInky(){}
function creatPinky(){}
function creatClyde(){}

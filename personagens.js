function creatPac(){
	
	//Movimentação lateral - Pac
  
  if (keyIsDown(LEFT_ARROW)){
		pac.changeAnimation("moving");

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
	
	pac.mirrorX(-1);
}
  else if (keyIsDown(RIGHT_ARROW)){
		pac.changeAnimation("moving");

		if(inScreen){
		pac.position.x +=5;
		pac.mirrorX(1);
	}
		
		else {
			pac.position.x = 40;
			pac.mirrorX(-1);
			inScreen= true;
		}
  }
  
  if(	pac.position.x < 0 || 	pac.position.x > 700 || 	pac.position.y < 0 || 	pac.position.y > 280) {
		inScreen = false;
  }
  
  //Movimentação vertical - Pac
	
  else if (keyIsDown(UP_ARROW)){
		pac.changeAnimation("moving");
		
    if(inScreen){
			pac.position.y -= 5;
			pac.mirrorY(-1);
		}
    
    else{
			pac.position.y = 240;
			pac.mirrorY(-1);
		 	inScreen= true;
		}
}

  else if (keyIsDown(DOWN_ARROW)){
		pac.changeAnimation("moving");
		
		if(inScreen)
		{
			pac.posicao.y +=5;
			pac.mirrorY(-1);
		}
    
    else{
		 pac.posicao.y = 40;
		 pac.mirrorY(-1);
		 inScreen= true;
	}
}

pac.changeAnimation("stoped");

	}
	
	
function creatBlinky(){}
function creatInky(){}
function creatPinky(){}
function creatClyde(){}

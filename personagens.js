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
	
	//pac.mirrorX(-1);
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
	
	
function creatBlinky(){}
function creatInky(){}
function creatPinky(){}
function creatClyde(){}

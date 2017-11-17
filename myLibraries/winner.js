function win() {
	estado = 4;
	background(0);
	imageMode(CENTER);
	cursor(ARROW);
  
	image(trofeu, w/2, h/2+80, 400, 250);
	
	textSize (50);
    fill (225, 255,0);
	textFont(myFont);
	text ("YOU WON!", w/4 +30, h/4);

	textSize (35);
    fill (225, 255,0);
	text ("SCORE: " + contadorPonto, w/4 + 100, h/4 + 60);

	fill(255,255,255);
	textSize (25);
	text ("PLAY AGAIN", 650, 445);

	textSize (25);
	text ("MENU", 25, 445);

	setInicio();
	contadorNivel = 1;
	contadorPonto = 0;
	contadorVida = 4;
	cenarioCriar(contadorNivel);

	if ((mouseX >= 635 && mouseX <= 850 ) && (mouseY >= 400 && mouseY <= 450)){
		fill(255,255,0);
		text ("PLAY AGAIN", 650, 445);
		cursor(HAND);
		if (mouseIsPressed){
			estado = 1;
		}
	}

	if ((mouseX >= 25 && mouseX <= 125) && (mouseY >= 400 && mouseY <= 450)){ 
		fill(255,255,0);
		text ("MENU", 25, 445);
		cursor(HAND);
		if (mouseIsPressed)
		estado = 0;
	}

}

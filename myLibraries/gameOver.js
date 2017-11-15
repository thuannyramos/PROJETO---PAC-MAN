function gameOver(){
	estado = 2;
	background(0);
	cursor(ARROW);
	
	textSize (60);
    fill (225, 255,0);
	textFont(myFont);
	text ("GAME OVER! :(", w/4 - 90, h/4 + 70);

	textSize (45);
    fill (225, 255,0);
	text ("SCORE: " + contadorPonto, w/4 + 30, h/4 + 170);

	fill(255,255,255);
	textSize (25);
	text ("TRY AGAIN", 650, 445);

	textSize (25);
	text ("MENU", 25, 445);

	if ((mouseX >= 635 && mouseX <= 850 ) && (mouseY >= 400 && mouseY <= 450)){ 
		fill(255,255,0);
		text ("TRY AGAIN", 650, 445);
		cursor(HAND);
		if (mouseIsPressed){
			estado = 1;
			setInicio();
			contadorNivel = 1;
			contadorPonto = 0;
			contadorVida = 4;
			cenarioCriar(contadorNivel);
			bateu = false;
			velFant = 2.75 + (contadorNivel - 1) * 0.5;
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

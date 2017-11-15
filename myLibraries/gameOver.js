function gameOver(){
	background(0);
	cursor(ARROW);
	
	textSize (60);
    fill (225, 255,0);
	textFont(myFont);
	text ("GAME OVER :(", w/4 - 90, h/4 + 35);

	textSize (45);
    fill (225, 255,0);
	text ("SCORE: " + contadorPonto, w/4 + 30, h/4 + 120);

	fill(255,255,255);
	textSize (25);
	text ("PLAY AGAIN", 650, 445);

	textSize (25);
	text ("MENU", 25, 445);

	if ((mouseX >= 635 && mouseX <= 870 ) && (mouseY >= 400 && mouseY <= 450)){ 
		fill(255,255,0);
		text ("PLAY AGAIN", 650, 445);
		cursor(HAND);
		if (mouseIsPressed)
			estado = 1;
	}

	if ((mouseX >= 25 && mouseX <= 125) && (mouseY >= 400 && mouseY <= 450)){ 
		fill(255,255,0);
		text ("MENU", 25, 445);
		cursor(HAND);
		if (mouseIsPressed)
		estado = 0;
	}

}

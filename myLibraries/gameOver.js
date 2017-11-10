function gameOver(){
	background(0);
	
	textSize (60);
    fill (225, 255,0);
	textFont(myFont);
	text ("GAME OVER :(", w/4 - 90, h/4 + 35);

	textSize (45);
    fill (225, 255,0);
	text ("SCORE: " + contadorPonto, w/4 + 30, h/4 + 120);

	nofill();
	//stroke(255,255,255;
	rect(w/4 - 130, h/4 + 220, 150, 50);

}

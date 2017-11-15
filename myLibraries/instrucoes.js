function instrucoes(){
	background(0);
	imageMode(CENTER);
	cursor(ARROW);

	textSize (30);
    fill (225, 255,0);
    textFont(myFont);
	text ("Instructions", 275, 70);

	textSize(20);
	text ("Commands", 100, 130);
	text ("Gameplay", 600, 130);
	
	fill (225, 255,255);
	textSize (15);
    text ("Move para cima", 100, 190);
    text ("Move para a esquerda", 100, 255);
	text ("Move para baixo", 100, 315);
	text ("Move para a direita", 100, 375);
    text ("Ganha 10 pontos. Passa de \n\n fase quando come todas.", 540, 180);
    text ("Aumenta a velociade por \n\n 6s", 540, 275);
	text ("Diminui as vidas", 540, 365);
	

	for(i = 0; i < 4; i++)
		image(seta[i], 50, 180 + i*60, 50, 50);
	
	image(fantasmas, 500, 355, 50, 50);
	
	fill (200, 150, 150); //bola rosa
	ellipse (490, 200, 15, 15);
	fill (225); // bola branca
	ellipse (490, 275, 22, 22);
  
	textSize (25);
	text ("PLAY", 750, 445);

	textSize (25);
	text ("MENU", 25, 445);

	if ((mouseX >= 740 && mouseX <= 850 ) && (mouseY >= 400 && mouseY <= 450)){ 
		fill(255,255,0);
		text ("PLAY", 750, 445);
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

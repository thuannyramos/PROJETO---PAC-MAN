function menu (){
    background(0);
    imageMode(CENTER); 
    image(logo, w/2, h/4, 755, 132);

    textSize (30);
    fill (225, 255,255);
    textFont(myFont);
    text ("Start", w/2 - 60, h/2 + 30);
    text ("Instructions", w/2 - 150, h/2 + 120);

    cursor(ARROW);

    if ((mouseX >= 370 && mouseX <= 540 ) && (mouseY>= 230 && mouseY<=275)){ 
        fill(255,255,0);
        text ("Start", w/2 - 60, h/2 + 30);
        cursor(HAND);
        if (mouseIsPressed) {
             estado = 1;
        }
    }
    if ((mouseX >= 290 && mouseX <= 625 ) && (mouseY>= 300 && mouseY<=365)){ 
        fill(255,255,0);
        cursor(HAND);
        text ("Instructions", w/2 - 150, h/2 + 120);
        if (mouseIsPressed) {
             estado = 3;
		}
    }
}

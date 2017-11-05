function menu (){
    
    imageMode(CENTER); 
    image(logo, w/2, h/4, 755, 132);

    textSize (30);
    fill (225, 255,0);
    textFont(myFont);
    text ("Start", w/2 - 60, h/2 + 30);
    text ("Controlers", w/2 - 120, h/2 + 120);

    if ((mouseX >= 370 && mouseX <= 540 ) && (mouseY>= 230 && mouseY<=275)){ 
        fill(255,255,255);
        text ("Start", w/2 - 60, h/2 + 30);
    }
    if ((mouseX >= 320 && mouseX <= 610 ) && (mouseY>= 320 && mouseY<=365)){ 
        fill(255,255,255);
        text ("Controlers", w/2 - 120, h/2 + 120);
    }

}
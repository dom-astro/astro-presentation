let init={x:125};

var isStop, isObjectif, isFocal, isOcculaire, isFin, isImage;


function setup() {
    // Création du canvas
    canvasAstro=createCanvas(400, 180);

    //start ellipse at middle top of screen
    position = createVector(0, 50);
    position2 = createVector(0, 150);
    pos3 = createVector(285, 82);
    pos4 = createVector(285, 118);
    pos5 = createVector(285, 82);
    pos6 = createVector(285, 118);
  
    objectif=createVector(init.x, 100);
    occulaire=createVector(init.x+150, 100);

    // init stop
    isStop=false;
    isObjectif=false;
    isFocal=false;
    isOcculaire=false;
    isImage=false;
    isFin=false;
}

function draw() {

    //draw background
    fill(255, 2);
    noStroke();
    //fill(255,6);
    //stroke('black');
    rect(0, 0, width, height);

    //stroke('orange');
    fill('orange');
    ellipse(position.x, position.y, 2, 2);
    ellipse(position2.x, position2.y, 2, 2);
    ellipse(pos3.x, pos3.y, 1, 1);
    ellipse(pos4.x, pos4.y, 1, 1);
    ellipse(pos5.x, pos5.y, 1, 1);
    ellipse(pos6.x, pos6.y, 1, 1);

    // Draw line
    stroke('black');
    line(0,100,400,100);

    //draw objectif
    noStroke();
    fill('lightblue');
    ellipse(objectif.x, objectif.y, 10, 150);
    //ellipse(occulaire.x, occulaire.y, 8, 100);
    //arc(occulaire.x, occulaire.y, 50, 100, PI / 2 + 0.2, - PI / 2 - 0.2); // lower quarter circle
    noFill();
    stroke("lightblue");
    arc(occulaire.x, occulaire.y,   20, 80, - PI / 2 + 0.2,    PI / 2 - 0.2);
    arc(occulaire.x+1, occulaire.y,  20, 80, - PI / 2 + 0.2,   PI / 2 - 0.2);
    arc(occulaire.x+2, occulaire.y,  20, 80, - PI / 2 + 0.2,   PI / 2 - 0.2);
    arc(occulaire.x+20, occulaire.y, 20, 80,   PI / 2 + 0.2, - PI / 2 - 0.2);
    arc(occulaire.x+21, occulaire.y, 20, 80,   PI / 2 + 0.2, - PI / 2 - 0.2);
    arc(occulaire.x+22, occulaire.y, 20, 80,   PI / 2 + 0.2, - PI / 2 - 0.2);
    stroke("lightblue");
    for (let i=23;i<32;i++) {
        line(occulaire.x+9, occulaire.y-i,occulaire.x+13, occulaire.y-i);
        line(occulaire.x+9, occulaire.y+i,occulaire.x+13, occulaire.y+i);
    }

    if (mouseIsPressed && !isStop) {
        if (isFin) {
            /*$("#image").hide();
            $(".point").hide();
     
            canvasAstro.remove();
            setup();*/
            isStop=true;
        }
        
        // move ellipse
        position.add(2, 0);
        position2.add(2, 0);

        if (position.x>125) {
            position.add(-1, 0.2);
            position2.add(-1, -0.2);
        
            if(!isObjectif) {
                isStop=true;
                isObjectif=true;
                $("#objectif").empty();
                $("#objectif").hide();
                $("#objectif").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>La lumi&egrave;re est d&eacute;vi&eacute;e par la premi&egrave;re lentille qui est convergente.</div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
                $("#objectif").show(500);
            }
        }

        if (position.x>285) {
            position.add(0, -0.2);
            position2.add(0, 0.2);
            pos3.add(-1,0.4);
            pos4.add(-1,-0.4);
            pos5.add(1,0.2);
            pos6.add(1,-0.2);
            
            if(pos3.x<240) {
                stroke("black");
                line(240,90,240,110);
                pos3.add(1,-0.4);
                pos4.add(1,0.4);
            }
            if(!isOcculaire) {
                isStop=true;
                isOcculaire=true;
                $("#objectif").hide(1000);
                $("#occulaire").empty();
                $("#occulaire").hide();
                $("#occulaire").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>La seconde lentille, qui est divergente, redresse la lumi&egrave;re.\
                    </div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
                $("#occulaire").show(500);
            }
        }

        /*if(position.x>325) {
            position.add(0, -0.4);
            position2.add(0, 0.4);
            if(!isOcculaire) {
                isStop=true;
                isOcculaire=true;
                $("#focal").hide(1000);
                $("#occulaire").empty();
                $("#occulaire").hide();
                $("#occulaire").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>La lumi&egrave;re est d&eacute;vi&eacute;e par la seconde objectif avec un angle &alpha;'.</div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
                $("#occulaire").show(500);
            }
        }*/

        if(position.x>372) {
            // Draw focale
            line(372,90,372,110);
            pos5.add(1,-0.2);
            pos6.add(1,0.2);
    
            if(!isImage) {
                isImage=true;
                $("#occulaire").hide(1000);
                $("#image").empty();
                $("#image").hide();
                $("#image").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>L'image se reforme &agrave; au foyer qui est &agrave; l'int&eacute;rieur du la lunette. On obtient une image virtuelle.</div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
                $("#image").show(500);
            }
        }

        if (position.x>width) {
            position.add(-1, 0.4);
            position2.add(-1, -0.4);

            isStop=true;
            position.x=0;
            position.y=50;
            position2.x=0;
            position2.y=150;
        }

  }
  
  if (!mouseIsPressed) {
    isStop=false;
    if (isObjectif && isFocal && isOcculaire && isImage) {
        isFin=true;
    }
  }
  //print('x: '+position.x+", y1: "+position.y+", y2: "+position2.y);
}

function keyPressed() {
    // key = r
    if (keyCode === 82)  {
        canvasAstro.remove();
        setup();
    }
}
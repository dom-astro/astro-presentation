let init={x:300, y:100};

var isStop, isObjectif, isFocal, isOcculaire, isFin, isImage;


function setup() {
    // Création du canvas
    canvasAstro=createCanvas(400, 180);

    //start ellipse at middle top of screen
    position = createVector(0, 50);
    position2 = createVector(0, 150);
    position3 = createVector(320, 50);
    position4 = createVector(320, 150);
    position5 = createVector(137, 87);
    position6 = createVector(170, 119);
  
    objectif=createVector(init.x, init.y);
    occulaire=createVector(init.x+150, init.y);

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

    // Draw line
    stroke('black');
    line(0,init.y,400,init.y);

    //draw objectif
    noFill();
    stroke('lightblue');
    arc(objectif.x, objectif.y,   50, 200, -HALF_PI + 0.3, HALF_PI - 0.3);
    arc(objectif.x+1, objectif.y,   50, 200, -HALF_PI + 0.3, HALF_PI - 0.3);

    if (mouseIsPressed && !isStop) {
        if (isFin) {
            /*$("#image").hide();
            $(".point").hide();
     
            canvasAstro.remove();
            setup();*/
            isStop=true;
        }
        
        if(isOcculaire) {
            //draw occulaire
            noFill();
            stroke("lightblue");
            line(130,80,175,125);
        }

        // move ellipse
        position.add(2, 0);
        position2.add(2, 0);

        if(position.x>320) {
            position.add(-2, 0);
            position2.add(-2, 0);
            fill('orange');
            noStroke();
            ellipse(position3.x, position3.y, 1, 1);
            ellipse(position4.x, position4.y, 1, 1);
            position3.add(-1,0.2);
            position4.add(-1,-0.2);
        
            if(!isObjectif) {
                isObjectif=true;
                isStop=true;
                $("#objectif").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>Les rayons lumineux se refl&egrave;tent sur un mirroir faisant office d'objectif.</div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
                $("#objectif").show(500);
            }
        }

        if(position3.x<200) {
            if(!isOcculaire) {
                isOcculaire=true;
                isStop=true;
                $("#objectif").hide(1000);
                $("#occulaire").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>Probl&egrave;me: comment faire pour &eacute;viter que la t&ecirc;te n'occulte les rayons lumineux?</div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
                $("#objecocculairetif").show(500);
            }
        }


        if(position3.x<=136) {
            position3.add(1,-0.2);
            fill('orange');
            noStroke();
            ellipse(position5.x, position5.y, 1, 1);
            position5.add(0.25, -1);
        }

        if(position3.x<170) {
            position4.add(1,0.2);
            fill('orange');
            noStroke();
            ellipse(position6.x, position6.y, 1, 1);
            position6.add(-0.25, -1);
        }

        /*if (position.x>width) {
            position.add(-1, 0.4);
            position2.add(-1, -0.4);

            isStop=true;
            position.x=0;
            position.y=50;
            position2.x=0;
            position2.y=150;
        }*/

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
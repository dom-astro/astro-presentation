let init={x:300, y:100};

var isStop, isObjectif, isFocal, isOcculaire, isFin, isImage;


function setup() {
    // Création du canvas
    canvasAstro=createCanvas(400, 200);

    //start ellipse at middle top of screen
    position = createVector(0, 50);
    position2 = createVector(0, 150);
    position3 = createVector(320, 52);
    position4 = createVector(320, 148);
    position5 = createVector(151, 86);
    position6 = createVector(151, 114);
  
    objectif=createVector(init.x, init.y);
    occulaire=createVector(149, 0);
    miroir=createVector(125, 100);
    schmidt=createVector(160, 65);

    // init stop
    isStop=false;
    isSchmidt=false;
    isObjectif=false;
    isFocal=false;
    isOcculaire=false;
    isPb=false;
    isMiroir=false;
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
    arc(objectif.x, objectif.y,   50, 200, -HALF_PI + 0.2, -HALF_PI + 0.8);
    arc(objectif.x+1, objectif.y,   50, 200, -HALF_PI + 0.2, -HALF_PI + 0.8);
    arc(objectif.x, objectif.y,   50, 200,  HALF_PI - 0.8, HALF_PI - 0.2);
    arc(objectif.x+1, objectif.y,   50, 200,  HALF_PI - 0.8, HALF_PI - 0.2);

    // draw miroir
    arc(miroir.x-1, miroir.y, 50, 200, -HALF_PI + 0.8, HALF_PI - 0.8);

    //draw schmidt
    arc(schmidt.x, schmidt.y, 50, 150, -PI - 0.8, -PI + 0.8);
    arc(schmidt.x, schmidt.y+70, 50, 150, -PI - 0.8, -PI + 0.8);
    
    //draw support
    noFill();
    stroke('black');
    line(125,init.y-10,142,init.y-10);
    line(142,init.y-10,142,init.y-25);
    line(142,init.y-25,155,init.y-25);

    line(125,init.y+10,142,init.y+10);
    line(142,init.y+10,142,init.y+25);
    line(142,init.y+25,155,init.y+25);
    
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

        if(position.x>135) {
            position.add(-1, 0.01);
            position2.add(-1, -0.01);    

            if(!isSchmidt) {
                isSchmidt=true;
                isStop=true;
                $("#schmidt").empty();
                $("#schmidt").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>La lame de Schmidt d&eacute;vie les rayons lumineux.</div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
                $("#schmidt").show(500);
            }
        }


        if(position.x>320) {
            position.add(-1, -0.01);
            position2.add(-1, 0.01);
            fill('orange');
            noStroke();
            ellipse(position3.x, position3.y, 2, 2);
            ellipse(position4.x, position4.y, 2, 2);
            position3.add(-1,0.2);
            position4.add(-1,-0.2);
        
            if(!isObjectif) {
                isObjectif=true;
                isStop=true;
                $("#schmidt").hide(1000);
                $("#objectif").empty();
                $("#objectif").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>Les rayons lumineux se refl&egrave;tent sur le miroir primaire.</div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
                $("#objectif").show(500);
            }
        }

        if(position3.x<150) {
            position3.add(1,-0.2);
            fill('orange');
            noStroke();
            ellipse(position5.x, position5.y, 2, 2);
            position5.add(1, 0.06);

            position4.add(1,0.2);
            fill('orange');
            noStroke();
            ellipse(position6.x, position6.y, 2, 2);
            position6.add(1, -0.06);

            if(!isMiroir) {    
                isMiroir=true;
                isStop=true;

                // Miroir
                noFill();
                stroke("lightblue");
                //arc(objectif.x+1, objectif.y,   50, 200, -HALF_PI + 0.2, -HALF_PI + 0.8);
                //arc(objectif.x+1, objectif.y, 50, 200, -HALF_PI + 0.3, -HALF_PI);
                //arc(objectif.x, objectif.y,   50, 200,  HALF_PI - 0.8, HALF_PI - 0.2);
                //arc(objectif.x+1, objectif.y,   50, 200,  HALF_PI - 0.8, HALF_PI - 0.2);
            

                $("#objectif").hide(1000);
                $("#miroir").empty();
                $("#miroir").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>On utilise un second miroir convexe pour renvoyer la lumi&egrave;re vers le miroire primaire.<div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
                $("#miroir").show(500);
            }
        }

        if (position5.x>350) {
            //draw occuliare
            //fill('lightblue');
            //stroke('lightblue');
            //ellipse(occulaire.x, occulaire.y,   50, 7);

            // draw focal
            //noFill();
            //stroke("black");
            //line(149,40,149,60);

            //$("#focal").show();

            $("#miroir").hide(1000);
            $("#occulaire").empty();
            $("#occulaire").append("\
            <div class='alert alert-info alert-dismissible' role='alert'>\
                <div>On retrouve un occulaire en sortie du t&eacute;lescope. Le calcul du grossissement est identique &agrave; la lunette. \
                <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
            </div>");
            $("#occulaire").show(500);
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
        if (isObjectif && isFocal && isOcculaire && isSchmidt && isMiroir) {
            isFin=true;
        }
    }
    //print('x: '+position5.x+", y: "+position5.y);
}

function keyPressed() {
    // key = r
    if (keyCode === 82)  {
        canvasAstro.remove();
        $("#objectif").empty();
        $("#pb").empty();
        $("#miroir").empty();
        $("#occulaire").empty();
        //$("#focal").hide();
       
        setup();
    }
}
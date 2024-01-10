let init={x:125};

var isStop, isObjectif, isFocal, isOcculaire, isFin, isImage;


function setup() {
    // Création du canvas
    canvasAstro=createCanvas(400, 180);

    //start ellipse at middle top of screen
    position = createVector(0, 50);
    position2 = createVector(0, 150);
    position3 = createVector(0, 50);

  
    objectif=createVector(init.x, 100);
    occulaire=createVector(init.x+200, 100);

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
    ellipse(position3.x, position3.y, 2, 2);

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
    line(occulaire.x+9, occulaire.y-31,occulaire.x+13, occulaire.y-31);
    line(occulaire.x+9, occulaire.y-30,occulaire.x+13, occulaire.y-30);
    line(occulaire.x+9, occulaire.y-29,occulaire.x+13, occulaire.y-29);
    line(occulaire.x+10, occulaire.y-28,occulaire.x+13, occulaire.y-28);
    line(occulaire.x+10, occulaire.y-27,occulaire.x+13, occulaire.y-27);
    line(occulaire.x+10, occulaire.y-26,occulaire.x+13, occulaire.y-26);
    line(occulaire.x+9, occulaire.y-25,occulaire.x+12, occulaire.y-25);
    line(occulaire.x+9, occulaire.y-24,occulaire.x+12, occulaire.y-24);



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
        position3.add(2, 0.8);

        // Draw AB
        stroke('black');
        line(0,50,0,100);
        $("#point-a").show();
        $("#point-b").show();

        if (position.x>125) {
            position.add(-1, 0.4);
            position2.add(-1, -0.4);
            position3.add(-1, -0.4);
            if(!isObjectif) {
                isStop=true;
                isObjectif=true;
                $("#objectif").empty();
                $("#objectif").hide();
                $("#objectif").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>La lumi&egrave;re est d&eacute;vi&eacute;e par la premi&egrave;re objectif convergente. L'objet est vu sous l'angle &alpha;</div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
                $("#objectif").show(500);
            }

            // Draw alpha
            fill('yellow');
            arc(130, 100, 50, 50, 0, 0.4);
            $("#angle-alpha").show();
        }

        if (position.x>249) {
            position3.add(0, -1.05);
            stroke("black");
            line(250,100,250,150);
            $("#point-a2").show();
            $("#point-b2").show();
            $("#f1").show();
            $("#f2").show();
            
            if(!isFocal) {
                isStop=true;
                isFocal=true;
                $("#objectif").hide(1000);
                $("#focal").empty();
                $("#focal").hide();
                $("#focal").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>Le point focal de la premi&egrave;re objectif se confond avec le point focal de la seconde objectif. C'est un syst&egrave;me afocal.\
                    Soit F1 la premi&egrave;re distance focale et F2 la seconde.\
                    </div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
                $("#focal").show(500);
            }
        }

        if(position.x>325) {
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
            // Draw alpha'
            fill('yellow');
            arc(325, 100, 50, 50, PI-0.55, PI);
            $("#angle-alpha2").show();
        }

        if(position.x>372) {
            stroke("black");
            line(372,70,372,100);
            $("#point-a3").show();
            $("#point-b3").show();
            if(!isImage) {
                isImage=true;
                $("#occulaire").hide(1000);
                $("#image").empty();
                $("#image").hide();
                $("#image").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>L'image se reforme &agrave; l'infini en A''B'' et l'objet est vu sous l'angle &alpha;'.</div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
                $("#image").show(500);
            }
        }

        if (position.x>width) {
            position.add(-1, 0.4);
            position2.add(-1, -0.4);
            position3.add(-1, -0.4);

            isStop=true;
            position.x=0;
            position.y=50;
            position2.x=0;
            position2.y=150;
            position3.x=0;
            position3.y=50;
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
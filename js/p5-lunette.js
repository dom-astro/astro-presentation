let init={x:125};

var isStop, isObjectif, isFocal, isOcculaire, isFin, isImage;


function setup() {
    // Création du canvas
    canvasAstro=createCanvas(400, 200);

    //start ellipse at middle top of screen
    position = createVector(0, 50);
    position2 = createVector(0, 150);
    position3 = createVector(0, 50);

  
    lentille=createVector(init.x, 100);
    lentille2=createVector(init.x+200, 100);

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


    // Draw focale
    stroke('black');
    line(init.x+124,90,init.x+124,110);
    line(init.x+125,90,init.x+125,110);
    line(init.x+126,90,init.x+126,110);

    /*line(init.x+124,120,init.x+129,120);
    line(init.x+124,125,init.x+126,125);
    line(init.x+124,120,init.x+124,130);*/
     
    //draw lentille
    noStroke();
    fill('lightblue');
    ellipse(lentille.x, lentille.y, 10, 150);
    ellipse(lentille2.x, lentille2.y, 8, 100);

    if (mouseIsPressed && !isStop) {
        if (isFin) {
            $("#image").hide();
            $(".point").hide();
     
            canvasAstro.remove();
            setup();
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
                    <div>La lumi&egrave;re est d&eacute;vi&eacute;e par la premi&egrave;re lentille convergente. Soit &alpha; l'angle de d&eacute;viation</div>\
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
            if(!isFocal) {
                isStop=true;
                isFocal=true;
                $("#objectif").hide(1000);
                $("#focal").empty();
                $("#focal").hide();
                $("#focal").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>Le point focal de la premi&egrave;re lentielle se confond avec le point focal de la seconde lentille. C'est un syst&egrave;me afocal.</div>\
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
                    <div>La lumi&egrave;re est d&eacute;vi&eacute;e par la seconde lentille avec un angle &alpha;'.</div>\
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
                    <div>L'image se reforme &agrave; l'infini en A''B''.</div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
                $("#image").show(500);
            }
        }

        if (position.x>width) {
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
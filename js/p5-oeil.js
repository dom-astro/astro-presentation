var y1=110,
    y2=190;

var canvasOeil;
var isStop=false, isCornee=false, isIris=false, isCristallin=false, isRetine=false, isFin=false;

function preload() {
    // Creates a p5.Font object.
    //font = loadFont("font\Freedom.otf");
}

function setup() {
    canvasOeil=createCanvas(450, 300);
    canvasOeil.parent("#oeil");

    //fill(128);

    // 2 light paths
    path1 = createVector(0, y1);
    path2 = createVector(0, y2);

    //start ellipse at middle top of screen
    lentille=createVector(200, 200);
    lentille2=createVector(400, 200);

    // init stop
    isStop=false;
    isCornee=false;
    isIris=false;
    isCristallin=false;
    isRetine=false;
    isFin=false;
}

function draw() {
    //draw background
    fill('#F0F1EB');
    noStroke();
    
    /*stroke('black');
    rect(0, 0, width, height);

    /*textSize(20); 
    text('This is the Courier New font', 20, 200);*/

    // draw cornee
    stroke('lightgreen');
    noFill();
    arc(150, 150, 120, 220, PI / 2 + 0.2, - PI / 2 - 0.2); // lower quarter circle
    arc(151, 150, 120, 220, PI / 2 + 0.2, - PI / 2 - 0.2); // lower quarter circle
    arc(152, 150, 120, 220, PI / 2 + 0.2, - PI / 2 - 0.2); // lower quarter circle
    arc(153, 150, 120, 220, PI / 2 + 0.2, - PI / 2 - 0.2); // lower quarter circle
    arc(154, 150, 120, 220, PI / 2 + 0.2, - PI / 2 - 0.2); // lower quarter circle
    arc(155, 150, 120, 220, PI / 2 + 0.2, - PI / 2 - 0.2); // lower quarter circle
    arc(156, 150, 120, 220, PI / 2 + 0.2, - PI / 2 - 0.2); // lower quarter circle
    arc(157, 150, 120, 220, PI / 2 + 0.2, - PI / 2 - 0.2); // lower quarter circle

    // draw iris
    stroke('black');
    line(169, 50, 169, 120);
    line(170, 50, 170, 120);
    line(169, 180, 169, 250);
    line(170, 180, 170, 250);

    // draw cristallin
    noStroke();
    fill('lightblue');
    crsitalllin=ellipse(225, 150, 20, 200);

    // draw rétine
    noFill();
    stroke('red');
    retine=arc(315, 150, 100, 200, - PI / 2 + 0.1, PI / 2 - 0.1); // lower quarter circle

    // draw light path
    fill('orange');
    noStroke();
    ellipse(path1.x, path1.y, 2, 2);
    ellipse(path2.x, path2.y, 2, 2);
 
    if (mouseIsPressed && !isStop) {
        if (isFin) {
            $("#retine").hide();
            canvasOeil.remove();
            setup();
        }
        //move ellipse
        path1.add(2, 0);
        path2.add(2, 0);

        if (path1.x>95) {
            path1.add(-1, 0.2);
            path2.add(-1, -0.2);
            if(!isCornee) {
                isStop=true;
                isCornee=true;
                $("#cornee").empty();
                $("#cornee").hide();
                $("#cornee").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>La lumi&egrave;re traverse la corn&eacute;e qui se comporte comme une lentille convergente.</div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
                $("#cornee").show(500);
            }
        }

        if (path1.x>165) {
            if(!isIris) {
                isStop=true;
                isIris=true;
                $("#cornee").hide(1000);
                $("#iris").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>La taille de l'iris s'adapate &agrave; la quantit&eacute; de lumi&egrave;re. Plus il y a de lumi&egrave;re, plus il sera petit.</div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
            }
        }

        if(path1.x>215) {
            path1.add(0, -0.1);
            path2.add(0, 0.1);
            if(!isCristallin) {
                isStop=true;
                isCristallin=true;
                $("#iris").hide(1000);
                $("#cristallin").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>Le cristallin fait office de seconde lentille, mais cette fois-ci elle est biconvexe et la courbure\
                         peut-etre modif&eacute;e.</div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
            }
        }

        if (path1.x>365) {
            if(!isRetine) {
                isStop=true;
                isRetine=true;
                $("#cristallin").hide(1000);
                $("#retine").append("\
                <div class='alert alert-info alert-dismissible' role='alert'>\
                    <div>La lumi&egrave;re se focalise sur la r&eacute;tine dans une zone appel&eacute;e\
                         fov&eacute;a o&ugrave; l'accuit&eacute; visuelle est maximale.<div>\
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>\
                </div>");
            }
            path1.add(-1, -0.1);
            path2.add(-1,0);
        }
  }
  
  if (!mouseIsPressed) {
    isStop=false;
    if (isCornee && isIris && isCristallin && isRetine) {
        isFin=true;
    }
  }
    //print('x: '+path1.x+", y1: "+path1.y+", y2: "+path2.y);
}

function keyPressed() {
    // key = r
    if (keyCode === 82)  {
        canvasOeil.remove();
        setup();
    }
}
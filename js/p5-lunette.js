//Position of left hand side of floor
let base1;

//Position of right hand side of floor
let base2;
//Length of floor
//let baseLength;

// Variables related to moving ball
let position;
let velocity;
let speed = 3;
let lentille;

function setup() {
    // Création du canvas
    createCanvas(400, 200);

    //start ellipse at middle top of screen
    position = createVector(0, 50);
    position2 = createVector(0, 150);

  
    lentille=createVector(100, 100);
    lentille2=createVector(300, 100);
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

    //draw lentille
    noStroke();
    fill('lightblue');
    ellipse(lentille.x, lentille.y, 10, 150);
    ellipse(lentille2.x, lentille2.y, 10, 100);

    // Draw line
    stroke('black');
    line(0,100,400,100);

    if (mouseIsPressed) {
        //move ellipse
        position.add(2, 0);
        position2.add(2, 0);

        if (position.x>100) {
            position.add(-1, 0.4);
            position2.add(-1, -0.4);
        }

        if (position.x>width) {
            position.x=0;
            position.y=50;
            position2.x=0;
            position2.y=150;
        }

        if(position.x>300) {
            position.add(0, -0.4);
            position2.add(0, 0.4);
        }
  }
  
  //print('x: '+position.x+", y1: "+position.y+", y2: "+position2.y);
}
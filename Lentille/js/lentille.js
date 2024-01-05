//Position of left hand side of floor
let base1;

//Position of right hand side of floor
let base2;
//Length of floor
//let baseLength;

// Variables related to moving ball
let position;
let velocity;
let r = 1;
let speed = 3;
let lentille;

function setup() {
    var canvasLentille=createCanvas(500, 400);
    //canvasLentille.parent("lentille");

    //fill(128);

    //start ellipse at middle top of screen
    position = createVector(0, 175);
    position2 = createVector(0, 225);

  
    lentille=createVector(200, 200);
    lentille2=createVector(400, 200);
}

function draw() {
    //draw background
    fill(255, 2);
    noStroke();
    //fill(255,6);
    rect(0, 0, width, height);

    fill('orange');
    line(355,250,456,250);
    //draw light
    ellipse(position.x, position.y, r * 2, r * 2);
    ellipse(position2.x, position2.y, r * 2, r * 2);

    //draw lentille
    noStroke();
    fill('lightblue');
    ellipse(lentille.x, lentille.y, r * 9, r * 75);
    ellipse(lentille2.x, lentille2.y, r * 9, r * 50);

    let distToLentille = lentille.x-position.x;

    if (mouseIsPressed) {
        //move ellipse
        position.add(2, 0);
        position2.add(2, 0);

        if (position.x>200) {
            position.add(-1, 0.2);
            position2.add(-1, -0.2);
        }

        if (position.x>width) {
            position.x=0;
            position.y=175;
            position2.x=0;
            position2.y=225;
        }

        if(position.x>400) {
            position.add(0, -0.2);
            position2.add(0, 0.2);
        }
  }
  
  //print('x: '+position.x+", y1: "+position.y+", y2: "+position2.y);
}
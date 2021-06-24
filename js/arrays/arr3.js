new p5();
//randomize background color
var randomizeBackground = random(150);

//
posX = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
posY = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//rules of the canvas
function setup() {
    createCanvas(1000, 1000);
    
    frameRate(55);
}

//start drawing
function draw() {
//set and choose the background color
    background(randomizeBackground,90,randomizeBackground);





    //set y position
    posY.push(mouseY);
    posY.shift();

    //set x position
    posX.push(mouseX);
    posX.shift();
    
    //for loops which tracks the circles
    for (var i = 0; i < posX.length; i ++) {

        //color the circle
        fill(0, 220, 225);

        //create the circle
        circle(posX[i], posY[i], 120);

    }
}

//snake
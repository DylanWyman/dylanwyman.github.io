new p5();


//randomize the background color
var randomizeBackground = random(150);

//create droplet array
var drip = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  
//canvas positioning
var yPos = 0;
var randomizeX = [random(850),random(850),random(850),random(850),random(850),random(850),random(850),random(850),random(850),random(850),random(850),random(850),random(850),random(850),random(850)]

//rules of the canvas

function setup() {
    createCanvas(1000, 1000);
    
    frameRate(10);
}

//start drawing

function draw() {
    //randomly color the background
    background(randomizeBackground,0,randomizeBackground);

    //send the position to the canvas
    drip.push(yPos);
    drip.push(randomizeX);
    
    //for loop for continous droplets
    for (var i = 0; i<drip.length;i++) {

        
        if(i % 5 == 0) {
            //fill droplet blue
            fill(0,85,255)
            //draw and position the drops
            circle(randomizeX, yPos, 15);
            //if the droplets are not at 100
            if(yPos < 1000) {
                //move the drops down by 15
                yPos = yPos + 20;
            } 
            else {
                //change the x position
                randomizeX = random(900);
                //set y position to 0
                yPos = 0;
            } 
        }
        //add uo i
        i++;
    }
}

//drop bricks
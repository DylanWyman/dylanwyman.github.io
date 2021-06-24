new p5();

//circle object
let myCirc = {
    x: 400, yPos: -50, size: 142, speed: 3, r: 55, g: 168, b: 181
}

var randomizeBackground = random(120);

//canvas
function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(randomizeBackground,0,randomizeBackground)

    myCirc.xPos += myCirc.speed;
    myCirc.yPos += myCirc.speed;


    fill(myCirc.r, myCirc.g, myCirc.b)
    circle(myCirc.x, myCirc.yPos, myCirc.size)


    if (myCirc.yPos >= 1000) {
        myCirc.yPos = -50
    }
}
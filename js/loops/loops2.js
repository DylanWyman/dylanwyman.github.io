new p5();

//background variable
var randomizeBackground = random(150);


//create canvas and rules
function setup() {
    createCanvas(400, 400);

    frameRate(1);
}

//draw
function draw() {
    //color background
    background(155, randomizeBackground, randomizeBackground);

    //loop for circles
    for(var i=400;i>0;i=i-7){
        //create circles
        ellipse(200,200,i,i)

    }
}

//circles inside circles
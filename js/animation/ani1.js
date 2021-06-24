new p5();
//random number
var boop = random(150);

//set up canvas
function setup() {
    createCanvas(400, 300);
}

//start drawing
function draw() {
    //make background color
    background(boop, 155, boop);

    // right side mouse
    if (mouseX>=200){
        //make blue
        fill(0,boop,250);

        //draw shape
        ellipse(mouseX,mouseY,25,25);
    }
    //keft side mouse
    if (mouseX<200){
        //make red
        fill(255,boop,0);

        //draw shape
        ellipse(mouseX,mouseY,25,25);
    }
}
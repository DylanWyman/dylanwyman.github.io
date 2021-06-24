new p5();
//random number
var boop = random(150);
var post = 0;

//set up canvas
function setup() {
    createCanvas(800, 600);
}

//start drawing
function draw() {
    //make background color
    background(boop, 155, boop);

    //check if position is smaller than 800
    if (post<=795){
        //make blue
        fill(0,boop,250);

        //draw shape
        ellipse(post,300,25,25);

        //set position right by 5
        post=post+5;
    }

    //check if possition is 800
    if (post===800){
        //make blue
        fill(0,boop,250);

        //draw shape
        ellipse(post,300,25,25);

        //set posistion back to 0
        post=post-800;
    }

}
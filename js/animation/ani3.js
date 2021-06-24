new p5();
//variables
var boop = random(150);
var w = 1;
var h = 1;

//set up canvas
function setup() {
    createCanvas(200, 200);
}

//start drawing
function draw() {
    //make background color
    background(boop, 155, boop);

    //check if width and height are less than 200
    if (w<=199){
        //make blue
        fill(0,boop,250);

        //draw shape
        ellipse(100,100,w,h);

        //increase width and height by 1
        w++;
        h++;
    }

    //check if width and height are at 200
    if (w===200){
        //make blue
        fill(0,boop,250);

        //draw shape
        ellipse(100,100,w,h);

        //deacrease height and width to original size
        w=w-199;
        h=h-199;
    }


}
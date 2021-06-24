new p5();


//randomly color the background
var randomizeBackground = random(150);

//set an x position
var x=20;


//rules of the canvas
function setup() {
    createCanvas(1000, 1000)



    frameRate(1);
}

//start drawing
function draw() {

    //colors for icecream
    var colors = ["#92d11a", "#a1e2d3", "#771c4a"];


//color the background
    background(155, randomizeBackground, randomizeBackground);


    //color loop
    for(var i=0;i<colors.length;i++){
        //fill color based on array
        fill(colors[i]);
        //create a rectangle
        rect(x+10,10,45,145);
        //move the next rectangle
        x=x+55;

    }


    
}

//neopolitan
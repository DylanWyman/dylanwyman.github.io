new p5();
//randomize background color
var randomizeBackground = random(150);
var randomColor = random(50);



//
var circs = [ 100, 100, 20, 300, 200, 20 ];
var frames = 0;
let newcirc = 0;
var slice = 0;
var slice1 = 0;
let arrayPos1 = 0;







//rules of the canvas
function setup() {
    createCanvas(1000, 1000);

    frameRate(1);
}




//start drawing
function draw() {
//set and choose the background color
    background(randomizeBackground, 90, randomizeBackground);

    for (let i = 0; i <= 10; i = i + 0.1) {


        if (arrayPos1 <= 35){
           slice = circs.slice(0,3);
            arrayPos1 = arrayPos1 + 3;
            fill(255,randomColor,randomColor);
            circle (slice);
         }







    for (let j = 0; j<100; j++) {
        if (frames <= 30) {
            frames++;
        }

        if (frames === 30) {
            frames = 1;
            newcirc = [mouseX, mouseY, 20];
            circs = circs.concat(newcirc);
            console.log(circs)
        }
    }

        //concat(circs+newcirc)


    }


}

//midterm




//https://www.w3schools.com/jsref/jsref_obj_array.asp
//https://stackoverflow.com/questions/34883068/how-to-get-first-n-number-of-elements-from-an-array
new p5();


//color variables
var purple = "#9d03fc";
var blue = "#3496e0";
var green = "#15c25a";
var black = "#111211";
var shapes = 50;

//position variable
var xPos = 15;

//background variable
var randomizeBackground = random(150);

//create canvas and rules
function setup() {
   createCanvas(3000, 100);

   frameRate(1);
}


//draw
function draw() {
    //color background
    background(randomizeBackground, 155, randomizeBackground);



    //for variable that determines color
    for (var i=1;i<=shapes;i++)
    {

      //if combination of 3 & 5 make blue
      if (i%3===0&&i%5===0)
      {
        fill(blue);
      }

      //if only 3 make purple
      else if (i%3===0)
      {
        fill(purple);
      }

      //if only 5 make green
      else if (i%5===0)
      {
        fill(green);
      }

      //if neither make black
      else
      {
        fill(black);
      }



      //draw circles and change position
      ellipse(xPos,15,20,20)
      xPos = xPos +20;
    }   

  }

  //fizzbuzz
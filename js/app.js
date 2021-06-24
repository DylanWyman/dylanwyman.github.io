new p5();

var boop = random(150);

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(155, boop, boop);

  
  
  
    let w = 70;
    let h = 120;


    line(20, 55, w, h);
    line(90, 65, w, h);
    line(90, 65, 115, h);
    line(155,55, 115, h);
  
    ellipse(200,200,70, 90);

    rect(300, 100, 90, 120);

    triangle(300,300,320,290,280,340);
    
    
    quad(350,290,290,110,300,200,300,100);


    
    
}
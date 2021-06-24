new p5()
var colors = ["#1c9e36", "#32ced1", "#165e91", "#7c9c2d"];

let r;

function setup() {
    createCanvas(720, 400);
    r = random(colors);
}

function draw() {
    background (140,158,129)
    noStroke();
    fill(r);
    circle(200,200,50);
}


function mousePressed() {
    let d = dist(mouseX, mouseY, 200, 200);
    if (d < 100) { //if true
        r = random(colors);
    }
}
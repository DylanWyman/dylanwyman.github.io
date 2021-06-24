new p5();


let stoplightColors = ["#109010", "#909010", "#901010"];

function setup () {
    createCanvas (500,500);

}

function draw () {
    background (20.133,133)
    for (var i = 0; i < stoplightColors.length; i++) {
        fill(stoplightColors[i]);
        circle(250,200+60*i,50);
    }
}



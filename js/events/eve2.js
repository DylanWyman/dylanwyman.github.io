//set colors
let red = 0;
let green = 0;
let blue = 0;


//grab div
let divColor = document.getElementById("divColor");
divColor.style.width = "400px";
divColor.style.height = "200px";


//current color div
let colorDiv = document.getElementById("current-color");


//change red number
function addRed() {
    let redInc = event.target.getAttribute("data-inc");
    red = red + Number(redInc);

  //update the div
    colorDiv.innerHTML = "rgb("+red+","+green+","+blue+")";

    divColor.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
}

//change green number
function addGreen() {
    let greenInc = event.target.getAttribute("data-inc");
    green = green + Number(greenInc);

    //update the div
    colorDiv.innerHTML = "rgb("+red+","+green+","+blue+")";

    divColor.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
}

//change blue number
function addBlue() {
    let blueInc = event.target.getAttribute("data-inc");
    blue = blue + Number(blueInc);

    //update the div
    colorDiv.innerHTML = "rgb("+red+","+green+","+blue+")";

    divColor.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
}


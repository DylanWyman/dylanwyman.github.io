//grab element
var findDiv = document.getElementById("100");

//make loop that creates more divs
for (var i = 0; i < 517; i++) {
    //create new div
    var newDiv = document.createElement("div");

    //assign div style
    newDiv.style.height = "20px";
    newDiv.style.width = "20px";
    newDiv.style.float = "left";

    //color variance
    var colors = 7.7 * i;

    //create colors
    var color = 'hsl(' + String(colors) + ', 100%, 50%)'

    //send background color
    newDiv.style.backgroundColor = color;

    //locate position
    document.body.insertBefore(newDiv,findDiv);
}

//that's a lot of div
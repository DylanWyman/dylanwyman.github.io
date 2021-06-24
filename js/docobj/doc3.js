//grab element
var theDiv = document.getElementById("nonButton");

//assign color to background
theDiv.style.backgroundColor = "#34888a";

//assign dimsension
theDiv.style.width = "100px";
theDiv.style.height = "100px";

//create function to detect when mouse is above
function above() {
    //assign color
    theDiv.style.backgroundColor = "#0b1212";
}

//create function to detect when mouse is not above
function gone() {
    //assign color
    theDiv.style.backgroundColor = "#34888a";
}



//over and out
//grab element
var growDiv = document.getElementById("growing");
//assign dimensions
var width = 100;
var height = 100;

//create function to make object large
function sizeUp() {
    //scale up dimensions
    width = width * 1.1;
    height = height * 1.1;

    //assign dimesions to div
    growDiv.style.width = width + "px";
    growDiv.style.height = height + "px";

}
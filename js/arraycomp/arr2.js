//grab div
let divs = document.getElementById("divs"); //Pull div

//create the three divs from the source
let objects = [

    { color: "#FF0000", height: 100, width: 300 },

    { color: "#FFFF00", height: 200, width: 200 },

    { color: "#FF0000", height: 300, width: 100 },

];

//for loop
for (var i = 0; i < objects.length; i++) {

    // make a div
    let divEl = document.createElement("div");
    // add div height
    divEl.style.height = objects[i].height + "px";
    // add div width
    divEl.style.width = objects[i].width + "px";
    // make div color
    divEl.style.backgroundColor = objects[i].color;
    // send div styling
    divs.appendChild(divEl);
}
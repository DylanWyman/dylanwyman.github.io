let element = document.getElementsByClassName("squareDiv") //connect class divs from HTML

//for loop that loops through the div class collection
//allows the color to be changed for each div when cycled through
for(let i = 0; i <element.length; i++) {

    //puts an event listener on each div as the loop progresses
    //allows the div's data- attribute to be read and excecuted (on a click, through the function)
    //use [i] because classes of divs are a collection/array

    element[i].addEventListener("click", squareClick) //event handler
}

function squareClick(event) {
    let response = event.target.getAttribute("data-divColor") //attribute variable

    //background color changes on click, data gathered from data-divColor attribute on the divs in HTML
    //each div's data-divColor attribute is read because the loop cycles through the collection of divs
    event.target.style.backgroundColor = response
}
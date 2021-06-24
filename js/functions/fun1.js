
var numberInput = document.getElementById("number");

//retrieve the display
var display = document.getElementById("display");

//use the isDivide function to determine if what the user entered is divisible by 7
function divis() {
    //use an if statement with a %, the % checks for divisible numbers while setting it == 0 takes out any remainders.
    if (numberInput % 7 === 0){
        display.innerHTML = "This number is divisible by 7";
    } else {
        display.innerHTML = "This number is not divisible by 7";
    }
    divisible();
}
function divisible() {
    if (numberInput % 7 === 0){
        console.log("true");
        return true;
    }
    else {
        console.log("false");
        return false;
    }
}

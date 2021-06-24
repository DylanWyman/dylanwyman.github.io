// grab divs
let insertTxt = document.getElementById ("insertTxt");
let dvOutput = document.getElementById ("dvOutput");

// function to take apart string
function breakString() {
    let myArray = insertTxt.value;
    let splitNumbers = myArray.split(",");

    let sum = 0;

    //
    for (var i = 0; i < splitNumbers.length; i++) {
        sum += Number(splitNumbers[i]);
        document.getElementById('insertTxt').value = '';
    }

    let average = sum / splitNumbers.length;


    dvOutput.innerHTML = "Sum= " + sum + "Average= " + average;

}

let dvResult = document.getElementById("dvResult") //results
let numberInput = document.getElementById("numberInput")

function calcTip() {
    //Calculations for tip and total + tip, numbers only
    let tip = Number(numberInput.value * 0.15) //tip calc
    let total = Number(numberInput.value * 1.15) //total + tip calc

    //Display results in separate div
    dvResult.innerHTML = "Tip Amount: $" + tip + "<br>" + "Total Amount: $" + total

    //Log tip and total calculations to console
    console.log("Tip: $", tip, "Total: $", total)
}

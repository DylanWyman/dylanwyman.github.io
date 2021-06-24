// grab text
let txtExample = document.getElementById("txtExample");

// grab empty divs
let dvFound = document.getElementById("dvFound");
let dvNotFound = document.getElementById("dvNotFound");

// set bad words
let badWords = ["clear", "water", "tires"];

// create function to find bad words
function wordCatcher() {


    let words = txtExample.value;

    // take words from the string
    let splitWords = words.split(" ");


    let sum = 0;

    // loop to analyze the split words
    for(let i = 0; i < splitWords.length; i++) {
        // compare the split words with the bad words
        for(let x = 0; x < badWords.length; x++) {
            console.log(badWords[x]);
            console.log(splitWords[i]);

            // when a bad word is seen
            if(splitWords[i] == badWords[x]) {
                console.log("This example contains bad words");
                sum += 1;
            }
        }
    }
        // when a bad word is not seen
        if(sum == 0) {
        console.log("There are only Good Words");
        dvNotFound.innerHTML = "We found: " + sum + "bad words";
    }
        // when
        else {
        console.log("We found Bad Words");
        dvFound.innerHTML = "We found: " + sum + "bad words";
    }





}
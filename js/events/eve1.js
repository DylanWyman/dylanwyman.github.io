//grab answer div
let answer = document.getElementById("answer");
answer.style.margin = "20px";

//set question1
let question1 = document.getElementById("question1");
question1.style.margin = "20px";
question1.style.padding = "10px";

//set question2
let question2 = document.getElementById("question2");
question2.style.margin = "20px";
question2.style.padding = "10px";

//set question3
let question3 = document.getElementById("question3");
question3.style.margin = "20px";
question3.style.padding = "10px";

//send answer to question
function giveAnswer(event) {
    let qAnswer = event.target.getAttribute("data-answer");

    answer.innerHTML = qAnswer;
}

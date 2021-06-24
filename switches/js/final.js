//grabing 8 different colors
//#468c86, #17bd5f, #a4bd17, #4fd6c9
//#a4bd17, #69122f, #ad6507, #eb1b0c

//set early variables
let position = 1;
let click = 0;
let c1 = {color: 0, number: 0};
let c2 = {color: 10, number: 0};
let c1color = 0
let c2color = 0


//set the colors
let co1 = "#a4bd17";
let co2 = "#69122f";
let co3 = "#ad6507";
let co4 = "#eb1b0c";
let co5 = "#468c86";
let co6 = "#17bd5f";
let co7 = "#a4bd17";
let co8 = "#4fd6c9";








//set the color array
let colorArray =
    [co1, co2, co3, co4,
        co5, co6, co7, co8,
        co5, co6, co7, co8,
        co1, co2, co3, co8
    ];


//randomize the color array
let colors = colorArray
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

//see randomized colors
console.log(colors);





//grab the boxes from the html and set colors
let b1 = {doc: document.getElementById("box1"), col: colors.slice(0,1), card: 0, number: 1};
let b2 = {doc: document.getElementById("box2"), col: colors.slice(1,2), card: 0, number: 2};
let b3 = {doc: document.getElementById("box3"), col: colors.slice(2,3), card: 0, number: 3};
let b4 = {doc: document.getElementById("box4"), col: colors.slice(3,4), card: 0, number: 4};
let b5 = {doc: document.getElementById("box5"), col: colors.slice(4,5), card: 0, number: 5};
let b6 = {doc: document.getElementById("box6"), col: colors.slice(5,6), card: 0, number: 6};
let b7 = {doc: document.getElementById("box7"), col: colors.slice(6,7), card: 0, number: 7};
let b8 = {doc: document.getElementById("box8"), col: colors.slice(7,8), card: 0, number: 8};
let b9 = {doc: document.getElementById("box9"), col: colors.slice(8,9), card: 0, number: 9};
let b10 = {doc: document.getElementById("box10"), col: colors.slice(9,10), card: 0, number: 10};
let b11 = {doc: document.getElementById("box11"), col: colors.slice(10,11), card: 0, number: 11};
let b12 = {doc: document.getElementById("box12"), col: colors.slice(11,12), card: 0, number: 12};
let b13 = {doc: document.getElementById("box13"), col: colors.slice(12,13), card: 0, number: 13};
let b14 = {doc: document.getElementById("box14"), col: colors.slice(13,14), card: 0, number: 14};
let b15 = {doc: document.getElementById("box15"), col: colors.slice(14,15), card: 0, number: 15};
let b16 = {doc: document.getElementById("box16"), col: colors.slice(15,16), card: 0, number: 16};












//for loop to assign the colors to different boxes
for(let i = 0; i <= 15; i++){
    let pos1 = colors.slice(i,i+1);
    console.log(pos1);
console.log(i);
    position += 1;
}



//reveal card 1
function reveal1(){

//if there was one click before do this if statement
    if(click==1){
        c1color=b1.col;

        b1.doc.style.backgroundColor = b1.col;
        click++;
       
        console.log(c1.color)
        c1.number=1;
    }
    
//if there were no clicks before do this if statement
    if(click==0){
        c2color=b1.col

        b1.doc.style.backgroundColor = b1.col;
        click++;
        
        c2.number=1
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }

}

//reveal card 2
function reveal2(){

    
//if there was one click before do this if statement
    if(click==1){
        c1color=b2.col

        b2.doc.style.backgroundColor = b2.col;
        click++;
        
        c1.number=2;
    }

//if there were no clicks before do this if statement
    if(click==0){
        c2color=b2.col

        b2.doc.style.backgroundColor = b2.col;
        click++;
        
        console.log(c2.color)
        c2.number=2
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }
}


//reveal card 3
function reveal3(){

//if there was one click before do this if statement
    if(click==1){
        c1color=b3.col

        b3.doc.style.backgroundColor = b3.col;
        click++;
        
        console.log(c1.color)
        c1.number=3;
        }

//if there were no clicks before do this if statement
    if(click==0){
        c2color=b3.col

        b3.doc.style.backgroundColor = b3.col;
        click++;
        
        c2.number=3
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }
}

//reveal card 4
function reveal4(){

//if there was one click before do this if statement
    if(click==1){
        b4.doc.style.backgroundColor = b4.col;
        click++;
        c1color=b4.col
        c1.number=b1.number
        console.log(c1.color)
        c1.number=4;
        }

//if there were no clicks before do this if statement
    if(click==0){
        b4.doc.style.backgroundColor = b4.col;
        click++;
        c2color=b4.col
        c2.number=4
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }
}

//reveal card 5
function reveal5(){

//if there was one click before do this if statement
    if(click==1){
        b5.doc.style.backgroundColor = b5.col;
        click++;
        c1color=b5.col
        console.log(c1.color)
        c1.number=5;
    }

//if there were no clicks before do this if statement
    if(click==0){
        b5.doc.style.backgroundColor = b5.col;
        click++;
        c2color=b5.col
        c2.number=5
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }
}

//reveal card 6
function reveal6(){

//if there was one click before do this if statement
    if(click==1){
        b6.doc.style.backgroundColor = b6.col;
        click++;
        c1color=b6.col
        console.log(c1)
        c1.number=6;
    }

//if there were no clicks before do this if statement
    if(click==0){
        b6.doc.style.backgroundColor = b6.col;
        click++;
        c2color=b6.col
        c2.number=6
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }
}

//reveal card 7
function reveal7(){

//if there was one click before do this if statement
    if(click==1){
        b7.doc.style.backgroundColor = b7.col;
        click++;
        c1color=b7.col
        c1.number=7;
    }

//if there were no clicks before do this if statement
    if(click==0){
        b7.doc.style.backgroundColor = b7.col;
        click++;
        c2color=b7.col
        c2.number=7
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }
}

//reveal card 8
function reveal8(){

//if there was one click before do this if statement
    if(click==1){
        b8.doc.style.backgroundColor = b8.col;
        click++;
        c1color=b8.col
        c1.number=8;
    }

//if there were no clicks before do this if statement
    if(click==0){
        b8.doc.style.backgroundColor = b8.col;
        click++;
        c2color=b8.col
        c2.number=8
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }
}

//reveal card 9
function reveal9(){

//if there was one click before do this if statement
    if(click==1){
        b9.doc.style.backgroundColor = b9.col;
        click++;
        c1color=b9.col
        c1.number=9;
    }

//if there were no clicks before do this if statement
    if(click==0){
        b9.doc.style.backgroundColor = b9.col;
        click++;
        c2color=b9.col
        c2.number=9
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }
}

//reveal card 10
function reveal10(){

//if there was one click before do this if statement
    if(click==1){
        b10.doc.style.backgroundColor = b10.col;
        click++;
        c1color=b10.col
        c1.number=10;
    }

//if there were no clicks before do this if statement
    if(click==0){
        b10.doc.style.backgroundColor = b10.col;
        click++;
        c2color=b10.col
        c2.number=10
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }
}

//reveal card 11
function reveal11(){

//if there was one click before do this if statement
    if(click==1){
        b11.doc.style.backgroundColor = b11.col;
        click++;
        c1color=b11.col
        c1.number=11;
    }

//if there were no clicks before do this if statement
    if(click==0){
        b11.doc.style.backgroundColor = b11.col;
        click++;
        c2color=b11.col
        c2.number=11
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }
}

//reveal card 12
function reveal12(){

//if there was one click before do this if statement
    if(click==1){
        b12.doc.style.backgroundColor = b12.col;
        click++;
        c1color=b12.col
        c1.number=12;
    }

//if there were no clicks before do this if statement
    if(click==0){
        b12.doc.style.backgroundColor = b12.col;
        click++;
        c2color=b12.col
        c2.number=12
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }
}

//reveal card 13
function reveal13(){

//if there was one click before do this if statement
    if(click==1){
        b13.doc.style.backgroundColor = b13.col;
        click++;
        c1color=b13.col
        c1.number=13;
    }

//if there were no clicks before do this if statement
    if(click==0){
        b13.doc.style.backgroundColor = b13.col;
        click++;
        c2color=b13.col
        c2.number=13
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }
}

//reveal card 14
function reveal14(){

//if there was one click before do this if statement
    if(click==1){
        b14.doc.style.backgroundColor = b14.col;
        click++;
        c1color=b10.col
        c1.number=14;
    }

//if there were no clicks before do this if statement
    if(click==0){
        b14.doc.style.backgroundColor = b14.col;
        click++;
        c2color=b14.col
        c2.number=14
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }
}

//reveal card 15
function reveal15(){

//if there was one click before do this if statement
    if(click==1){
        b15.doc.style.backgroundColor = b15.col;
        click++;
        c1color=b15.col
        c1.number=15
    }

//if there were no clicks before do this if statement
    if(click==0){
        b15.doc.style.backgroundColor = b15.col;
        click++;
        c2color=b15.col
        c2.number=15
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }
}

//reveal card 16
function reveal16(){

//if there was one click before do this if statement
    if(click==1){
        b16.doc.style.backgroundColor = b16.col;
        click++;
        c1color=b16.col
        c1.number=16
    }

//if there were no clicks before do this if statement
    if(click==0){
        b16.doc.style.backgroundColor = b16.col;
        click++;
        c2color=b16.col
        c2.number=16
    }

//when there are two click start card comparison
    if(click == 2){
        revealBase()
    }
}








/*

let co1 = "#a4bd17";
let co2 = "#69122f"
let co3 = "#ad6507";
let co4 = "#eb1b0c";
let co5 = "#468c86";
let co6 = "#17bd5f";
let co7 = "#a4bd17";
let co8 = "#4fd6c9";



*/






/*
function revealing(){
    let colorMatch = "blank";

    if(click == 2){

        
        function arrayEquals(c1color, c2color) {
            return Array.isArray(c1color) &&
              Array.isArray(c2color) &&
              c1color.length === c2color.length &&
              c1color.every((val, index) => val === c2color[index]);
          }
          





    


        if(arrayEquals(c1color,c2color)){
            temp += 100
            console.log(temp)
            match();

        }
        if(arrayEquals(c1color,c2color)){
            temp = temp-1000
            console.log(temp)
            noMatch();
        }
    }
}
*/



//variabels for revealed card comparison
let temp = 0;
let colorMatch = "blank";



//wait 3 seconds before comparison
function revealBase(){

    setTimeout(revealing, 3000)


    

}







//compare the two cards function
function revealing(){

//https://www.w3docs.com/snippets/javascript/how-to-remove-an-element-from-an-array-in-javascript.html
    //change variables stuff idk
    let card1 = c1color.shift()
    let card2 = c2color.shift()


    //console log to compare colors
    console.log( card1, card2, co1);

    //if user clicks 
    if(click == 2){

        // testing to see if results match
        if(card1 == co1 && card2 == co1 || card1 == card2){
            colorMatch = "true"
            console.log(1)
        }
        console.log(4)
        if(card1 == co1 && card2 == co1){
            colorMatch = "true"
            console.log(2)
        }
        console.log(5)
        if(card1 == card2){
            colorMatch = "true"
            console.log(3)
        }
        console.log(6)

        //see if color1 matches color2 through the base color as a medium
        if(card1 == co2 && card2 == co2 ){
            colorMatch = "true"
        }
        if(card1 == co3 && card2 == co3 ){
            colorMatch = "true"
        }
        if(card1 == co4 && card2 == co4 ){
            colorMatch = "true"
        }
        if(card1 == co5 && card2 == co5 ){
            colorMatch = "true"
        }
        if(card1 == co6 && card2 == co6 ){
            colorMatch = "true"
        }
        if(card1 == co7 && card2 == co7 ){
            colorMatch = "true"
        }
        if(card1 == co8 && card2 == co8 ){
            colorMatch = "true"
        }

        //if the if statements can't find a match set it to false
      /*  else {
            colorMatch = "false"
        }
        console.log(colorMatch)
*/



    //change variables stuff idk
    card1 = c1color.unshift()
    card2 = c2color.unshift()
    
        console.log(c1color,c2color)

        //if colors don't match send false
        if(colorMatch == "blank"){
            temp = temp-1000
            console.log(temp)
            noMatch();
        }

        //if colors match send true
        if(colorMatch == "true"){
            temp += 100
            console.log(temp)
            match();

        }


    }
}



function match(){
    colorMatch = "blank";

    console.log(c1==c2)

    if(c1==1||c2==1){
        b1.doc.remove();
    }
    if(c1==2||c2==2){
        b2.doc.remove();
    }
    if(c1==3||c2==3){
        b3.doc.remove();
    }
    if(c1==4||c2==4){
        b4.doc.remove();
    }
    if(c1==5||c2==5){
        b5.doc.remove();
    }
    if(c1==6||c2==6){
        b6.doc.remove();
    }
    if(c1==7||c2==7){
        b7.doc.remove();
    }
    if(c1==8||c2==8){
        b8.doc.remove();
    }
    if(c1==9||c2==9){
        b9.doc.remove();
    }
    if(c1==10||c2==10){
        b10.doc.remove();
    }
    if(c1==11||c2==11){
        b11.doc.remove();
    }
    if(c1==12||c2==12){
        b12.doc.remove();
    }
    if(c1==13||c2==13){
        b13.doc.remove();
    }
    if(c1==14||c2==14){
        b14.doc.remove();
    }
    if(c1==15||c2==15){
        b15.doc.remove();
    }
    if(c1==16||c2==16){
        b16.doc.remove();
    }

    c1.color=0
    c2.color=10
    c1.numeber = 0
    c2.number = 0
    click=0
}




function noMatch(){
    b1.card = 0;
    b2.card = 0;
    b3.card = 0;
    b4.card = 0;
    b5.card = 0;
    b6.card = 0;
    b7.card = 0;
    b8.card = 0;
    b9.card = 0;
    b10.card = 0;
    b11.card = 0;
    b12.card = 0;
    b13.card = 0;
    b14.card = 0;
    b15.card = 0;
    b16.card = 0;


    b1.doc.style.backgroundColor = "black";
    b2.doc.style.backgroundColor = "black";
    b3.doc.style.backgroundColor = "black";
    b4.doc.style.backgroundColor = "black";
    b5.doc.style.backgroundColor = "black";
    b6.doc.style.backgroundColor = "black";
    b7.doc.style.backgroundColor = "black";
    b8.doc.style.backgroundColor = "black";
    b9.doc.style.backgroundColor = "black";
    b10.doc.style.backgroundColor = "black";
    b11.doc.style.backgroundColor = "black";
    b12.doc.style.backgroundColor = "black";
    b13.doc.style.backgroundColor = "black";
    b14.doc.style.backgroundColor = "black";
    b15.doc.style.backgroundColor = "black";
    b16.doc.style.backgroundColor = "black";


    c1.color=0
    c2.color=10
    c1.numeber = 0
    c2.number = 0
    click = 0
}


























/*
// @description toggles open and show class to display cards
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};


// @description toggles open and show class to display cards
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};


// @description add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};



// @description when cards match
function matched(){
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("show", "open", "no-event");
    openedCards[1].classList.remove("show", "open", "no-event");
    openedCards = [];
}


// description when cards don't match
function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "no-event","unmatched");
        openedCards[1].classList.remove("show", "open", "no-event","unmatched");
        enable();
        openedCards = [];
    },1100);
}

 */
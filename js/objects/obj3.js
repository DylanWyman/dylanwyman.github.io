//variables
let tDiv = document.getElementById("tDiv");
let tFood = document.getElementById("food");
let tHappiness = document.getElementById("happy");
let tWater = document.getElementById("water");
let tSecure = document.getElementById("security");
let tDefend = document.getElementById("defense");
let tLife = document.getElementById("life");

//create tamgotchi
let myT = {
    name: "Geraldinia",
    food: 10,
    happy: 10,
    water: 10,
    security: 2,
    defend: 2,
    life: 0
};


//Display tamagotchi name
tDiv.innerHTML = "Name: " + myT.name;

//feed tamagotchi
function feedT() {
    myT.food = myT.food + 5;
    tFood.innerHTML = "Food: " + myT.food;
    myT.security = myT.security - 2;
    tSecure.innerHTML = "Security: " + myT.security;
}

//play with tamagotchi
function playT() {
    myT.happy = myT.happy + 5;
    tHappiness.innerHTML = "Happiness: " + myT.happy;
    myT.defend = myT.defend - 1;
    tDefend.innerHTML = "Defense: " + myT.defend;
}


//hydrate tamagotchi
function waterT() {
    myT.water = myT.water + 5;
    myT.life = myT.life + 1;
    myT.defend = myT.defend - 1;
    tWater.innerHTML = "Hydration: " + myT.water;
    tDefend.innerHTML = "Defense: " + myT.defend;
    tLife.innerHTML = "Life: " + myT.life;
    if(myT.life == 20){
        myT.food = 10;
        myT.happy = 10;
        myT.water = 10;
        myT.security = 2;
        myT.defend = 2;
        myT.life = 0;
    }

}

//secure tamagotchi
function secureT() {
    if (myT.security == 0){
        myT.food = 10;
        myT.happy = 10;
        myT.water = 10;
        myT.security = 2;
        myT.defend = 2;
        myT.life = 0;
    }
    myT.security = myT.security + 5;
    tSecure.innerHTML = "Security: " + myT.security;
    myT.food = myT.food - 2;
    tFood.innerHTML = "Food: " + myT.food;
    myT.water = myT.water - 2;
    tWater.innerHTML = "Hydration: " + myT.water;
}

//defend tamagotchi
function defendt() {
    if (myT.defend == 0){
        myT.food = 10;
        myT.happy = 10;
        myT.water = 10;
        myT.security = 2;
        myT.defend = 2;
        myT.life = 0;
    }
    myT.defend = myT.defend + 5;
    tDefend.innerHTML = "Defense: " + myT.defend;
    myT.food = myT.food - 2;
    tFood.innerHTML = "Food: " + myT.food;
    myT.happy = myT.happy - 2;
    tHappiness.innerHTML = "Happiness: " + myT.happy;
}


//life of tamagotchi
function lifet() {
    tLife.innerHTML = "Life: " + myT.life;
}
//tamagachi

//player
//player array
let player = { HP: 300, attack: 150, defense: 100, magic: 150};



var playerHP = document.getElementById("playerHP");
var playerAttack = document.getElementById("playerAttack");
var playerDefense = document.getElementById("playerDefense");
var playerMagic = document.getElementById("playerMagic");




playerHP.innerHTML = "HP: " + player.HP;
playerAttack.innerHTML = "Attack: " + player.attack;
playerDefense.innerHTML = "Defense: " + player.defense;









let enemy = { HP: 300, attack: 150, defense: 100, magic: 150};

var enemyHP = document.getElementById("enemyHP");
var enemyAttack = document.getElementById("enemyAttack");
var enemyDefense = document.getElementById("enemyDefense");
var enemyMagic = document.getElementById("enemyMagic");



enemyHP.innerHTML = "HP: " + enemy.HP;
enemyAttack.innerHTML = "Attack: " + enemy.attack;
enemyDefense.innerHTML = "Defense: " + enemy.defense;






function attackEnemy() {
    enemy.HP -= player.attack - enemy.defense;
    enemyHP.innerHTML = "HP: " + enemy.HP;
    if (enemy.HP == 0) {
        alert("Winner");

    }


}
function defendPlayer(){
    player.defense = player.defense + 35;
    playerDefense.innerHTML = "Defense: " + player.defense;

    if (enemy.HP == 0) {
        alert("Winner");

    }
}

function magicEnemy(){
    enemy.HP -= player.magic - enemy.defense;
    enemyHP.innerHTML = "HP: " + enemy.HP;

    if (enemy.HP == 0) {
        alert("Winner");

    }
}


function attackPlayer() {
    player.HP -= enemy.attack - player.defense;
    playerHP.innerHTML = "HP: " + player.HP;
    if (player.HP == 0) {
        alert("Loser!");

    }


}
function defendEnemy(){
    enemy.defense = enemy.defense + 35;
    enemyDefense.innerHTML = "Defense: " + enemy.defense;

    if (enemy.HP == 0) {
        alert("Winner");

    }
}

function magicPlayer(){
    player.HP -= enemy.magic - player.defense;
    playerHP.innerHTML = "HP: " + player.HP;

    if (player.HP == 0) {
        alert("Loser!");

    }
}
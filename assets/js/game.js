var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    //Alert Player the Round is about to Start
    window.alert("Welcome to Robot Gladiators!")

    //Ask for User input to Fight or Skip
    var promptFight = window.prompt("Would you like to FIGHT " + enemyName + " or SKIP this battle for a fee?");

    //check users choice
    if (promptFight === "FIGHT" || promptFight === "fight") {

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
    
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // check enemy's health
        if (enemyHealth <=0){
            window.alert(enemyName + " has died!");
        }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " health left."); 
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " remaining.");
 
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if (promptFight === "SKIP" || promptFight === "skip"){
        window.alert(playerName + " has chosen to skip the fight!");
        var confirmSkip = window.confirm("Are you sure you wish to skip this fight and lose money? YES or NO?")
        if (confirmSkip)
        {
            playerMoney = playerMoney - 2;
            window.alert(playerName + " has decided to skip this fight! CYA NERD!")
            window.alert(playerName + " has " + playerMoney + " left." )
        }
        else {
            fight();
        }
    }
    else{
        window.alert("You need to choose a valid option. Try again!");
    }
};

fight();
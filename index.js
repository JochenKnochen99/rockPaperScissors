console.log("Welcome to this Game of Rock! Paper! Scissors!");

let computerNumber = 0;
let humanNumber = 0;
let computerScore = 0;
let humanScore = 0;

/*This Function Will Generate A Random Number Between 1, 2 Or 3  */
function getComputerChoice(){
    computerNumber += Math.floor(((Math.random() * 10) + 2) / 4 );
    /* console.log(computerNumber); 
    if (computerNumber <= 1){
         console.log("Rock"); 
    } else if (computerNumber <= 2){
         console.log("Paper"); 
    } else {
         console.log("Scissors"); 
    }
    */
    return computerNumber;
}


/*This Function Asks For Human Input */
function getHumanChoice(){
    

    console.log("Choose one of the following numbers");
    console.log("1 = Rock | 2 = Paper | 3 = Scissors");

    humanNumber = window.prompt("Your number please");
    /*ask for human input*/
    if (humanNumber == 1){
        console.log(" You choosed Rock");
        return humanNumber = 1;
    } else if (humanNumber == 2){
         console.log("You choosed Paper");
        return humanNumber = 2;
    } else if (humanNumber == 3){
        console.log("You choosed Scissors");
        return humanNumber = 3;
    } else {
        console.log("Invalid choice");
    }
}


/*This Function Plays One Round */
function playRound(){
    
    computerNumber = getComputerChoice();
    humanNumber = getHumanChoice();
    
    if (computerNumber <= 1 && humanNumber === 1){
        console.log("Draw ! (PC)Rock vs Rock");
    } else if (computerNumber <= 1 && humanNumber == 2){
        console.log("The Player Wins ! (PC)Rock vs Paper");
        humanScore++;
    } else if (computerNumber <= 1 && humanNumber == 3){
        console.log("The Computer Wins ! (PC)Rock vs Scissors");
        computerScore++;
    } else if (computerNumber == 2 && humanNumber == 1){
        console.log("The Computer Wins ! (PC)Paper vs Rock");
        computerScore++;
    } else if (computerNumber == 2 && humanNumber == 2){
        console.log("Draw ! (PC)Paper vs Paper");
    } else if (computerNumber == 2 && humanNumber == 3){
        console.log("The Player Wins ! (PC)Paper vs Scissors");
        humanScore++;
    } else if (computerNumber == 3 && humanNumber == 1){
        console.log("The Player Wins ! (PC)Scissors vs Rock");
        humanScore++;
    } else if (computerNumber == 3 && humanNumber == 2){
        console.log("The Computer Wins ! (PC)Scissors vs Paper");
        computerScore++;
    } else if (computerNumber == 3 && humanNumber == 3){
        console.log("Draw ! (PC)Scissors vs Scissors");
    }
}


/* This Functions Plays As Many Rounds As It Was Called With*/
function playGame(rounds){
    round = 0;
    humanScore = 0;
    computerScore = 0;

    while(round < rounds){
        playRound();
        round++;
    }
    
    console.log("Final Score : ");
    console.log("PC : " + computerScore + " Human : " + humanScore);
}

/*Calling Only This Function in Main | Other Functions Nested In Eachother */

playGame(3);
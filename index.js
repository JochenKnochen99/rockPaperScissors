console.log("Welcome to this Game of Rock! Paper! Scissors!");

let computerNumber = 0;
let humanNumber = 0;
let computerScore = 0;
let humanScore = 0;

/*This Function Will Generate A Random Number Between 1, 2 Or 3  */
function getComputerChoice(){
    computerNumber = Math.floor(Math.random() * 3) ;
     console.log(computerNumber); 
    if (computerNumber <= 0){
         console.log("Rock"); 
    } else if (computerNumber <= 1){
         console.log("Paper"); 
    } else if (computerNumber <= 2){
         console.log("Scissors"); 
    }
    
    return computerNumber;
}


/*This Function Asks For Human Input */
function getHumanChoice(){
    

    console.log("Choose one of the following : ");
    console.log(" Rock | Paper | Scissors");

    humanInput = window.prompt("Your choice please");
    let humanChoise = humanInput.toLowerCase();

    /*ask for human input*/
    if (humanChoise === "rock"){
        console.log(" You choosed Rock");
        return humanNumber = 0;
    } else if (humanChoise === "paper"){
         console.log("You choosed Paper");
        return humanNumber = 1;
    } else if (humanChoise === "scissors"){
        console.log("You choosed Scissors");
        return humanNumber = 2;
    } else {
        console.log("Invalid choice");
    }
}


/*This Function Plays One Round */
function playRound(){
    
    computerNumber = getComputerChoice();
    humanNumber = getHumanChoice();
    
    if (computerNumber <= 0 && humanNumber === 0 ){
        console.log("Draw ! (PC) Rock vs (YOU) Rock");

    } else if (computerNumber <= 0 && humanNumber == 1){
        console.log("The Player Wins ! (PC) Rock vs (YOU) Paper");
        humanScore++;
    } else if (computerNumber <= 0 && humanNumber == 2){
        console.log("The Computer Wins ! (PC) Rock vs (YOU) Scissors");
        computerScore++;
    } else if (computerNumber == 1 && humanNumber == 0){
        console.log("The Computer Wins ! (PC) Paper vs (YOU) Rock");
        computerScore++;
    } else if (computerNumber == 1 && humanNumber == 1){
        console.log("Draw ! (PC) Paper vs (YOU) Paper");

    } else if (computerNumber == 1 && humanNumber == 2){
        console.log("The Player Wins ! (PC) Paper vs (YOU) Scissors");
        humanScore++;
    } else if (computerNumber >= 2 && humanNumber == 0){
        console.log("The Player Wins ! (PC) Scissors vs (YOU) Rock");
        humanScore++;
    } else if (computerNumber >= 2 && humanNumber == 1){
        console.log("The Computer Wins ! (PC) Scissors vs (YOU) Paper");
        computerScore++;
    } else if (computerNumber >= 2 && humanNumber == 2){
        console.log("Draw ! (PC) Scissors vs (YOU) Scissors");

    }
    console.log("PC : " + computerScore + " Human : " + humanScore);
}


/* This Functions Plays As Many Rounds As It Was Called With*/
function playGame(rounds){
    let round = 0;
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

playGame(5);
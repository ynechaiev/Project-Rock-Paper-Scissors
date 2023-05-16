// console.log("======================");

let maxNum = 0;

function getComputerChoice(maxNum) {
    
    let randomNumber = Math.floor(Math.random() * maxNum);
    
    switch(randomNumber) {
        case 0:
            document.getElementById("csRock").innerHTML =     "X";
            document.getElementById("csPaper").innerHTML =    "";
            document.getElementById("csScissors").innerHTML = "";
          break;
        case 1:
            document.getElementById("csRock").innerHTML =     "";
            document.getElementById("csPaper").innerHTML =    "X";
            document.getElementById("csScissors").innerHTML = "";
          break;
        case 2:
            document.getElementById("csRock").innerHTML =     "";
            document.getElementById("csPaper").innerHTML =    "";
            document.getElementById("csScissors").innerHTML = "X";
          break;
        default:
            document.getElementById("csRock").innerHTML = "Error";
            document.getElementById("csPaper").innerHTML = "Error";
            document.getElementById("csScissors").innerHTML = "Error";
      };
       
    //console.log(randomNumber);
    return randomNumber;

};

// "0 Rock"
// "1 Paper"
// "2 Scissors"

function letsPlay(playerSelectionId) {
    
    var computerSelectionId = 0;
    var computerSelectionWord = '';
    var playerSelectionWord = '';
    var WinnerMsg = "Equal";
    
    computerSelectionId = getComputerChoice(3);

    console.log("com: "+computerSelectionId+" "+"pl: "+playerSelectionId);

    switch(computerSelectionId) {
        case 0:
            computerSelectionWord = "Rock";
          break;
        case 1:
            computerSelectionWord = "Paper";
          break;
        case 2:
          computerSelectionWord = "Scissors";
          break;
      }

    switch(playerSelectionId) {
    case 0:
        playerSelectionWord = "Rock";
        document.getElementById("psRock").innerHTML = "X";
        document.getElementById("psPaper").innerHTML = "";
        document.getElementById("psScissors").innerHTML = "";
        break;
    case 1:
        playerSelectionWord = "Paper";
        document.getElementById("psRock").innerHTML = "";
        document.getElementById("psPaper").innerHTML = "X";
        document.getElementById("psScissors").innerHTML = "";
        break;
    case 2:
        playerSelectionWord = "Scissors";
        document.getElementById("psRock").innerHTML = "";
        document.getElementById("psPaper").innerHTML = "";
        document.getElementById("psScissors").innerHTML = "X";
        break;
    }

    console.log(playerSelectionWord+" "+computerSelectionWord);

    if ((playerSelectionWord == "Rock") && (computerSelectionWord == "Rock")) {WinnerMsg = "Equal"}
    else if ((playerSelectionWord == "Rock") && (computerSelectionWord == "Paper")) {WinnerMsg = "Computer :("}
    else if ((playerSelectionWord == "Rock") && (computerSelectionWord == "Scissors")) {WinnerMsg = "Player :)"}
    
    else if ((playerSelectionWord == "Paper") && (computerSelectionWord == "Rock")) {WinnerMsg = "Player :)"}
    else if ((playerSelectionWord == "Paper") && (computerSelectionWord == "Paper")) {WinnerMsg = "Equal"}
    else if ((playerSelectionWord == "Paper") && (computerSelectionWord == "Scissors")) {WinnerMsg = "Computer :("}

    else if ((playerSelectionWord == "Scissors") && (computerSelectionWord == "Rock")) {WinnerMsg = "Computer :("}
    else if ((playerSelectionWord == "Scissors") && (computerSelectionWord == "Paper")) {WinnerMsg = "Player :)"}
    else if ((playerSelectionWord == "Scissors") && (computerSelectionWord == "Scissors")) {WinnerMsg = "Equal"};
    

    document.getElementById("Winner").innerHTML = "Winner is "+WinnerMsg;

};


// console.log("======================");
console.log("======================");

let maxNum = 0;

function getComputerChoice(maxNum) {
    
    let randomNumber = Math.floor(Math.random() * maxNum);
    
    return randomNumber;

};
 
console.log(getComputerChoice(3));
console.log(getComputerChoice(3));
console.log(getComputerChoice(3));



console.log("======================");
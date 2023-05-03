function getComputerChoice(){
    const choicesArray = ["Rock", "Paper", "Scissors"];
    let randomIndex = (Math.floor(Math.random() * choicesArray.length));
    let choice = choicesArray[randomIndex];
    return choice;
}

console.log(getComputerChoice())
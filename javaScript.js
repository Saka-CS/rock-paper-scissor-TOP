

// Return "Rock", "Paper" or "Scissors"
function getComputerChoice(){
    choice = Math.floor(Math.random() * 3)
    if (choice === 0){
        return "Rock"
    }
    else if (choice === 1){
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

// Handel user input
function getHumanChoice(){
    choice = prompt("Choose your move: 'Rock', 'Paper' or 'Scissors'")
    choice = String(choice).charAt(0).toUpperCase() + choice.slice(1).toLowerCase()

    return choice
}

// Winner logic for each round 
function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        console.log("DRAW! Both Players Chose " + humanChoice)
    }
    else if(humanChoice === "Paper" && computerChoice === "Scissors"){
        console.log("Computer have WON!! Scissors cut paper")
        computerScore += 1
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock"){
        console.log("Human has WON!! Paper cover rock")
        humanScore += 1
    }
    else if(humanChoice === "Rock" && computerChoice === "Paper"){
        console.log("Computer have WON!! Paper cover rock")
        computerScore += 1
    }
    else if(humanChoice === "Rock" && computerChoice === "Scissors"){
        console.log("Human has WON!! Rock breaks scissors")
        humanScore += 1
    }
    else if(humanChoice === "Scissors" && computerChoice === "Rock"){
        console.log("Computer have WON!! Rock breaks scissors")
        computerScore += 1
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper"){
        console.log("Human has WON!! Scissors cut paper")
        humanScore += 1
    }
}

// Game logic
function playGame(){
    humanScore = 0
    computerScore = 0

    while (humanScore < 5 && computerScore < 5){
        humanSelection = getHumanChoice()
        computerSelection = getComputerChoice()

        console.log(humanSelection)
        console.log(computerSelection)

        playRound(humanSelection, computerSelection)

        console.log(humanScore)
        console.log(computerScore)

    }

}

playGame()
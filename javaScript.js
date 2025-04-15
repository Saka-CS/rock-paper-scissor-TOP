

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
        return "Scissor"
    }
}

// Winner logic for each round 
function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        console.log("DRAW! Both Players Chose " + humanChoice)
    }
    else if(humanChoice === "Paper" && computerChoice === "Scissor"){
        console.log("Computer have WON!! Scissor cut paper")
        score[1].textContent = parseInt(score[1].textContent) + 1;
        computerScore += 1;
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock"){
        console.log("Human has WON!! Paper cover rock")
        score[0].textContent = parseInt(score[0].textContent) + 1;
        humanScore += 1;
    }
    else if(humanChoice === "Rock" && computerChoice === "Paper"){
        console.log("Computer have WON!! Paper cover rock");
        score[1].textContent = parseInt(score[1].textContent) + 1;
        computerScore += 1;
    }
    else if(humanChoice === "Rock" && computerChoice === "Scissor"){
        console.log("Human has WON!! Rock breaks scissor")
        score[0].textContent = parseInt(score[0].textContent) + 1;
        humanScore += 1;
    }
    else if(humanChoice === "Scissor" && computerChoice === "Rock"){
        console.log("Computer have WON!! Rock breaks scissor")
        score[1].textContent = parseInt(score[1].textContent) + 1;
        computerScore += 1
    }
    else if(humanChoice === "Scissor" && computerChoice === "Paper"){
        console.log("Human has WON!! Scissor cut paper");
        score[0].textContent = parseInt(score[0].textContent) + 1;
        humanScore += 1
    }
}

// start game
function startGame(e){
    choice = e.target;
    console.log(choice.id);
    playRound(choice.id, getComputerChoice());
    if(humanScore === 5){
        title.textContent = " THE HUMAN HAS WON";
        options.removeEventListener("click", startGame);
    }
    else if(computerScore === 5){
        title.textContent = " THE COMPUTER HAS WON";
        options.removeEventListener("click", startGame);
    }
};

// Game logic
const options = document.querySelector("#player-choice");
const score = document.querySelectorAll(".points");
const title = document.querySelector("#title");
humanScore = 0;
computerScore = 0;

options.addEventListener("click", startGame);
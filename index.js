function getComputerChoice() {
  let value = Math.floor(Math.random() * 3);

  if (value == 0) {
    return "rock";
  } else if (value == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Please choose rock, paper or scissors.");

  if (choice == "rock") {
    return "rock";
  } else if (choice == "paper") {
    return "paper";
  } else if (choice == "scissors") {
    return "scissors";
  } else {
    return "Invalid Input.";
  }
}

result = document.getElementById("result");
score = document.getElementById("score");
winner = document.getElementById("winner");

function playRound(humanChoice, computerChoice) {
  while(humanScore < 5 && computerScore < 5) {
  if (humanChoice === computerChoice) {
    result.innerHTML = "It's a Tie!"; 
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result.innerHTML = "You win! " + humanChoice + " beats " + computerChoice + ".";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    result.innerHTML = "You lose! " + computerChoice + " beats " + humanChoice + ".";
  } else {
    result.innerHTML = "Invalid Input.";
    }
  score.innerHTML = "The Score is:\nYou: " + humanScore + " Computer: " + computerScore;
  break;
  }
  if(humanScore == 5 || computerScore == 5) {
    displayWinner();
  }
}

function displayWinner(){
  if(humanScore == 5) {
    winner.innerHTML = "You Win!";
  } else {
    winner.innerHTML = "Computer Wins!";
  }
}

let humanScore = 0;
let computerScore = 0;


button1 = document.getElementById("btn1");
button2 = document.getElementById("btn2");
button3 = document.getElementById("btn3");

button1.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
})
button2.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
})
button3.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
})

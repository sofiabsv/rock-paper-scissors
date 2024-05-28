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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a Tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You win! " + humanChoice + " beats " + computerChoice + ".";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    return "You lose! " + computerChoice + " beats " + humanChoice + ".";
  } else {
    return "Invalid Input.";
  }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  let round = 1;
  for (i = 0; i < 5; i++) {
    console.log("Round: " + round);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log(
      "The Score is:\nYou: " + humanScore + " Computer: " + computerScore
    );
    round++;
  }
}

console.log(playGame());

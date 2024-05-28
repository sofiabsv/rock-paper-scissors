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

console.log(getComputerChoice());

function getHumanChoice() {
  let choice = prompt("Please choose rock, paper or scissors.");

  if (choice == "rock") {
    return "You chose rock.";
  } else if (choice == "paper") {
    return "You chose paper.";
  } else if (choice == "scissors") {
    return "You chose scissors";
  } else {
    return "Invalid Input.";
  }
}

console.log(getHumanChoice());

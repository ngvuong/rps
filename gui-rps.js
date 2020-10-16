let pWins = 0;
let cWins = 0;
let ties = 0;
const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".choices button");

buttons.forEach((btn) => btn.addEventListener("click", playGame));

function playGame() {
  res = playRound(this.value);
  if (!res) {
    ties++;
  } else if (res == 1) pWins++;
  else cWins++;
  result.innerHTML += `<br>Player wins: ${pWins} | Computer wins: ${cWins} | Ties:  ${ties}`;

  if (pWins == 5) {
    result.textContent = `Player is the winner! ${pWins} to ${cWins} with ${ties} ties`;
    pWins = cWins = ties = 0;
  } else if (cWins == 5) {
    result.textContent = `Computer is the winner! ${cWins} to ${pWins} with ${ties} ties`;
    pWins = cWins = ties = 0;
  }
}

// Function playRound() to play 1 round of rps: takes in playerSelection and computerSelection
// Modified for playing using UI
function playRound(
  playerSelection = "default",
  computerSelection = computerPlay()
) {
  let player = playerSelection;
  const computer = computerSelection;

  // check all player win conditions, player loses otherwise
  if (player == computer) {
    result.textContent = `It's a tie!`;
    return 0;
  } else if (
    (player == "rock" && computer == "scissors") ||
    (player == "paper" && computer == "rock") ||
    (player == "scissors" && computer == "paper")
  ) {
    result.textContent = `Player wins! ${player} beats ${computer}`;
    return 1;
  } else {
    result.textContent = `Computer wins! ${computer} beats ${player}`;
    return 2;
  }
}

// Function computerPlay() for random selection: rock, paper, or scissors
function computerPlay() {
  switch (
    Math.floor(Math.random() * 3) //Random int from scaling for 3 choices
  ) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      alert("Something went wrong!");
  }
}

const round = document.querySelector("#round");
const wins = document.querySelector("#wins");
const losses = document.querySelector("#losses");
const ties = document.querySelector("#ties");
const buttons = document.querySelectorAll(".button");
const message1 = document.querySelector("#message1");
const message2 = document.querySelector("#message2");

playGame();
resetGame();

function resetGame() {
  roundCounter = 1;
  winCounter = 0;
  lossCounter = 0;
  tieCounter = 0;
  displayScore();
}

function displayScore() {
  round.textContent = `Round: ${roundCounter}`;
  wins.textContent = `Wins: ${winCounter}`;
  losses.textContent = `Losses: ${lossCounter}`;
  ties.textContent = `Ties: ${tieCounter}`;
}

function playGame() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      lastRoundResult = playRound(button.id)
      roundResult(lastRoundResult);
    });
  });
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerMove();
  let roundResult;

  if (playerSelection === "rock"){
    if (computerSelection === "rock"){
      message1.textContent = "You both picked rock."; 
      message2.textContent = "This round is a tie.";
      roundResult = "tie";
    } else if (computerSelection === "scissors"){
      message1.textContent = "You picked rock and the computer picked scissors."
      message2.textContent = "You win this round.";
      roundResult = "win";
    } else {
      message1.textContent = "You picked rock and the computer picked paper.";
      message2.textContent = "You lose this round.";
      roundResult = "loss";
    }
  } else if (playerSelection === "paper"){
    if (computerSelection === "paper"){
      message1.textContent = "You both picked paper.";
      message2.textContent = "This round is a tie.";
      roundResult = "tie";
    } else if (computerSelection === "rock"){
      message1.textContent = "You picked paper and the computer picked rock.";
      message2.textContent = "You win this round.";
      roundResult = "win";
    } else {
      message1.textContent = "You picked paper and the computer picked scissors.";
      message2.textContent = "You lose this round.";
      roundResult = "loss";
    }
  } else {
    if (computerSelection === "scissors"){
      message1.textContent = "You both picked scissors.";
      message2.textContent = "This round is a tie.";
      roundResult = "tie";
    } else if (computerSelection === "paper"){
      message1.textContent = "You picked scissors and the computer picked paper.";
      message2.textContent = "You win this round.";
      roundResult = "win";
    } else {
      message1.textContent = "You picked scissors and the computer picked rock.";
      message2.textContent = "You lose this round.";
      roundResult = "loss";
    }
  }
  return roundResult;
}

function computerMove() {
  const choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function roundResult (roundResult) {
  if (roundResult === "win"){
    winCounter++;
  } else if (roundResult === "loss"){
    lossCounter++;
  } else {
    tieCounter++;
  }
  roundCounter++;

  if (roundCounter >=6) {
    endGame();
  }
  displayScore();
}

function endGame() {
  if (winCounter === lossCounter){
    message1.textContent = `FINISH!`;
    message2.textContent = `It's a tie game.`;
  } else if (winCounter > lossCounter){
    message1.textContent = `FINISH!`; 
    message2.textContent = `Congratulations, you beat the computer!`;
  } else {
    message1.textContent = `FINISH!`
    message2.textContent = `Too bad, you lost to the computer.`
  }
  resetGame();
}


let roundCounter = 0;
let winCounter = 0;
let lossCounter = 0;
let tieCounter = 0;
const round = document.querySelector("#round");
const wins = document.querySelector("#wins");
const losses = document.querySelector("#losses");
const ties = document.querySelector("#ties");

resetGame();

function resetGame() {
  roundCounter = 0;
  winCounter = 0;
  lossCounter = 0;
  tieCounter = 0;
  playGame();
}

function playGame() {
  const buttons = document.querySelectorAll(".button");

  if (roundCounter < 5) {
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        lastRoundResult = playRound(button.id)
        displayRoundResult(lastRoundResult);
      });
    });
  } else {
    endGame();
    console.log("Running end");
  }
}

function computerMove() {
  const choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerMove();
  let roundResult;
  const message1 = document.querySelector("#message1");
  const message2 = document.querySelector("#message2");

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

function displayRoundResult (roundResult) {
  if (roundResult === "win"){
    winCounter++;
  } else if (roundResult === "loss"){
    lossCounter++;
  } else {
    tieCounter++;
  }
  roundCounter++;

  round.textContent = `Round: ${roundCounter}`;
  wins.textContent = `Wins: ${winCounter}`;
  losses.textContent = `Losses: ${lossCounter}`;
  ties.textContent = `Ties: ${tieCounter}`;
}

function endGame() {
  if (winCounter === lossCounter){
    console.log(`FINISH! It's a tie game. The score was: Wins: ${winCounter}. Losses: ${lossCounter}. Ties: ${tieCounter}.`);
  } else if (winCounter > lossCounter){
    console.log(`FINISH! Congratulations, you beat the computer! The score was: Wins: ${winCounter}. Losses: ${lossCounter}. Ties: ${tieCounter}.`);
  } else {
    console.log(`FINISH! Too bad, you lost to the computer. The score was: Wins: ${winCounter}. Losses: ${lossCounter}. Ties: ${tieCounter}.`);
  }
  resetGame();
}


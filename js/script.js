// game();
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id)
  });
});

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

/*
function game(lastRoundResult) {

  let winCounter = 0;
  let lossCounter = 0;
  let tieCounter = 0;

  for (let i = 0; i < 5; i++) {
    lastRoundResult = playRound();
    if (lastRoundResult === "win"){
      winCounter++;
    } else if (lastRoundResult === "loss"){
      lossCounter++;
    } else {
      tieCounter++;
    }
    console.log(`Wins: ${winCounter}. Losses: ${lossCounter}. Ties: ${tieCounter}.`);
  }

  if (winCounter === lossCounter){
    console.log(`FINISH! It's a tie game. The score was: Wins: ${winCounter}. Losses: ${lossCounter}. Ties: ${tieCounter}.`);
  } else if (winCounter > lossCounter){
    console.log(`FINISH! Congratulations, you beat the computer! The score was: Wins: ${winCounter}. Losses: ${lossCounter}. Ties: ${tieCounter}.`);
  } else {
    console.log(`FINISH! Too bad, you lost to the computer. The score was: Wins: ${winCounter}. Losses: ${lossCounter}. Ties: ${tieCounter}.`);
  }
}
*/

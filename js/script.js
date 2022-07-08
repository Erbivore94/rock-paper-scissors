game();

function playerMove () {
  let playerInput = prompt("Make your move!");
  playerInput = playerInput.toLowerCase();

  if (!(playerInput === "rock" || playerInput === "paper" || playerInput === "scissors")){
    playerMove();
  } else {
    return playerInput;
  }
}

function computerMove() {
  const choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerMove();
  computerSelection = computerMove();
  let roundResult;

  if (playerSelection === "rock"){
    if (computerSelection === "rock"){
      console.log("You both picked rock. This round is a tie.");
      roundResult = "tie";
    } else if (computerSelection === "scissors"){
      console.log("You picked rock and they picked scissors. You win this round.");
      roundResult = "win";
    } else {
      console.log("You picked rock and they picked paper. You lose this round.");
      roundResult = "loss";
    }
  } else if (playerSelection === "paper"){
    if (computerSelection === "paper"){
      console.log("You both picked paper. This round is a tie.");
      roundResult = "tie";
    } else if (computerSelection === "rock"){
      console.log("You picked paper and they picked rock. You win this round.");
      roundResult = "win";
    } else {
      console.log("You picked paper and they picked scissors. You lose this round.");
      roundResult = "loss";
    }
  } else {
    if (computerSelection === "scissors"){
      console.log("You both picked scissors. This round is a tie.");
      roundResult = "tie";
    } else if (computerSelection === "paper"){
      console.log("You picked scissors and they picked paper. You win this round.");
      roundResult = "win";
    } else {
      console.log("You picked scissors and they picked rock. You lose this round.");
      roundResult = "loss";
    }
  }
  
  return roundResult;
}

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
/*
-----PROBLEM-----
computerPlay(): 
  randomly returns either rock, paper, or scissors.
  show result in with console.log().

playRound(playerSelection, computerSelection): 
  plays single round of game.
  returns string that declares winner of round (e.g. "You lose, paper beats rock").
  playerSelection should be case-insensitive
  **RETURN the results of this function call, not console.log() them.

    function playRound(playerSelection, computerSelection) {
      // your code here!
    }

    const playerSelection = "rock";
    const computerSelection = computerPlay()
    ***console.log(playRound(playerSelection, computerSelection));

game():
  calls playRound() to play a 5 round game that keeps score and reports a wineer or loser at the end.
  Use for loop.
  Use console.log() to display the results here.
  Use prompt() to get input from the user.

    for (let i = 0; i < 5; i++) {
    // your code here!
    }

-----ALGORITHM-----
 XXX  Run computerPlay() function to determine random computer selection

Collect player input to determine player selection, using prompt()

Enter these two selections as parameters in playRound() function.
  playRound() RETURNS winner of round and also returns a string indicating the winner of the round in the console.
playRound is called by game(), which runs 5 games, keeping score and reporting a winner or loser at the end (using console.log())
    playRound returns the winner/loser score so it can be used in game()
*/

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
  console.log(playerSelection = playerMove());
  console.log(computerSelection = computerMove());

  if (playerSelection === "rock"){
    if (computerSelection === "rock")
      {
        console.log("You both picked rock. This round is a tie.");
      } else if (computerSelection === "scissors"){
          console.log("You picked rock and they picked scissors. You win this round.");
        } else {
            console.log("You picked rock and they picked paper. You lose this round.");
          }
  } else if (playerSelection === "paper"){
      if (computerSelection === "paper")
        {
          console.log("You both picked paper. This round is a tie.");
        } else if (computerSelection === "rock"){
            console.log("You picked paper and they picked rock. You win this round.");
          } else {
              console.log("You picked paper and they picked scissors. You lose this round.");
            }
    } else {
        if (computerSelection === "scissors")
        {
          console.log("You both picked scissors. This round is a tie.");
        } else if (computerSelection === "paper"){
            console.log("You picked scissors and they picked paper. You win this round.");
          } else {
              console.log("You picked scissors and they picked rock. You lose this round.");
            }
      }
}

function game() {

}

playRound();
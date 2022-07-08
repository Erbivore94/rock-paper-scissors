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

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}






computerPlay();
console.log(computerPlay());
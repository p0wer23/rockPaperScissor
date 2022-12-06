//returns rock, paper or scissor randomly.
function getComputerChoice()
{
    let choices=["Rock", "Paper", "Scissor"];

    return choices[Math.floor(Math.random()*3)];
}

//one round is played winner is returned
function game()
{
    const playerSelection = prompt("Enter Your Choice: 'Rock', 'Paper' or 'Scissor'").toLowerCase().trim();
    const computerSelection = getComputerChoice().toLowerCase();

    if (playerSelection === computerSelection)
        return 'none';
    if ( (playerSelection==='rock' && computerSelection==='scissor') || (playerSelection==='paper' && computerSelection==='rock') || (playerSelection==='scissor' && computerSelection==='paper') )
        return 'player';
    return 'computer';
}



let playerScore = 0;
let computerScore = 0;

for (let i=0; i<5; i++)
{

    let result = game();
    if (result==='player')
        playerScore++;
    else if (result==='computer')
        computerScore++;

}
  
if (playerScore > computerScore)
    alert(`Congratulations!!! You win by ${playerScore} : ${computerScore}.`);
else if (computerScore > playerScore)
    alert(`You lose. Computer wins by ${computerScore} : ${playerScore}.`);
else
    alert(`So cloose. Its a tie. Score: ${computerScore} : ${playerScore}.`)
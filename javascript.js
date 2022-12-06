//returns rock, paper or scissor randomly.
function getComputerChoice()
{
    let choices=["Rock", "Paper", "Scissor"];

    return choices[Math.floor(Math.random()*3)];
}

//returns the winner 'player', 'computer' or 'none'
function checkWinner(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
        return 'none';
    if ( (playerSelection==='rock' && computerSelection==='scissor') || (playerSelection==='paper' && computerSelection==='rock') || (playerSelection==='scissor' && computerSelection==='paper') )
        return 'player';
    return 'computer';
}

//player chooses
const playerSelection = prompt("Enter Your Choice: 'Rock', 'Paper' or 'Scissor'").toLowerCase().trim();

//computer chooses
const computerSelection = getComputerChoice().toLowerCase();

//checking result
let result = checkWinner(playerSelection, computerSelection)


alert(playerSelection + computerSelection + result);  
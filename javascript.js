const btns = Array.from(document.querySelectorAll('button'));
let playerScore = 0;
let computerScore = 0;

//Identifies when buttons are clicked
btns.forEach( (btn) => {btn.addEventListener('click',(e) => playRound(e.target.textContent.toLowerCase()));} );

//returns rock, paper or scissor randomly.
function getComputerChoice()
{
    let choices=["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random()*3)];
}

//one round is played
function playRound(playerSelection)
{
    const computerSelection = getComputerChoice().toLowerCase();
    winner = returnWinner(playerSelection, computerSelection);

    if (winner==='player')
        playerScore++;
    else if (winner==='computer')
        computerScore++;
    update(playerSelection, computerSelection, winner, playerScore, computerScore);

    if (playerScore===5)
        console.log('Player Wins');
    else if (computerScore==5)
        console.log('Computer Wins')
}

function update(playerSelection, computerSelection, winner, playerScore, computerScore)
{
    console.log(playerSelection, computerSelection, winner, playerScore, computerScore);
}


//winner is returned
function returnWinner(playerSelection,computerSelection)
{
    if (playerSelection === computerSelection)
        return 'none';
    if ( (playerSelection==='rock' && computerSelection==='scissor') || (playerSelection==='paper' && computerSelection==='rock') || (playerSelection==='scissor' && computerSelection==='paper') )
        return 'player';
    return 'computer';
}
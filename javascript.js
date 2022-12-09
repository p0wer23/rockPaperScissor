const btns = Array.from(document.querySelectorAll('.selection > button'));
let playerScore = 0;
let computerScore = 0;
let round = 0;

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
    round++;
    update(playerSelection, computerSelection, winner, playerScore, computerScore, round);

    if (playerScore===5)
        declareWinner('Player');
    else if (computerScore==5)
        declareWinner('Computer');
}

//Updates the current round choices, winner and score.
function update(playerSelection, computerSelection, winner, playerScore, computerScore, round)
{
    const roundPara = document.querySelector(".round")
    const playerChoicePara = document.querySelector(".playerChoice");
    const computerChoicePara = document.querySelector(".computerChoice");
    const winnerPara = document.querySelector(".winner");
    const playerScorePara = document.querySelector(".playerScore");
    const computerScorePara = document.querySelector(".computerScore");

    roundPara.textContent = `Round = ${round}`;
    playerChoicePara.textContent = `Player Chooses = ${playerSelection}`;
    computerChoicePara.textContent = `Computer Chooses = ${computerSelection}`;
    winnerPara.textContent = `Winner of this round: ${winner}`;
    playerScorePara.textContent = `Player Scoore: ${playerScore}`;
    computerScorePara.textContent = `Computer Score: ${computerScore}`;
}

//winner is returned
function returnWinner(playerSelection,computerSelection)
{
    if (playerSelection === computerSelection)
        return 'tie';
    if ( (playerSelection==='rock' && computerSelection==='scissor') || (playerSelection==='paper' && computerSelection==='rock') || (playerSelection==='scissor' && computerSelection==='paper') )
        return 'player';
    return 'computer';
}


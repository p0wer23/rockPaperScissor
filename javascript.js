const btns = Array.from(document.querySelectorAll('.selection > button'));
let playerScore = 0;
let computerScore = 0;
let round = 0;

//Identifies when buttons are clicked
btns.forEach( (btn) => {btn.addEventListener('click',(e) => playRound(e.target.textContent.toLowerCase()));} );

outcomes = {
    'rock': {'rock':'tie', 'paper':'computer', 'scissor':'player'},
    'paper': {'rock':'player', 'paper':'tie', 'scissor':'computer'},
    'scissor': {'rock':'computer', 'paper':'player', 'scissor':'tie'}
}

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
    let winner = outcomes[playerSelection][computerSelection];

    if (winner==='player')
        playerScore++;
    else if (winner==='computer')
        computerScore++;
    round++;

    updateText(playerSelection, computerSelection, winner, playerScore, computerScore, round);
    updateImages(playerSelection, computerSelection);

    if (playerScore===5)
        setTimeout(()=>{declareWinner('Player');},50);
    else if (computerScore==5)
        setTimeout(()=>{declareWinner('Computer');},50);
}

//Updates the current round choices, winner and score.
function updateText(playerSelection, computerSelection, winner, playerScore, computerScore, round)
{
    const roundPara = document.querySelector(".round");
    const playerChoicePara = document.querySelector(".playerChoice");
    const computerChoicePara = document.querySelector(".computerChoice");
    const winnerPara = document.querySelector(".winner");
    const playerScorePara = document.querySelector(".playerScore");
    const computerScorePara = document.querySelector(".computerScore");

    //Text Update
    roundPara.textContent = `Round: ${round}`;
    playerChoicePara.textContent = `Player Chooses: ${playerSelection}`;
    computerChoicePara.textContent = `Computer Chooses: ${computerSelection}`;
    winnerPara.textContent = `Winner of this round: ${winner}`;
    playerScorePara.textContent = `Player Scoore: ${playerScore}`;
    computerScorePara.textContent = `Computer Score: ${computerScore}`;
}

function updateImages(playerSelection, computerSelection)
{
    const playerChoiceImage = document.querySelector("#playerChoiceImage");
    const computerChoiceImage = document.querySelector("#computerChoiceImage");

    //Images Update
    const pimg = document.createElement('img');
    pimg.src = `./images/${playerSelection}.png`

    while(playerChoiceImage.firstChild)
        playerChoiceImage.removeChild(playerChoiceImage.firstChild);
    pimg.style.height = '100%';
    pimg.style.width = '100%';
    playerChoiceImage.appendChild(pimg);

    const cimg = document.createElement('img');
    cimg.src = `./images/${computerSelection}.png`

    while(computerChoiceImage.firstChild)
        computerChoiceImage.removeChild(computerChoiceImage.firstChild);
    cimg.style.width = '100%';
    cimg.style.height = '100%';
    computerChoiceImage.appendChild(cimg);
}

function declareWinner(winner)
{
    if (winner==='Player')
    {
        if (window.confirm('Congratulations!!!! You Won!!!\n Do you want to play again?'))
            location.reload()
        else
            document.querySelector('.winner').innerHTML=`You have won the Match`;
    }
    else
    {
        if(window.confirm('You Lost. Better Luck next time.\n Do you want to play again?'))
            location.reload()
        else
            document.querySelector('.winner').innerHTML=`Computer won the Match`;
    }

    while( document.querySelector(".selection").firstChild ) 
        document.querySelector(".selection").removeChild(document.querySelector(".selection").firstChild);
    document.querySelector('h4').innerHTML='';
}
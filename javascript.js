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
    const playerChoiceImage = document.querySelector("#playerChoiceImage");
    const computerChoiceImage = document.querySelector("#computerChoiceImage");
    console.log(playerChoiceImage)
    console.log(computerChoiceImage)

    //Text Update
    roundPara.textContent = `Round: ${round}`;
    playerChoicePara.textContent = `Player Chooses: ${playerSelection}`;
    computerChoicePara.textContent = `Computer Chooses: ${computerSelection}`;
    winnerPara.textContent = `Winner of this round: ${winner}`;
    playerScorePara.textContent = `Player Scoore: ${playerScore}`;
    computerScorePara.textContent = `Computer Score: ${computerScore}`;

    //Images Update
    const pimg = document.createElement('img');
    if (playerSelection === 'rock')
        pimg.src = './images/rock.png';
    else if (playerSelection === 'paper')
        pimg.src = './images/paper.png';
    else
        pimg.src = './images/scissor.png';
    while(playerChoiceImage.firstChild)
        playerChoiceImage.removeChild(playerChoiceImage.firstChild);
    pimg.style.height = '100%';
    pimg.style.width = '100%';
    playerChoiceImage.appendChild(pimg);

    const cimg = document.createElement('img');
    if (computerSelection === 'rock')
        cimg.src = './images/rock.png';
    else if (computerSelection === 'paper')
        cimg.src = './images/paper.png';
    else
        cimg.src = './images/scissor.png';
    while(computerChoiceImage.firstChild)
        computerChoiceImage.removeChild(computerChoiceImage.firstChild);
    cimg.style.width = '100%';
    cimg.style.height = '100%';
    computerChoiceImage.appendChild(cimg);
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

function declareWinner(winner)
{
    if (winner==='Player')
    {
        if (window.confirm('Congratulations!!!! You Won!!!\n Do you want to play again?'))
            location.reload()
        else
        {
            while( document.querySelector(".selection").firstChild ) 
                document.querySelector(".selection").removeChild(document.querySelector(".selection").firstChild);
            document.querySelector('h4').innerHTML='';
            document.querySelector('.winner').innerHTML=`You have won the Match`;
        }

    }
    else
    {
        if(window.confirm('You Lost. Better Luck next time.\n Do you want to play again?'))
            location.reload()
        else
        {
            while( document.querySelector(".selection").firstChild ) 
                document.querySelector(".selection").removeChild(document.querySelector(".selection").firstChild);
            document.querySelector('h4').innerHTML='';
            document.querySelector('.winner').innerHTML=`Compuer won the Match`;
        }
    }
}
const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore1");
const computerScore = document.getElementById("computerScore1");

let pScore = 0;
let cScore = 0;

function displayChoices(playerChoice)
{
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice)
    {
        result = "IT'S TIE!";
    }
    else
    {
        switch(playerChoice)
        {
          case "rock":
            result = (computerChoice === "scissor")?"YOU WIN!":"YOU LOSE!";
            break;
            case "paper":
            result = (computerChoice === "rock")?"YOU WIN!":"YOU LOSE!";
            break;
            case "scissor":
            result = (computerChoice === "paper")?"YOU WIN!":"YOU LOSE!";
            break;
        }
    }
    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = `${result}`;

    resultDisplay.classList.remove("greenText","redText");

    switch(result)
    {
        case "YOU WIN!":
        resultDisplay.classList.add("greenText");    
        pScore++;
        playerScore.textContent = pScore;
        break;

        case "YOU LOSE!":
        resultDisplay.classList.add("redText");      
        cScore++;
        computerScore.textContent = cScore;
        break;
    }
}
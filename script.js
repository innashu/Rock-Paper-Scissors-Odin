    function getComputerChoice() {
        const number = Math.floor(Math.random() * 3);

        if (number === 0) return "rock";
        if (number === 1) return "paper";
        if (number === 2) return "scissors";
    }

    function playGame() {

        let humanScore = 0;
        let computerScore = 0;

        const resultDiv = document.querySelector("#result");
        const buttons = document.querySelectorAll("button[data-choice]");
        const scoreDiv = document.querySelector("#score");

        function playRound(humanChoice, computerChoice) {
            let message = "";
        
            if (humanChoice === "rock" && computerChoice === "scissors") {
                humanScore++;
                return "You Win! Rock Beats Scissors";
            } else if (humanChoice === "rock" && computerChoice === "paper") {
                computerScore++;
                return "You Lose! Paper Beats Rock";
            } else if (humanChoice === "rock" && computerChoice === "rock") {
                return "It's a Draw!";

            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                computerScore++;
                return "You Lose! Scissors Beats Paper!";
            } else if (humanChoice === "paper" && computerChoice === "rock") {
                humanScore++;
                return "You Win! Paper Beats Rock!";
            } else if (humanChoice === "paper" && computerChoice === "paper") {
                return "It's a Draw!";

            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                computerScore++;
                return "You Lose! Rock Beats Scissors!";
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                humanScore++;
                return "You Win! Scissors Beats Paper!";
            } else if (humanChoice === "scissors" && computerChoice === "scissors") {
                return "It's a Draw!";
            }

            resultDiv.textContent =
            `You chose ${humanChoice}. Computer chose ${computerChoice}. ${message}
            Score: You ${humanScore} - Computer ${computerScore}`;

            scoreDiv.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;

            if (humanScore === 5 || computerScore === 5) {
               resultDiv.textContent = humanScore === 5
                ? "You Won The Game!"
                : "You Lost the Game";

            buttons.forEach((btn) => {
                btn.disabled = true;
            });
       
        }

            buttons.forEach((button) => {
                button.addEventListener("click", () => {
                    const humanChoice = button.dataset.choice;
                    const computerChoice = getComputerChoice();
                    playRound(humanChoice, computerChoice);
         });

         playGame();
  });
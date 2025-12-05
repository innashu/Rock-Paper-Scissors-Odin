    function getComputerChoice() {
        let number = parseInt(Math.random() * 3);

        if (number === 0 ) {
            return "rock";
        } else if (number === 1) {
            return "paper"
        } else {
            return "scissors";
        }
    }

    function getHumanChoice() {
        let choice = prompt("Rock, Paper, Scissors? Choose One!");
        choice = choice.toLowerCase();

        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
    }

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    function playGame() {

        let humanScore = 0;
        let computerScore = 0;

        function playRound(humanChoice, computerChoice) {
        
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
                return "You Lose! Rock Beats Scissors!";
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                return "You Win! Scissors Beats Paper!";
            } else if (humanChoice === "scissors" && computerChoice === "scissors") {
                return "It's a Draw!";
            }

        }

            for (i = 0; i < 5; i++) {
                
            }

        }

        const human = getHumanChoice()
        const computer = getComputerChoice();

        console.log(capitalize(human));
        console.log(capitalize(computer));
        
        const result = playRound(human, computer);

        console.log(result);
        console.log(humanScore)
        console.log(computerScore);

    
    }

    
    function getComputerChoice() {
        let number = parseInt(Math.random() * 3);

        if (number === 0 ) {
            return "Rock";
        } else if (number === 1) {
            return "Paper"
        } else {
            return "Scissors";
        }
    }
        console.log(getComputerChoice());

    function getHumanChoice() {
        let choice = prompt("Rock, Paper, Scissors? Choose One!");
        choice = choice.toLowerCase();

        if (choice === "rock") {
            return "Rock";
        } else if (choice === "paper") {
            return "Paper";
        } else if (choice === "scissors") {
            return "Scissors";
        } 
    }

    console.log(getHumanChoice());




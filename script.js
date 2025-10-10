let matchInput = prompt("Enter the number of matches to play\nClick Cancel to exit the game");

if (matchInput === null) {
    window.close();
} else if (!/^\d+$/.test(matchInput)) {
    alert("Enter a valid number");
    document.location.reload();
} else {
    let match = parseInt(matchInput);
    if (match <= 0) {
        alert("Invalid Number");
        document.location.reload();
    }

    let m_count = -1;
    let user = 0;
    let computer = 0;

    document.getElementById("match").innerHTML = match;
    document.getElementById("computerScore").innerText = "0";
    document.getElementById("myScore").innerText = "0";

    function endGame() {
        if (m_count === match) {
            if (user > computer) {
                alert("User Wins!");
            } else if (user < computer) {
                alert("Computer Wins!");
            } else {
                alert("Match Draw!");
            }
            window.location.reload();
        }
    }

    function playRound(userChoice) {
        if (m_count >= match) return;

        let c = Math.floor(Math.random() * 3);
        const choices = ["rock", "paper", "scissor"];

        document.getElementById("userImage").src = `./photo/${userChoice}.jpg`;
        document.getElementById("computerImage").src = `./photo/${choices[c]}.jpg`;

        if (userChoice === choices[c]) {
            document.getElementById("result").innerHTML = "Match Draw";
            new Audio("./sound/draw.mp3").play();
        } else if (
            (userChoice === "rock" && choices[c] === "scissor") ||
            (userChoice === "paper" && choices[c] === "rock") ||
            (userChoice === "scissor" && choices[c] === "paper")
        ) {
            document.getElementById("result").innerHTML = "User Wins";
            user++;
            document.getElementById("myScore").innerText = user;
            new Audio("./sound/win.wav").play();
        } else {
            document.getElementById("result").innerHTML = "User Loss";
            computer++;
            document.getElementById("computerScore").innerText = computer;
            new Audio("./sound/loss.wav").play();
        }

        m_count++;
        endGame();
    }

    window.myFunc1 = () => playRound("rock");
    window.myFunc2 = () => playRound("paper");
    window.myFunc3 = () => playRound("scissor");
}

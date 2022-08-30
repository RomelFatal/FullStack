//generate random number
var randy;

//play again
function resetGame() {
    randy = Math.ceil(Math.random() * 99);
    
    document.getElementById("play-again").className = "hide";
    document.getElementById("submit-guess").className = "show";
    document.getElementById("game-image").src = "images/game.jpeg";
    document.getElementById("game-message").innerText = "Let's Play";
    document.getElementById("user-guess").value = "";
}

//get input
function playGame() {
    var guess = document.getElementById("user-guess").value;
    if (guess > randy) changeDisplay("high", "Your Guess Was Too High!");
    else if (guess < randy) changeDisplay("low", "You are Too Low!");
    else if (guess == randy) changeDisplay("win", "You are a Winner!");
    else changeDisplay("error", "That's Not a Number!");

    //Reset focus
    document.getElementById("user-guess").select();
}

function changeDisplay(status, message) {
    var image;

    switch(status) {
        case "high":
            image = "images/too high.jpg";
            break;
        case "low":
            image = "images/too low.jpg";
            break;
        case "win":
            image = "images/winner.jpg"
            document.getElementById("play-again").className = "show";
            document.getElementById("submit-guess").className = "hide";
            break;
        default:
            image = "images/error.jpg";
    }

    document.getElementById("game-message").innerText = message;
    document.getElementById("game-image").src = image;
}

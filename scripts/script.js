var text = "Score: ";
var scoring
var scoreEnabled = true
var score = 0;
var scoreCounter = document.getElementById("currentScore");

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", startGame);

var death = document.getElementById("death");
death.classList.add("hidden");

function startGame() {
    startButton.classList.add("hidden");
    setTimeout(sprites, 1000);
    scoring = setInterval(displayScore, 10)
}

function displayScore() {
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 0 && scoreEnabled == true) {
        scoreEnabled = false
        score += 1;
        scoreCounter.innerText = text.concat(score);
    } else if (blockLeft > 0 && scoreEnabled == false) {
        scoreEnabled = true
    }
}

function sprites() {
    document.addEventListener("click", jump);
    block.classList.add("blockmove");
}

var character = document.getElementById("character");
function jump() {
    if (character.classList == "jump"){return;}
    character.classList.add("jump");
    setTimeout(removeJump, 500);
}

function removeJump() {
    character.classList.remove("jump");
}

var block = document.getElementById("block");
function checkDead() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 50 && blockLeft > -50 && characterTop >= 380) {
        clearInterval(scoring)
        document.removeEventListener("click", jump);
        block.classList.remove("blockmove");
        death.classList.remove("hidden");
    }
}

setInterval(checkDead, 10);

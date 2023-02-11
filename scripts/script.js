var text = "Score: ";
var scoring
var scoreEnabled = true
var score = 0;
var scoreCounter = document.getElementById("currentScore");
var blockSpeed = 5000
var jumpLength = 2500

var root = document.documentElement;

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", startGame);

var death = document.getElementById("death");
death.classList.add("hidden");

var block = document.getElementById("block");

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
        changeSpeed()
    } else if (blockLeft > 0 && scoreEnabled == false) {
        scoreEnabled = true
    }
}

function changeSpeed() {
    if (score == 1) {
        blockSpeed = 4000
        jumpLength = 2000
        block.classList.remove("blockmove")
        root.style.setProperty('--jumpLength', jumpLength + "ms")
        if (blockLeft = 450) {
            root.style.setProperty('--blockSpeed', blockSpeed + "ms")
            setTimeout(function(){block.classList.add("blockmove")}, 10)
        }
    }
    if (score == 2) {
        blockSpeed = 2000
        jumpLength = 1500
        block.classList.remove("blockmove")
        root.style.setProperty('--jumpLength', jumpLength + "ms")
        if (blockLeft = 450) {
            root.style.setProperty('--blockSpeed', blockSpeed + "ms")
            setTimeout(function(){block.classList.add("blockmove")}, 10)
        }
    }
    if (score == 3) {
        blockSpeed = 1750
        jumpLength = 1500
        block.classList.remove("blockmove")
        root.style.setProperty('--jumpLength', jumpLength + "ms")
        if (blockLeft = 450) {
            root.style.setProperty('--blockSpeed', blockSpeed + "ms")
            setTimeout(function(){block.classList.add("blockmove")}, 10)
        }
    }
    if (score == 5) {
        blockSpeed = 1250
        jumpLength = 750
        block.classList.remove("blockmove")
        character.classList.remove("jump")
        root.style.setProperty('--jumpLength', jumpLength + "ms")
        character.classList.add("jump")
        if (blockLeft = 450) {
            root.style.setProperty('--blockSpeed', blockSpeed + "ms")
            setTimeout(function(){block.classList.add("blockmove")}, 10)
        }
    }
}

function sprites() {
    root.style.setProperty('--blockSpeed', blockSpeed + "ms")
    root.style.setProperty('--jumpLength', jumpLength + "ms")
    document.addEventListener("click", jump);
    block.classList.add("blockmove");
}

var character = document.getElementById("character");
function jump() {
    if (character.classList == "jump"){return;}
    character.classList.add("jump");
    setTimeout(removeJump, jumpLength);
}

function removeJump() {
    character.classList.remove("jump");
}

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

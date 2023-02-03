var character = document.getElementById("character");
document.addEventListener("click", jump);
function jump() {
    if (character.classList == "jump"){return;}
    character.classList.add("jump");
    setTimeout(removeJump, 500);
}

function removeJump() {
    character.classList.remove("jump")
}

var block = document.getElementById("block");
block.classList.add("blockmove")
function checkDead() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 50 && blockLeft > -50 && characterTop >= 380) {
        alert("Game Over!");
    }
}

setInterval(checkDead, 10)
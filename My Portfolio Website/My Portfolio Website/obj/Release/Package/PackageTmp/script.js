var character = document.getElementById('character');
character.style.backgroundColor = "#FF3030";
character.style.left = '0px';
character.style.right = '0px';
document.addEventListener('keydown', function (e) {
    console.log(e.which)
})

function moveCharacterLeft() {
    var leftNumbers = character.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)

    if (left > 0) {
        character.style.left = `${left - 1}px`
    }
}
function moveCharacterRight() {
    var rightNumbers = character.style.right.replace('px', '')
    var right = parseInt(rightNumbers, 10)

    if (right > 0) {
        character.style.right = `${right - 1}px`
    }
}
function moveCharacterUp() {
    var upNumbers = character.style.top.replace('px', '')
    var up = parseInt(upNumbers, 10)

    if (up > 0) {
        character.style.top = `${up - 1}px`
    }
}
function moveCharacterDown() {
    var downNumbers = character.style.bottom.replace('px', '')
    var down = parseInt(downNumbers, 10)

    if (down > 0) {
        character.style.bottom = `${left - 1}px`
    }
}

document.addEventListener('keydown', function (e) {
    if (e.which === 37) {
        moveDodgerLeft()
    }
})


<canvas id=


let button = document.getElementById('button');
let notification = document.querySelector('.warning')
let min = 1;
let max = 900;
let randomNum = Math.floor(Math.random() * max + min);
let Game = {
    tryes: 0,
    ifLost: false,
}

function makeGame() {
    let numField = document.getElementById('random-number').value;
    let tempOut = document.getElementById('temp-out');
    let trys = document.getElementById('trys');
    let out = document.getElementById('out');

    if (numField > randomNum) {
        Game.tryes++
        out.innerHTML = "Это число больше заданного";
        trys.innerHTML = `Ты использовал ${Game.tryes} попыток. Осталось ${20 - Game.tryes} попыток`;
    } else if (numField < randomNum) {
        Game.tryes++
        out.innerHTML = "Это число меньше заданного";
        trys.innerHTML = `Ты использовал ${Game.tryes} попыток. Осталось ${20 - Game.tryes} попыток`;
    } else {
        out.innerHTML = "Ты победил";
        trys.innerHTML = `За игру ты использовал ${Game.tryes} попыток.`
    }

    if (Game.tryes >= 20) {
        Game.ifLost = true
    }

    if (Game.ifLost === true) {
        out.innerHTML = "Ты проиграл";
        trys.innerHTML = "Ты ирасходовал все попытки";
        tempOut.innerHTML = `Правильный ответ:${randomNum}`;
    }

    if (numField > 900 || numField < 1) {
        notification.classList.toggle('move');
        Game.tryes = Game.tryes - 1
    }

}


button.addEventListener("click", function (e) {
    e.preventDefault()
    makeGame()
})

console.log(randomNum)




/*function makeGame() {
    let num = numField;
    let outInput = out.innerHTML
    if (num > randomNum) {
        Game.tryes++
        outInput = "Это число больше заданного";
        trys.innerHTML = "Это число больше заданного"
    } if (num < randomNum) {
        Game.tryes++
        outInput = "Это число меньше заданного";
        trys.innerHTML = `Ты использовал ${Game.tryes} попыток. Осталось ${20 - Game.tryes} попыток`;
    } if (num === randomNum) {
        outInput = "Ты победил";
        trys.innerHTML = `За игру ты использовал ${Game.tryes} попыток.`
    }

    if (Game.tryes >= 20) {
        Game.ifLost = true
    }
}


function mistakeInRange() {
    if (numField > 900) {
        notification.classList.toggle('move');
    }
}

function loseGame() {
    out.innerHTML = "Ты проиграл";
    trys.innerHTML = "Ты ирасходовал все попытки";
    tempOut.innerHTML = `Правильный ответ:${randomNum}`;
}

function play() {
    if (Game.ifLost === false) {
        makeGame();
        mistakeInRange();
    } else {
        loseGame();
    }
}


button.addEventListener('click', function (e) {
    e.preventDefault
    play();
})*/

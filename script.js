let button = document.getElementById('button');
let notification = document.querySelector('.warning')
let min = 1;
let max = 900;
let randomNum = Math.floor(Math.random() * max + min);
let Game = {
    tryes: 0,
    ifLost: false,
    ifWin: false,
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
        Game.ifWin = true
    }

    if(typeof(numField) === "string"){
        Game.ifLost = true
    }

    if (Game.ifWin === true) {
        out.innerHTML = "Ты победил";
        trys.innerHTML = `За игру ты использовал ${Game.tryes} попыток.`
        if (numField > randomNum || numField < randomNum) {
            Game.tryes = Game.tryes - 1;
        }

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









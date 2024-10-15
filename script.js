let butt_restart = document.querySelector("#buttonForRest") //TODO: короче когда я написал прослушку события на кнопку для рестарта перестала засчитываться победа. Надо сделать так чтобы она засчитывалась
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

    if (parseInt(numField) > randomNum) {
        Game.tryes++
        out.innerHTML = "Это число больше заданного";
        trys.innerHTML = `Ты использовал ${Game.tryes} попыток. Осталось ${20 - Game.tryes} попыток`;
    } else if (parseInt(numField) < randomNum) {
        Game.tryes++
        out.innerHTML = "Это число меньше заданного";
        trys.innerHTML = `Ты использовал ${Game.tryes} попыток. Осталось ${20 - Game.tryes} попыток`;
    } else if(parseInt(numField) === randomNum) {
        Game.ifWin = true
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
        notification.classList.add('move');
        setTimeout(function() {
            notification.classList.remove('move');
        }, 10000)
        console.log('move')
        Game.tryes = Game.tryes - 1
    }

}

button.addEventListener("click", function (e) {
    e.preventDefault()
    makeGame()
})

butt_restart.addEventListener("click", function(e) {
    e.preventDefault();
    Game.tryes = 0;
    Game.ifWin  = false;
    Game.ifLost = false;
    out.innerHTML = '';
    trys.innerHTML = '';
    tempOut.innerHTML = '';
    randomNum = Math.floor(Math.random() * max + min);
})









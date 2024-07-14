//let color1 = localStorage.getItem('color')
let buttonForNightTheme = document.querySelector(".Theme");
let bodyElements = document.querySelector(".body")
bodyElements.style.backgroundColor = localStorage.getItem('Backcolor')
bodyElements.style.color = localStorage.getItem('color')
buttonForNightTheme.style.backgroundColor = localStorage.getItem('buttBack')
buttonForNightTheme.innerHTML = localStorage.getItem('buttSymbol')
buttonForNightTheme.addEventListener('click', function (e) {
    e.preventDefault();  
    if (bodyElements.style.backgroundColor === "white") {
        bodyElements.style.backgroundColor = 'black'
        console.log(bodyElements.style.backgroundColor)
        bodyElements.style.color = 'white' 
        buttonForNightTheme.style.backgroundColor = "white"
        buttonForNightTheme.innerHTML = '&#127774'
        localStorage.setItem('Backcolor', bodyElements.style.backgroundColor)
        localStorage.setItem('color', bodyElements.style.color)
        localStorage.setItem('buttBack', buttonForNightTheme.style.backgroundColor)
        localStorage.setItem('buttSymbol', buttonForNightTheme.innerHTML)
    } else {
        bodyElements.style.backgroundColor = 'white'
        console.log(bodyElements.style.backgroundColor)
        bodyElements.style.color = "black"
        buttonForNightTheme.style.backgroundColor = "black"
        buttonForNightTheme.innerHTML = '&#127769' 
        localStorage.setItem('Backcolor', bodyElements.style.backgroundColor)  
        localStorage.setItem('color', bodyElements.style.color)
        localStorage.setItem('buttBack', buttonForNightTheme.style.backgroundColor)
        localStorage.setItem('buttSymbol', buttonForNightTheme.innerHTML)
    }
})



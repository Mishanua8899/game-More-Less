let buttonForNightTheme = document.querySelector(".Theme");
let bodyElements = document.querySelector(".body")
buttonForNightTheme.addEventListener('click', function (e) {
    e.preventDefault();
    if (bodyElements.style.backgroundColor === "white") {
        bodyElements.style.backgroundColor = "black"
        bodyElements.style.color = "white"
        buttonForNightTheme.style.backgroundColor = "white"
        buttonForNightTheme.innerHTML = '&#127774'
    } else {
        bodyElements.style.backgroundColor = "white"
        bodyElements.style.color = "black"
        buttonForNightTheme.style.backgroundColor = "black"
        buttonForNightTheme.innerHTML = '&#127769'
    }
})
let stats = document.querySelectorAll('.clash-card__unit-stats')
const color = ['#EC9B3B', '#EE5487', '#F6901A', '#82BB30', '#4FACFF']
let count

function changeStatsColor(){
    count = 0
    stats.forEach( el => {
        el.style.background = color[count++]
        el.style.color = '#FFFFFF'
        el.childNodes[5].style.color = '#FFFFFF'
    })
}

function changeCharacterName(){
    let el = document.querySelector('.clash-card__level--goblin').nextElementSibling
    el.innerText = 'The Goblin'
}

changeStatsColor()
changeCharacterName()
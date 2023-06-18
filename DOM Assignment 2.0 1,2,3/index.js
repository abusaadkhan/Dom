let ul = document.querySelector('.logo').nextElementSibling
let searchField = document.querySelector('.search-field').firstChild.nextElementSibling
let heroRightSectionBtns = document.querySelector('.hero-right-section-btns')
let heroRightSection = document.querySelector('.hero-right-section').firstChild.nextElementSibling

console.log(heroRightSection)

const  navItems = () => {
    let a = document.createElement('a')
    a.innerText = 'Projects'
    a.setAttribute('href','#')

    let li = document.createElement('li')
    li.appendChild(a)
    ul.appendChild(li)

    let a2 = document.createElement('a')
    a2.innerText = 'Hire Me'
    a2.setAttribute('href','#')

    let li2 = document.createElement('li')
    li2.appendChild(a2)
    ul.appendChild(li2)

}

navItems()

const updateSearch = () => {
    searchField.setAttribute('placeholder','search my projects')
}

updateSearch()

const addBtn = () => {
    let btn = document.createElement('button')
    btn.innerText = 'Support Me'
    heroRightSectionBtns.appendChild(btn)
}

addBtn()

const changeImage = () => {
    heroRightSection.setAttribute('src','./Capture.JPG')
}

changeImage()
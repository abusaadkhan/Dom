const addBtn = () => {
    let nav = document.querySelector('.nav-center')
    //creting btn prosubscribtion
    let proSubscription = document.createElement('div')
    let a = document.createElement('a')
    a.setAttribute('href', 'index.html')
    a.className = 'btn'
    a.innerText = 'Pro Subscription'
    proSubscription.appendChild(a)
    
    //wrapping both btns(contact & Pro subscription) in a single div, just to look better
    let div = document.createElement('div')
    let btn = document.querySelector('.nav-links').nextElementSibling
    div.appendChild(btn)
    div.appendChild(proSubscription)
    div.style.display = 'flex'
    div.style.alignItems = 'center'
    //appending div to our navbar
    nav.appendChild(div)

}
addBtn()
const addTags = () => {
    let tags = document.querySelector('.tags-container div')
    let a = document.createElement('a')
    a.setAttribute('href', '#')
    a.innerText = 'Chinese (7)'
    tags.appendChild(a)
}

addTags()

const addCard = () => {
    let recipeGallery = document.querySelector('.recipe-gallery')
    let div = document.createElement('div')
    div.className = 'card'

    let a = document.createElement('a')
    a.setAttribute('href', '#')
    a.className = 'recipe-text'

    let img = document.createElement('img')
    img.setAttribute('src', './img/recipe-1.jpeg')
    img.className = 'recipe-img'

    let h5 = document.createElement('h5')
    h5.className = 'recipe-name'
    h5.innerText = 'chinese'

    let p = document.createElement('p')
    p.className = 'recipe-disp'
    p.innerText = 'Prep : 20min | Cook : 45min'

    a.appendChild(img)
    a.appendChild(h5)
    a.appendChild(p)
    div.appendChild(a)
    recipeGallery.appendChild(div)
    


}
addCard()

const renameFooter = () => {
    let footerA = document.querySelector('.footer-logo').nextElementSibling
    footerA.innerText = 'abusaad'
    
}
renameFooter()


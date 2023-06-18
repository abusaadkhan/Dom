const changeLogo = () => {
    let logo = document.querySelector('header img')
    logo.setAttribute('src', './assets/ineuron-logo.png')
    logo.style.width = '400px'
    
}
changeLogo()
//not working properly to be asked
const reduceTopimg = () => {
    let div = document.querySelector('.top_img')
    div.style.display = 'block'
    div.style.position = 'absolute'
    // div.style.
    
    let img = document.querySelector('.top_img img')
    img.style.width = '40px'
    console.log(div);
}
//reduceTopimg()

const changeLayout = () => {
    let header = document.querySelector('header')
    header.style.width = '80%'
    header.style.margin = 'auto'

    let hero = document.querySelector('.hero')
    hero.style.width = '80%'
    hero.style.margin = 'auto'
 
    let app = document.querySelector('.app')
    app.style.width = '80%'
    app.style.margin = 'auto'   

    let footer = document.querySelector('footer')
    footer.style.width = '80%'
    footer.style.marginLeft = 'auto'
    footer.style.marginRight = 'auto'
}
changeLayout()

const reduceHeadings = () => {
    let h1 = document.querySelector('.hero h1')
    h1.style.fontSize = '60px'

    let p = document.querySelector('.hero p')
    p.style.fontSize = '17px'
}
reduceHeadings()

const changeApp = () => {
    let mobImg = document.querySelector('.Ilustration app')
    // mobImg.style.width = '10px'
    let appInfo = document.querySelector('.app_info')
    appInfo.style.width = '300px'
}
changeApp()
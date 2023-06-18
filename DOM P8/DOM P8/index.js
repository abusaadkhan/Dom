//Task 3 
const navToggle = () => {
    let nav = document.querySelector('.collapse')
    let btn = document.querySelector('.navbar-toggler')
   
    btn.addEventListener('click',() => {
        
        if(nav.style.display == ''){
            nav.style.display = 'block'
        }
        else{
            nav.style.display = ''

        }
    })
}
navToggle()

//Task 2 removing background image
const removeBackgroundImage = () => {
    document.querySelector('body').style.backgroundImage = 'none'
} 
removeBackgroundImage()

//Task 1 adding overflowy and border to aside 
const changeAside = () => {
    let aside = document.querySelector('aside')
    aside.style.border = '2px solid red'

    let hr = document.createElement('hr')
    hr.className = 'hr-line'

    let h2 = document.createElement('h2')
    h2.className = 'new-head'
    h2.textContent = 'New Heading'

    let p = document.createElement('p')
    p.className = 'new-p'
    p.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero reiciendis ab aut!'

    aside.appendChild(hr)
    aside.appendChild(h2)
    aside.appendChild(p)

    aside.style.overflowY = 'auto'
    // aside.style.boxShadow = '0 0 0 10px #f3f5f6 inset'
    // aside.style.boxSizing =  'border-box'

//    let div = document.createElement('div')
//    div
}
changeAside()
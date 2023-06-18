//Task 1
const changeTitle = () => {
    let title = document.querySelector('.caption h1')
    title.style.color = ' rgb(195 45 45)'
}
changeTitle()
//Task 2 
const changeButtonColor = () => {
    let btn = document.querySelector('.add-to-cart')
    btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = 'rgb(195 45 45)'
    })
    btn.addEventListener('mouseleave', () => {
        btn.style.backgroundColor = 'hsl(158, 36%, 37%)'
    })
    console.log(btn);
}
changeButtonColor()
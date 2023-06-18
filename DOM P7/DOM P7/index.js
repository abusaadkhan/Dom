let courses = document.querySelector('.main__languages')
let lang = [...document.querySelectorAll('.main__languages a')]

let removeFlag = false

const removeLanguage = () => {
       // e.preventDefault()
        
        lang.forEach(e => {
            if(e.innerText.includes('2.0')){
                courses.removeChild(e)
            }
        })
}

const removelanguage2 = () =>  {
 
    if(removeFlag === false){
        removeLanguage()
       
    }
    else{
        
        lang.forEach(e=>{
            courses.append(e)
        })
    }
    
}
   
removelanguage2()


const editForm = () => {
    
    let input = document.querySelector('.main__form-input')
    let inputBtn = document.querySelector('.main__form-btn')
    input.disabled = false
    inputBtn.disabled = false

    inputBtn.addEventListener('click', (e) => {
        e.preventDefault()
        
        removeFlag = true
       
        removelanguage2()
        
    })
    
}
editForm()
 







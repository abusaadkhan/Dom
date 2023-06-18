let form =[...document.querySelector('.mainLeftDetails')] 
let rightForm = [...document.querySelector('.mainRight form')]
const newPlaceholder = ['FSJS 2.0', 'fsjs@iinueron.ai', 'Hello world']
let count;

function changePlaceholder(form){
    count = 0;
    form.forEach( el => {
        if(el.tagName !== 'BUTTON'){
            el.placeholder = newPlaceholder[count++]
        }
    })
}

changePlaceholder(form)
changePlaceholder(rightForm)

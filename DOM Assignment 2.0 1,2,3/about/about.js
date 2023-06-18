let accordianWrapper = document.querySelector('.accordian-wrapper');
addChild()
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// Task 1 sol
accordian.forEach( el => {
  el.style.background = 'grey'
})

//Task 2 sol , this function is called at top
function addChild(){
  let el = document.createElement('div');
  el.className = 'accordian';
  let h3 = document.createElement('h3');
  h3.innerText = 'skills'
  let p = document.createElement('p');
  p.innerText = 'I posses a very good comand over the Full Stack Development technologies like mern  which can be seen in my work over the github.';
  el.appendChild(h3);
  el.appendChild(p);
  accordianWrapper.appendChild(el)
}




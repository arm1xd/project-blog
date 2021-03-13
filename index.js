const menuBurger = document.querySelector('.menu__burger');
const navMain = document.querySelector('.blog__navigation');

let inputHeader = document.querySelector('.post__header-input');
let inputDescription = document.querySelector('.post__description-input');
let blogContent = document.querySelector('.section__post');
const createButton = document.querySelector('.post__create-button');

createButton.addEventListener('click',(Event)=>{
Event.preventDefault();


blogContent.innerHTML += ` 
<div>
        <h3 class="jojo">${inputHeader.value}</h3> 
        <p class="jojo">${inputDescription.value}</p>  
        <p class="jojo">${new Date()} </p>
</div>     `


    inputHeader.value =''
    inputDescription.value =''

    console.log(inputHeader.style.color = 'red')
})

menuBurger.addEventListener('click', (Event) => {
    navMain.classList.toggle('visible');
});
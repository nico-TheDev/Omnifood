const button1 = document.querySelector('.burger');
const menu = document.querySelector('.mobilenav__list');

button1.addEventListener('click',()=>{
    menu.classList.toggle('open');
});


const button2 = document.querySelector('.burger1');
const menu1 = document.querySelector('.mobilenav__list2')


button2.addEventListener('click',()=>{
    menu1.classList.toggle('open');
});


const element = document.querySelector(`#element`);
const form = document.querySelector(`#form`);
form.addEventListener(`submit`, e=>{
    e.preventDefault();
    element.style.backgroundColor=document.querySelector(`#color`).value;
    let figureForm = document.querySelector(`#select`).value;
    element.setAttribute(`class`, `${figureForm}`);
})
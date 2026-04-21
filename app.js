console.log("Hola desde la funcion de Ana")
console.log("hola desde la funcion de Gerson");

console.log("hola desde la funcion de fran");




let cards = document.querySelectorAll('.card'); 
let btn = document.querySelector('button');

btn.addEventListener("click", e => {
    
    cards.forEach(card => {
        card.style.background = 'blue';
    });
});

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");

const mensaje1 = document.getElementById("mensaje1");
const mensaje2 = document.getElementById("mensaje2");


boton1.addEventListener("click", function () {

    mensaje1.style.color = "red";
    mensaje1.textContent = 
    "Has pulsado el botón de Sobre mí";
    

});


boton2.addEventListener("click", function () {

    mensaje2.style.color = "blue";
    mensaje2.textContent =
    "Has pulsado el botón de Objetivos";

});

const modo = document.getElementById("modo");

modo.addEventListener("click", function () {

    document.body.classList.toggle("claro");

});

modo.textContent = "Modo oscuro";
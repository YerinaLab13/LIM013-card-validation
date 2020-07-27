import validator from './validator.js';
//console.log(validator);

// Pantalla 1- Inicio
const show = () => {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("datos").style.display = "block";
}
document.getElementById("boton").addEventListener("click", show);

//Pantalla 2 - Datos - traer el valor de tarjeta para validfación

//document.getElementById("send").addEventListener("click", (event)=>{
//event.preventDefault()

const send = document.getElementById("send");
send.addEventListener("click", (event) => {
    event.preventDefault()
    let name = document.getElementById("name").value;
    if (name.length == "") {
        document.getElementById("noName").innerHTML = `Campo obligatorio`;
    }
    let numberCard = document.getElementById("numberCard").value;
    if (numberCard.length == "") {
        document.getElementById("noCard").innerHTML = `Ingrese el número de tarjeta`;
    }

    // Pantalla 3- Resultados de validación

    let result = validator.isValid(numberCard);
      //console.log(result);
    let mask = validator.maskify(numberCard);
      //console.log(mask)

    let cardValid = document.getElementById("validación");
    let michis = document.getElementById("michis");
    let cardNoValid = document.getElementById("tarjetaNoValida");

    if (result == true) {
        cardValid.innerHTML = `<p> Tarjeta válida </p>`;
        michis.innerHTML = (mask);
        document.getElementById("datos").style.display = "none";
        document.getElementById("tarjeta válida").style.display = "block";
    }
    else {
        cardNoValid.innerHTML = `<p> Número de tarjeta no válida, por favor ingrese nuevamente el número de tarjeta</p>`;
    }

})
//pantalla 4- Compra Exitosa

const show4 = () => {
    document.getElementById("tarjeta válida").style.display = "none";
    document.getElementById("compraExitosa").style.display = "block";
}
document.getElementById("buy").addEventListener("click", show4);
const compra = document.getElementById("compraExitosa");
compra.innerHTML = `Gracias! tu Compra ha sido realizada con éxito`;







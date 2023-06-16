console.log(document.getElementById("nombreapellido"))
console.log(document.getElementById("correoelectronico"))


const $BOTON = document.getElementById("envioconfirmado")
$BOTON.onsubmit = enviado
// onclick no permite verificar que el formulario haya sido llenado, onsubmit sí, pero la alerta de la función abajo no se muestra


//if click on Enviar,
//then Thank you image
//or at least a message

//function enviado(){ 
    //console.log("¡Nos pondremos en contacto contigo!")
    //document.getElementById("retroalimentacion").innerHTML = "¡Nos pondremos en contacto contigo!"

    //const $IMAGENBRILLO = document.getElementsByClassName("gracias")

    //document.getElementsByClassName("gracias").style.filter= brightness(125%)
    //$IMAGENBRILLO.style.filter = brightness(125%)
//}


function enviado(event){
    event.preventDefault()
    //const $USERNAME = document.querySelector("nombreapellido").value
    //const $EMAIL = document.querySelector("correoelectronico").value
    //const $TEL = document.querySelector("telefono").value
    //const $MESSAGE = document.querySelector("mensaje").value
    //console.log("Nombre y apellido", $USERNAME)
    //console.log("Correo", $EMAIL)
    //console.log("Teléfono", $TEL)
    //console.log("Mensaje", $MESSAGE)
    //La declaración de variables y orden de mensajes anteriores no parece tener efecto sobre el mostrado de la alerta.
    alert("¡Nos pondremos en contacto contigo!")
}
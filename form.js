console.log(document.getElementById("nombreapellido"))
console.log(document.getElementById("correoelectronico"))


const $BOTON = document.getElementById("envioconfirmado")
$BOTON.onclick = enviado

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
    alert("¡Nos pondremos en contacto contigo!")
}
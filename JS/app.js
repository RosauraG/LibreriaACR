const $BOTON = document.getElementById("dark-mode")
$BOTON.onclick = dark

function dark () {
    const $BODY = document.body
    $BODY.classList.toggle("dark-theme")
}
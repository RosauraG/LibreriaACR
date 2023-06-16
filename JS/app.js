console.log("funciona")

console.log(document)
console.log(document.title)
console.log(document.links)

console.log(document.getElementsByClassName)
console.log(document.getElementById)

const $ELEMENTO = document.querySelector("a")

if ($ELEMENTO.hasAttribute("href")) {
    $ELEMENTO.removeAttribute("href")
    console.log("Atributo eliminado")

    console.log($ELEMENTO.style.backgroundColor)
    $ELEMENTO.style.backgroundColor = "green"
    $ELEMENTO.style.color = "white"
    console.log($ELEMENTO.style.)
}

function dark() {
    const $DARK = document.body
    $DARK.getElementsByTagName("body")
}
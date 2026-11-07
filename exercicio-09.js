

while (true) {
    let numero = prompt("introduza um numero para verificar se e um numero palindromo:")

    let numeros = numero.split("")
    numeros.reverse()
    if ((numeros.join("")) === numero) {
        alert("palindromo")
    } else {
        alert("nao e um palindromo!")
    }
}

let frase = prompt("introduza uma frase:")
let resultado = ""

for (let i = 0; i <frase.length; i++) {
    if (i % 2 === 0) {
        resultado += frase[i].toUpperCase()
    } else {
        resultado += frase[i].toLowerCase()
    }
}
console.log(resultado)
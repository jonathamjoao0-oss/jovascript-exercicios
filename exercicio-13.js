let palavra = prompt("introduza uma palavra para verificar a sua inversa:")
let letras = palavra.split("")
let reverso=""
letras.reverse()
letras.forEach(letd=> {
   reverso+=letd
});
alert(reverso)
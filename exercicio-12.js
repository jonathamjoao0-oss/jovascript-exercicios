let texto = prompt("digite um texto:")
let palavras = texto.split(" ")
palavras.sort()
let resultado = palavras.join(" ")
document.write(resultado)


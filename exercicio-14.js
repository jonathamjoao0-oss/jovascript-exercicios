let palavra=prompt("introduza um palavra:")
let resultado=palavra.replaceAll(/[aeiouãõáúóéôêâ]/gi,"")
console.log(resultado)
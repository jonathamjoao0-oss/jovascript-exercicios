let palavra = prompt("Digite uma palavra:");

let resultado = [];

for (let i = 0; i < 5; i++) {

    let novaPalavra = "";

    for (let j = palavra.length - 1; j >= 0; j--) {
        novaPalavra += palavra[j];
    }

    resultado.push(novaPalavra);

    palavra = palavra.slice(1) + palavra[0];
}

document.write(resultado.join("<br>"));
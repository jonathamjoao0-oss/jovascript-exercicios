let numeros = [];

for (let i = 0; i < 15; i++) {

    let numero = Number(prompt("Digite o número " + (i + 1)));

    numeros.push(numero);
}

let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {

    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

if (maior !== 0) {

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = numeros[i] / maior;
    }

    document.write("Vetor resultante: " + numeros);

} else {
    document.write("Não é possível dividir por zero.");
}
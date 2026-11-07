let primos = 0;
let neutros = 0;
let somaNegativos = 0;

let anterior = null;
let repeticoes = 0;

while (true) {

    let numero = Number(prompt("Digite um número:"));

    if (numero === 0) {
        neutros++;
    }

    if (numero < 0) {
        somaNegativos++;

        if (numero === anterior) {
            repeticoes++;
        } else {
            repeticoes = 1;
        }

        anterior = numero;

    } else {
        anterior = null;
        repeticoes = 0;
    }

    if (numero > 1) {
        let primo = true;

        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                primo = false;
                break;
            }
        }

        if (primo) {
            primos++;
        }
    }

    if (repeticoes === 3) {
        break;
    }
}

document.write("Primos: " + primos);
document.write("<br>Quíntuplo dos neutros: " + (neutros * 5));
document.write("<br>Soma dos negativos: " + somaNegativos);
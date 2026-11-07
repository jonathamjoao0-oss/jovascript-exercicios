let nome = prompt("Digite um nome:");

let vogais = "aeiouAEIOU";
let quantidade = 0;
let resultado = "";

for (let i = 0; i < nome.length; i++) {

    if (vogais.includes(nome[i])) {
        quantidade++;
        resultado += "<u>" + nome[i] + "</u>";
    } else {
        resultado += nome[i];
    }
}

document.write("Nome: " + resultado);
document.write("<br>Quantidade de vogais: " + quantidade);
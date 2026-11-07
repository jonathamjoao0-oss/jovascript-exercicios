let frase = prompt("Digite uma frase:");

let palavras = frase.split(" ");

for (let i = 0; i < 5; i++) {

    let primeira = palavras.shift();

    palavras.push(primeira);

    document.write(palavras.join(" ") + "<br>");
}
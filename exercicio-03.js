let numero = prompt("digite varios numeros separados por ; :")
let numeros =numero.split(";")
let soma = 0
let fatorial=1
for (i=0;i<numeros.length;i++){
    soma+=Number(numeros[i])
}
let hh=soma
for(let j=soma;j>=1;j--){
    fatorial*=j
}
alert("A soma e: "+soma+" o fatorial da soma e: "+fatorial)
let pares=[]
let impares=[]

while(true){
    let numero=prompt("digite um numero:")
    if(numero===null || numero.trim()===""){
        break
    }
    if(Number(numero)%2===0){
        pares.push(numero)
    }else{
        impares.push(numero)
    }

}
let p=[... new Set(pares)]
let ip=[... new Set(impares)]
alert("pares: [ "+p+"] "+ " impares:["+ip+"]" )
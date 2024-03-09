//Código criado para o teste de estágiario

const input = require('prompt-sync')({sigint: true})

console.log()

console.log("Resposta nº 1:")

let indice = 13;
let soma = 0;
let k = 0;

for(k = 0; k < indice; k++){
    k = k + 1;
    soma = soma + k;       
}
console.log(`Soma = ${soma}`);

console.log()

console.log("Resposta nº 2:")

function pertenceFibonacci(numero) {
    let penultimoNumero = 0;
    let numeroAtual = 1;    
    while (numeroAtual < numero) {        
      let temp = numeroAtual;
      numeroAtual = penultimoNumero +  numeroAtual
      penultimoNumero = temp;

    }    
    return numeroAtual === numero;    
    }

    let numeroVerificar = parseInt(input("Digite o número a ser verificado: "))
    if (pertenceFibonacci(numeroVerificar)){
        console.log(`${numeroVerificar} pertence à sequência de Fibonacci.`)
    } else {
        console.log(`${numeroVerificar} não pertence à sequência de Fibonacci.`)

    }

    console.log()

    /*
    Resposta nº 3:
    a) 1,3,5,7,9
    b) 2,4,8,16,32,64,128
    c) 0,1,4,9,16,25,36,49
    d) 4,16,36,100
    e) 1,1,2,3,5,8,13    
    f) 2,10,12,16,17,18,19,200

    Resposta nº 4:
    
    Ligo o primeiro interruptor , deixo ligado por algum tempo
    Desligo o primeiro interruptor
    Ligo o segundo interruptor 
    Vou à sala 1 lâmpada ligada, então segundo interruptor controla essa  lâmpada
    Vou para sala 2 lâmpada  desligada e fria, então terceiro interruptor controla essa lâmpada
    E a lâmpada da sala 3 é controlado pelo primeiro interruptor

    */
   
console.log("Resposta nº 5:")

let str = String(input("Digite um texto: "))
let nString = "";
let i = 0;
for (i = str.length - 1; i >= 0; i--){
    nString += str[i];
}
console.log(nString);
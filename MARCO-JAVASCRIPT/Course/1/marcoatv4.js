// 4. Utilize if...else para escrever um código que defina três variáveis
// com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false,
// caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

// 👀 Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos 
// deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

let a1 = 60;
let a2 = 50;
let a3 = 0;

let asoma = a1 + a2 + a3

let apositive = a1 > 0 && a2 > 0 && a3 > 0

if(apositive) { if (asoma === 180) { console.log(true) }

else {console.log(false)};
    
} else {
    console.log("Erro: Angulo inválido")
}



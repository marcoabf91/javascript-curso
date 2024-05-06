// Estrutura de Repetições ?
// São loops

// Como estrutura de repetições podem ser uteis? 
// 1. Para evitar trabalhos manuais

const jogadores = [
    "Arrascaeta",
    "Andre",
    "Gabigol",
    "Tinga",
    "Alex",
    "Cr7",
    "Messi"
];

// EVITAR:
jogadores[0]
jogadores[1]
jogadores[2]
jogadores[3] 

// Fazendo com Estrutura de REPETIÇÃO
// Equivalente as linha acima
for (const element of jogadores) {
    console.log(element)
};

console.log(' ---  ') // Ignore

// Mas qual a ideia desse FOR, Dessa estrutura de REPETIÇÃO ? 
// é que ele vai percorrer cada ITEM, cada Elemento, CADA DADO dentro da sua LISTA(array)
// E para cada elemento do seu array, ele executa uma AÇÃO

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const numero of numeros) {
    console.log(numero * 5);
};


console.log(' ---  ') // Ignore

// Podemos ter varias ESTRUTURAS de REPETIÇÕES

// forOf -> a mais básica -> PERCORRE todos os elementos e executa uma ação

// for -> Ele além tudo o que o FOROF faz, ele tem ponto de INICIO, FIM e formas de PERCORRER

//    INICIO          FIM        Forma 
for (let index = 1; index < 11; index+=1) {
    console.log("5 x", index, "=", index*5)
};
// Não lembra, o a diferença do array e objeto?
// Se não lembrar volta para o arquivo aula1.js

// Estrutura IDEAL de dados:
// Array de objetos ou Objeto com Arrays

// Basicamente podemos chamar de array e objetos de 'JSON'



// 1. Estrutura Ideal - Array de OBJETOS
const times = [
    { id: 1, nome: "A. Paranaense", estado: "Parana" },
    { id: 2, nome: "A. Mineiro", estado: "Minas Gerais" },
];

const jogadores = [
    "Arrascaeta",
    "Andre"
];

const quantidadeTimes = 20;

const premicao = 60000000.00;

// 2. Estrutura Ideal - Objeto que tem Array
const brasileirao = {
    quantidadeTimes: 20,
    ano: 2024,
    times: [
        { id: 1, nome: "A. Paranaense", estado: "Parana" },
        { id: 2, nome: "A. Mineiro", estado: "Minas Gerais" },
    ],
    jogadoresFlamengo: ['Arrascaeta', "André"],
    premiacao: 60000000.00
};


// Quando usar a primeira estrutura: Array de OBJETOS ?
// quando for algo mais simples

// Quando usar a segunda estrutura: Objeto que possui arrays ? 
// quando for algo mais complexo
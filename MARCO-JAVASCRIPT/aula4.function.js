// Como criar function ? 
// Toda função tem a palavra reservada 'function'
// Toda função tem um nome, depois da palavra reservada function
// function nome
// toda função possui o simbolo () parenteses
// e toda função tem ESCOPO que é escrito dentro do { } chaves
// toda função para ser executada é preciso chamar/invocar ela
// mas via de regra as funções devem retorna um DADO pela palavra reservada return

function nomeDaFuncao() {
    // Aqui é o codigo da função
    return
};

// Chamada da função/invocação da função
nomeDaFuncao();


// Função sem parâmetros
function enviarSaudacao() {
    return 'Bom dia!!'
};

// Armazenar o resultado da função
const saudacao1 = enviarSaudacao();

console.log(saudacao1, "Marco tudo bem?");
console.log(saudacao1, "Alberto tudo bem?");
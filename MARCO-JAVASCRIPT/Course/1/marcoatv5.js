//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez
// e retorne os movimentos que ela pode fazer.

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// ⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma 
// peça com letras maiúsculas quanto com letras minúsculas,
// sem aumentar a quantidade de condicionais. 
// Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas
// (lower case).

// Exemplo: Bispo -> Diagonais.

let jogadorposicao = "Goleiro";

switch (jogadorposicao.toLowerCase()) {
    case 'goleiro':
        console.log('goleiro - no gol, defende com as mãos');
        break
    case 'lateral':
        console.log('lateral - nas laterais do campo, cruzamentos');
        break
    case 'meio de campo':
        console.log('meio de campo - no meio do campo, volante ou meia atacante');
        break
    case 'atacante':
        console.log('atacante - no ataque, faz gol');
        break
    default:
        console.log('Erro: posição não existe'); 
}

// Diferença: quando já tem algo pre definido, já posso utilizar o switch/case
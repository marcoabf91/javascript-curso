const data = [
    {
        nome: "Time A",
        vitorias: 10,
        empates: 5,
        derrotas: 3,
        golsFeitos: 30,
        golsSofridos: 15
    },
    {
        nome: "Time B",
        vitorias: 8,
        empates: 7,
        derrotas: 3,
        golsFeitos: 25,
        golsSofridos: 12
    },
    {
        nome: "Time C",
        vitorias: 12,
        empates: 2,
        derrotas: 4,
        golsFeitos: 35,
        golsSofridos: 20
    },
];

// Exemplo de como acessar as estatísticas do primeiro time
console.log("Estatísticas do Time A:");
console.log(`Vitórias do ${data[0].nome}: ${data[0].vitorias}`);
console.log(`Empates do ${data[0].nome}: ${data[0].empates}`);
console.log(`Derrotas do ${data[0].nome}: ${data[0].derrotas}`);
console.log(`Gols Feitos do ${data[0].nome}: ${data[0].golsFeitos}`);
console.log(`Gols Sofridos do ${data[0].nome}: ${data[0].golsSofridos}`);

console.log('')

// Exemplo dinâmico
// for
for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(`Vitórias do ${element.nome}: ${element.vitorias}`);
    console.log(`Empates do ${element.nome}: ${element.empates}`);
    console.log(`Derrotas do ${element.nome}: ${element.derrotas}`);
    console.log(`Gols Feitos do ${element.nome}: ${element.golsFeitos}`);
    console.log(`Gols Sofridos do ${element.nome}: ${element.golsSofridos}`);
    console.log('');
}

// for of
for (const team of data) {
    console.log(`Vitórias do ${team.nome}: ${team.vitorias}`);
    console.log(`Empates do ${team.nome}: ${team.empates}`);
    console.log(`Derrotas do ${team.nome}: ${team.derrotas}`);
    console.log(`Gols Feitos do ${team.nome}: ${team.golsFeitos}`);
    console.log(`Gols Sofridos do ${team.nome}: ${team.golsSofridos}`);
    console.log('');
}

// for in
for (const key in data[0]) {
    console.log(key)
}

// for of e for in
for (const team of data) {
    console.log('')
    for (const key in team) {
        console.log(`${key}: ${team[key]}`);
    }
}
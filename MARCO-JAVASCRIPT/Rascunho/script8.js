const dispesas = [
    200, 300, 5200, 1200, 200
];

var saldoTotal = 0;

for (let index = 0; index < dispesas.length; index++) {
    const element = dispesas[index];
    console.log(element)
    saldoTotal+= element
}

console.log(saldoTotal);
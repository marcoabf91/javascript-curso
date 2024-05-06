const arraryNumeros = [10, 23, 1, 32, 54, 9998];
const arrayTextos = ["Marco", "Alberto", "Bicicleta", "Real madrid"];
const arrayBooleans = [true, false, false, true];

// Element vai ser um numero
for (const element of arraryNumeros) {
    console.log(element)
};

console.log("---------")

// Element aqui vai ser um texto
for (const element of arrayTextos) {
    console.log(element)
}

console.log("---------")

// Element aqui vai ser um boolean
for (const element of arrayBooleans) {
    console.log(element)
}

console.log("---------")

const data = [
    {
        "user": "Marco A.",
        "email": "marco_007@hotmail.com",
        "password": "marcoa2018"
    },
    {
        "user": "Antonio A.",
        "email": "antonio22@hotmail.com",
        "password": "2018avs3"
    }
]

// Aqui vai ser um objeto
for (const element of data) {
    console.log(element)
}

console.log("---------")

// Você pode acessar as chaves do OBJETO
for (const element of data) {
    console.log(element.user);
    console.log(element['email']);
}

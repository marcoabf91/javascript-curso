// O IDEAL é sempre trabalhar com parâmetros

// Parametros são variaveis que existem apenas dentro da função
// Ela tem a responsabilidade de RECEBER o valor que é enviado no momento da chamada da função!

// Função para mandar saudações para pessoas da empresa!



const arrayNomes = [
    "Marco",
    "José",
    "André",
    "Carol",
    "Amanda",
    "Marco",
    "José",
    "André",
    "Carol",
    "Amanda"
];

const reunioes = [
    {
        horario: 17,
        participantes: [
            "Marco",
            "José",
            "André",
            "Carol",
            "Amanda",
            "Marco",
            "José",
            "André",
            "Carol",
            "Amanda"],
    },
    {
        horario: 16,
        participantes: [
            "Marcela",
            "Yowing"
        ],
    },
    {
        horario: 15,
        participantes: [
            "Vladmir",
            "Astolfo",
            "Rodrigo"
        ],
    }
];

const fox = {
    tema: "Aumento de salário",
    instrutor: "Cleber",
    reunioes: [
        {
            horario: 17,
            participantes: [
                "Marco",
                "José",
                "André",
                "Carol",
                "Amanda",
                "Marco",
                "José",
                "André",
                "Carol",
                "Amanda"],
        },
        {
            horario: 16,
            participantes: [
                "Marcela",
                "Yowing"
            ],
        },
        {
            horario: 15,
            participantes: [
                "Vladmir",
                "Astolfo",
                "Rodrigo"
            ],
        }
    ]
}

function enviarSaudacao(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (element.horario === 17) {
            console.log("Horario das 17h");
            for (const elem of element.participantes) {
                console.log(`Bom dia ${elem}, a reunião irá acontecer as 20h.`)
            }
            console.log('');
        }


        if (element.horario === 16) {
            console.log("Horario das 16h")
            for (const elem of element.participantes) {
                console.log(`Bom tarde ${elem}, a reunião irá acontecer as 20.`)
            }
            console.log('');
        }


        if (element.horario === 15) {
            console.log("Horario das 15h")
            for (const elem of element.participantes) {
                console.log(`Bom noite ${elem}, a reunião irá acontecer as 20.`)
            }
            console.log('');
        }
    }
};

enviarSaudacao(reunioes);



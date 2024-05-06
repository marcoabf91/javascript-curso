var data = [
    {
        id: 1,
        nome: "Nike Runner",
        preco: 500.00,
        cor: ["Preto", "Branco"],
        tamanho: [39, 40, 41, 42],
        detalhes: [
            {
                id_detalhes: 1,
                quantidade: 3,
                cor: "Preto",
                tamanho: 39
            },
            {
                id_detalhes: 2,
                quantidade: 2,
                cor: "Preto",
                tamanho: 40
            },
            {
                id_detalhes: 3,
                quantidade: 0,
                cor: "Preto",
                tamanho: 41
            },
            {
                id_detalhes: 4,
                quantidade: 0,
                cor: "Preto",
                tamanho: 42
            },
            {
                id_detalhes: 5,
                quantidade: 3,
                cor: "Branco",
                tamanho: 39
            },
            {
                id_detalhes: 6,
                quantidade: 2,
                cor: "Branco",
                tamanho: 40
            },
            {
                id_detalhes: 7,
                quantidade: 0,
                cor: "Branco",
                tamanho: 41
            },
            {
                id_detalhes: 8,
                quantidade: 0,
                cor: "Branco",
                tamanho: 42
            }
        ]
    },
    {
        id: 2,
        nome: "Nike Dunk",
        preco: 900.00,
        cor: ["Preto", "Branco"],
        tamanho: [42, 43],
        detalhes: [
            {
                id_detalhes: 9,
                quantidade: 3,
                cor: "Preto",
                tamanho: 42
            },
            {
                id_detalhes: 10,
                quantidade: 2,
                cor: "Preto",
                tamanho: 43
            },
            {
                id_detalhes: 11,
                quantidade: 5,
                cor: "Branco",
                tamanho: 42
            },
            {
                id_detalhes: 12,
                quantidade: 1,
                cor: "Branco",
                tamanho: 43
            }
        ]
    },
    {
        id: 3,
        nome: "Nike Air",
        preco: 1200.00,
        cor: ["Preto"],
        tamanho: [40],
        detalhes: [
            {
                id_detalhes: 13,
                quantidade: 10,
                cor: "Preto",
                tamanho: 40
            }
        ]
    }   
];

// 1. Utilizando a estrutura de repetição vou trazer todos os nomes dos tenis
for (const element of data) {
    console.log(element.nome)
}
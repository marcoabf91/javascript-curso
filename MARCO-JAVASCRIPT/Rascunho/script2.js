// Colchetes === Lista === Array
var listaTenis = [
    "Nike Runner 2", "Nick Jordan 1", "Nike Dunk", "Nike Kyrie Irving 4"
];

var arrayTenis = [
    // Chaves === objeto === conjunto de informações
    {
        nome: "Nike Runner",
        preco: 500.00,
        cor: ["Preto", "Branco", "Azul"],
        tamanho: [ { 
            numero: 38,
            disponivel: true
        }
    
    ]
    },
    {
        nome: "Nick Jordan 1",
        preco: 700.00,
        cor: ["Preto","Branco", "Azul" ],
        tamanho: [
            {
                numero: 37,
                cor: "preta" + "branco",
                disponivel: false,
                cor: "azul",
                disponivel: true
            },
            {
                numero: 38,
                cor: "Preto" + "Branco" + "Azul",
                disponivel: true
            }
        
        ]
    },
];
var nj1 = "Nike Jordan 1";
var nj1n37p = "preto, tamanho 37"

var msg = "O tenis"

console.log (msg,nj1,nj1n37p)
let scanf = require('scanf');

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletrônico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]


function listar() {
    produtos.forEach(p => {
        console.log(p)
    });
}

function  listar_por_categoria(categoria) {
    produtos.forEach(p => {
        if(p.categoria.toLocaleLowerCase() === categoria.toLocaleLowerCase())
            console.log(p)
    });
}

//listar_por_categoria("ELETRÔNICO");

function listar_por_valor(min, max) {
    produtos.forEach(p => {
        if(p.valor >= min && p.valor <= max)
            console.log(p)
    });
}

listar_por_valor(500, 2000);
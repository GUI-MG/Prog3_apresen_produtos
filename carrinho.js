let produtos = {
    1: {
        id: 1,
        nome: "Teclado Mecânico",
        categoria: "Teclados",
        preco: 130.00,
        descricao: "Teclado mecânico gamer switch brown retroiluminação azul Philco"
    },

    2: {
        id: 2,
        nome: "Mouse Gamer Logitech",
        categoria: "Mouses",
        preco: 150.00,
        descricao: "Mouse gamer Logitech G DPI 20000 7 botões configuráveis"
    },

    3: {
        id: 3,
        nome: "Monitor Curvo Samsung",
        categoria: "Monitores",
        preco: 22500.00,
        descricao: "Monitor curvo Samsung 144Hz 24 polegadas HDMI Free-Sync 8K"
    }
}

function comprar(id) {
    var confirmarCompra = confirm("Desejas comprar mesmo?");
    if(confirmarCompra) {
        document.getElementById(comprar);
        return 0;
    }
}


let carrinho = [];

function adicionarAoCarrinho(id) {
    var confirmar = confirm("Desejas adicionar esse produto ao carrinho?");
    if(confirmar) {
        var idProduto = document.getElementById(data-produto-id);
        carrinho.push(produtos[idProduto]);
        alert("Produto adicionado ao carrinho!");
        return 0;
    }else {
        alert("Produto não foi adicionado ao carrinho!");
        return 0;
    }
}

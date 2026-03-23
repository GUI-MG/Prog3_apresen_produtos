let produtos = {
    1: {
        id: 1,
        nome: "Teclado Mecânico",
        categoria: "Teclados",
        preco: 130.00,
        estoque: 145,
        descricao: "Teclado mecânico gamer switch brown retroiluminação azul Philco"
    },

    2: {
        id: 2,
        nome: "Mouse Gamer Logitech",
        categoria: "Mouses",
        preco: 150.00,
        estoque: 400,
        descricao: "Mouse gamer Logitech G DPI 20000 7 botões configuráveis"
    },

    3: {
        id: 3,
        nome: "Monitor Curvo Samsung",
        categoria: "Monitores",
        preco: 22500.00,
        estoque: 200,
        descricao: "Monitor curvo Samsung 144Hz 24 polegadas HDMI Free-Sync 8K"
    },

    4: {
        id: 4,
        nome: "Gabinete Aquário Mancer",
        categoria: "Gabinetes",
        preco: 2560.90,
        estoque: 370,
        descricao: "Gabinete Aquário Mancer ATX e Mini-ATX Preto"
    }
}


/* function precoProdutos(id){
    const divCardFooter = document.getElementById('card_footer');
    let html = '<p>Preço:</p>';

    for(let id in produtos) {
        html += `<span class="card_price"> R$ ${produtos[id].preco.toFixed(2)}</span>`;
    }

    divCardFooter.innerHTML = html;

}

window.onload = function() {
    precoProdutos();
} */

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
        alert("Produto adicionado ao carrinho!");
        var idProduto = document.getElementById(data-produto-id);
        carrinho.push(produtos[idProduto]);
        return 1;
    }else {
        alert("Produto não foi adicionado ao carrinho!");
        return 0;
    }
}

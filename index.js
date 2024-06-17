var estoque = {
    item: [
        { nome: 'Produto1', preco: 100 },
        { nome: 'Produto2', preco: 200 },
    ]
};
console.log(estoque);
function adicionarItem(produto) {
    estoque.item.push(produto);
}

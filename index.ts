interface Estoque<Item>  {  
  item:Item[];
}

interface Produto {
  nome: string;
  preco: number;
}

const estoque: Estoque<Produto> = {  
  item: [
    { nome: 'Produto1', preco: 100 },
    { nome: 'Produto2', preco: 200 },
  ]
};

console.log(estoque);

function adicionarItem (produto: Produto) {
estoque.item.push(produto);
}

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  exibirDetalhes() {
    console.log(`${this.nome} custa R$${this.preco}`);
  }
}

const produto_01 = new Produto("Whey", 169.9);

produto_01.exibirDetalhes();

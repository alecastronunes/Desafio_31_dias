class Pilha {
  constructor() {
    this.items = [];
  }

  //   Adiciona um novo item ao final da lista
  push(valor) {
    this.items.push(valor);
  }

  //   Verifica se a lista está vazia
  estaVazio() {
    return this.items.length === 0;
  }

  //   Se a lista não estiver vazia, remove o último item da lista
  pop() {
    if (this.estaVazio()) {
      throw new Error("A pilha está vazia!");
    }

    return this.items.pop();
  }

  //   Retorna o último item da lista
  peek() {
    return this.items[this.items.length - 1];
  }
}

const pilha = new Pilha();

pilha.push(3);
pilha.push(4);
pilha.push(5);

pilha.pop();
pilha.pop();

console.log(pilha.peek());

class Carro {
  constructor(marca, modelo, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
  }

  acelerar() {
    console.log(`${this.marca} está acelerando!!!`);
  }
}

const meuCarro = new Carro("Toyota", "Corolla", "Branco");

meuCarro.acelerar();

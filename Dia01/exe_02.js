// Declare uma variável para armazenar o preço de um produto e outra para o desconto. Calcule o preço final e mostre no console.

let precoProduto = 299;
let valorDesconto = 0.1;
let valorComDesconto = precoProduto - (valorDesconto * precoProduto);

console.log("O preço do produto é: R$" + precoProduto + " e o valor do desconto é 10%." + " O preço final com desconto é: " + valorComDesconto.toFixed(2));

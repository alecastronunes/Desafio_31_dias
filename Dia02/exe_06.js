// Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use switch para processar a escolha.

let operacao = 4;

switch (operacao) {
  case 1:
    console.log("Saque realizado com sucsso!!!");
    break;
  case 2:
    console.log("Deposito realizado com sucesso!!!");
    break;
  case 3:
    console.log("Saldo: R$ 00.00");
    break;
  default:
    console.log("Opção inválida!!!");
    break;
}

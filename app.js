const prompt = require("prompt-sync")();
//const user = prompt("Insira seu nome: ")
const saldo = 2000;
let novoSaldo = saldo;

function mainMenu() {
  console.log("=======MENU=======");
  console.log("1 - HOME");
  console.log("2 - DEPOSITO");
  console.log("3 - TRANFERENCIA");
  console.log("4 - SAQUE");
  console.log("===================");
  userInput = Number(prompt(" O QUE DESEJA FAZER: "));

  switch (userInput) {
    case 1:
      return home();
    case 2:
      return deposito();
    case 3:
      return transf();
    case 4:
      return saque();
    default:
      console.log("Insira um valor válido!");
  }
}

function home() {
  console.log(`saldo disponivel: ${novoSaldo}`);
  while (userInput != 0) {
    if ((userInput = Number(prompt(" tecle 0 para voltar: ")) != 0)) {
      console.log("digite uma opção valida!! ");
    } else {
      return mainMenu();
    }
  }
}

function deposito() {
  console.log("Quanto deseja depositar");
  const deposito = Number(prompt("Valor: "));

  if (deposito <= 0) {
    console.log("insira um valor valido");
  } else {
    let novoSaldo = saldo + deposito;
    console.log(`deposito efetuado com suscesso novo saldo ${novoSaldo}`);
    //console.log(novoSaldo)
    if ((userInput = Number(prompt("Tecle 0 para voltar ao menu: ")) != 0)) {
    } else {
      return mainMenu();
    }
  }
}

function saque() {
  console.log(`Saldo disponivel para saque: ${saldo}.`);
  const saque = Number(prompt("Valor: "));
  if (saque <= 0) {
    console.log("insira um valor valido para saque");
  } else if (saque > saldo) {
    console.log("saldo insuficiente");
  } else {
    novoSaldo = novoSaldo - saque;
    console.log(`saque efeetuado com suscesso novo saldo!: ${novoSaldo}`);
  }
  if ((userInput = Number(prompt("Tecle 0 para voltar ao menu: ")) != 0)) {
  } else {
    return mainMenu();
  }
}

function transf() {
  console.log("SERVIÇO INDISPONIVEL");
  while (userInput != 0) {
    console.log("digite uma opçao valida!!");
    if ((userInput = Number(prompt("Tecle 0 para voltar ao menu: ")) != 0)) {
    } else {
      return mainMenu();
    }
  }
}
return mainMenu();

const prompt = require('prompt-sync')()
const user = prompt("Insira seu nome: ")
const saldo = 2000
const novoSaldo = saldo
function mainMenu(){
  console.log("=======MENU=======")
  console.log("1 - HOME")
  console.log("2 - DEPOSITO")
  console.log("3 - TRANFERENCIA")
  console.log("4 - SAQUE")
  console.log("===================")
  userInput = Number(prompt(" O QUE DESEJA FAZER: "))

switch (userInput) {
  case 1:
    return home()
  case 2:
    return deposito()
  case 3:
    return transf()
  case 4:
    return saque()
  default:
    console.log("Insira um valor válido!")
}
}

function home(){
  console.log(`Olá ${user}, seja bem vindo(a)!`)
  console.log(`saldo disponivel: ${saldo}`)
}

function deposito(){
  console.log("Quanto deseja depositar")
  const deposito = Number(prompt("Valor: "))
  

  if(deposito == 0){
    console.log("insira um valor valido")
  }else{
    const novoSaldo = saldo + deposito
    console.log(`deposito efetuado com suscesso novo saldo ${novoSaldo}`)
    return mainMenu()
    //console.log(saldo)
    //novoSaldo.push(novoSaldo)
  } 
}

function saque(){
  console.log(`Saldo disponivel para saque: ${saldo}.`)
  const saque = Number(prompt("Valor: "))
  novoSaldo = saldo - saque
  if (saque <= 0){
    console.log("insira um valor valido para saque")
  }else if(saque > saldo){
    console.log("saldo insuficiente")
  }else{
    console.log(`saque efetuado com suscesso`)
    console.log(`novo saldo: ${saldo}`)
  }
}
return mainMenu()
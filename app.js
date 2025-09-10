const prompt = require('prompt-sync')()
const saldo = 2000
const novoSaldo = []
function mainMenu(){
  console.log("=======MENU=======")
  console.log("1 - DEPOSITO")
  console.log("2 - SAQUE")
  console.log ("3 - TRANFERENCIA")
  console.log("===================")
  userInput = Number(prompt(" O QUE DESEJA FAZER: "))

  if (userInput == 1){
    return deposito()
  }else if(userInput == 2){
    return saque()
  }else if(userInput == 3){
    return transf()
  }else{
    console.log("insira um valor valido!")
  }
}

function deposito(){
  console.log("Quanto deseja depositar")
  const deposito = Number(prompt("Valor: "))
  

  if(deposito == 0){
    console.log("insira um valor valido")
  }else{
    const novoSaldo = saldo + deposito
    console.log(`deposito efetuado com suscesso novo saldo ${novoSaldo}`)
    console.log(saldo)
    //novoSaldo.push(novoSaldo)
  } 
}

// function saque(){
//   console.log(`Saldo disponivel para saque: ${saldo}.`)
//   const saque = Number(prompt("Valor: "))
//   novoSaldo = saldo - saque
//   if (saque <= 0){
//     console.log("insira um valor valido para saque")
//   }else if(saque > saldo){
//     console.log("saldo insuficiente")
//   }else{
//     console.log(`saque efetuado com suscesso`)
//     console.log(`novo saldo: ${saldo}`)
//   }
// }
return mainMenu()
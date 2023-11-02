let result = calculatorMach(100, 15);

function calculatorMach(vitoria, derrota) {
  let balance = [vitoria - derrota];
  let nivelDoheroi; 

  switch (true) {
    case balance <= 10:
      nivelDoHeroi = "Ferro";
      break;

    case balance >= 11 && balance < 20:
      nivelDoHeroi = "Bronze";
      break;

    case balance >= 21 && balance < 50:
      nivelDoHeroi = "Prata";
      break;

    case balance >= 51 && balance < 80:
      nivelDoHeroi = "Ouro";
      break;

    case balance >= 81 && balance < 90:
      nivelDoHeroi = "Diamente";
      break;

    case balance >= 91 && balance < 100:
      nivelDoHeroi = "Lendário";
      break;

    case balance >= 101:
      nivelDoHeroi = "Imortal";
      break;
  }
  return balance;
}
console.log(
  "O herói tem saldo de " + result + " vitórias e está no nivel " + nivelDoHeroi
);

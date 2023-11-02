class heroi {
  constructor(nameHeroi, age, type) {
    this.nameHeroi = nameHeroi;
    this.age = age;
    this.type = type;
  }
  attack() {
    let attack;

    if (this.type === "mago") {
      attack = "Magia";
    } else if (this.type === "guerreiro") {
      attack = "Espada";
    } else if (this.type === "monge") {
      attack = "Artes marciais";
    } else if (this.type === "ninja") {
      attack = "Shuriken";
    } else {
      attack = "Jogador desconhecido";
    }

    console.log(`O tipo de herói escolhido foi ${this.type}, seu nome é ${this.nameHeroi} e sua idade é ${this.age}`);

    console.log(`O ${this.type} atacou usando ${attack}`);
  }
}

let mago = new heroi("Ron Wesley", 16, "mago");
let guerreiro = new heroi("Dante", 28, "guerreiro");
let monge = new heroi("Jack Chan", 30, "monge");
let ninja = new heroi("Naruto", 12, "ninja");

monge.attack();


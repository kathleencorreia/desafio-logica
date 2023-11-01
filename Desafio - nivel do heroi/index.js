console.log("Qual o nome do seu herói?")
let nomeDoHeroi = "Kath"
console.log("Nome do herói é " + nomeDoHeroi)


console.log("Qual é a experiência do seu herói? " )
let xp = 100;
console.log("A experiência do herói é " + xp)

let nivelDoheroi; 

if(xp <= 1000){
    nivelDoheroi = "Ferro"}
else if (xp >= 1001 && xp < 2000) {
    nivelDoheroi = "Bronze"
}
else if (xp > 2001 && xp <= 5000) {
    nivelDoheroi = "Prata"
}
else if (xp > 6001 && xp <= 7000) {
    nivelDoheroi = "Ouro"
}
else if (xp > 7001 && xp <= 8000) {
    nivelDoheroi = "platina"  
}
else if (xp > 8001 && xp <= 9000) {
    nivelDoheroi = "Ascendente"  
}
else if (xp > 9001 && xp <= 10000) {
    nivelDoheroi = "Imortal"  
}
else {
    nivelDoheroi = "Radiante"  
}  

switch (true) {
  case xp <= 1000:
    console.log('Ferro favela');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${xp}.`);
}

console.log("O Herói " + nomeDoHeroi + " está no nível " + nivelDoheroi)


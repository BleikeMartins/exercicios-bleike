// EXERCÍCIO 3
// =========================
// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00
// =========================

let preco = 60;
let aVista = 10;
let totalAvista = 0;

totalAvista = (  preco - (aVista / 100 * preco));

console.log(`preco: R$${preco},00`)
console.log(`A vista: R$${totalAvista},00`)
console.log(`ou 3x de: R$${preco/3},00`)



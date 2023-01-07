//EXERCICIO 2 

// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o 
//valor total a ser pago.

//Exemplo:
// Valor do jantar: R$80,00
// taxa do garçom: R$8,00
// total a pagar: R$88,00

let valorJantar = 80
let garçom = 10
let totalAPagar = 0

totalAPagar = 80 + ((garçom/100) * 80);

console.log(`valor do jantar: R$ ${valorJantar},00`)
console.log(`Taxa Do Garçom: R$ ${(garçom/100) * 80},00`)
console.log(`Total A Pagar: R$ ${totalAPagar},00`)



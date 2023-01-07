//EXERCICIO 2 

// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o 
//valor total a ser pago.

//Exemplo:
// Valor do jantar: R$80,00
// taxa do garçom: R$8,00
// total a pagar: R$88,00

const valorJantar = 80
const taxaGarcom = 10
const totalAPagar = valorJantar + ((taxaGarcom/100) * valorJantar)

console . log ( `Valor do Jantar: R$ ${ valorJantar },00 ` )
console.log(`TAXA DO Garcom: R$ ${taxaGarcom / 100 * valorJantar},00`)
console . log ( 'O Total Ficou: R$'  +  totalAPagar  +  ',00 Reais.' ) ;





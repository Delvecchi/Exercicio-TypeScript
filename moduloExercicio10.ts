// 10. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

// console.log("Exercicio 10")

import promptSync from "prompt-sync"
let prompt = promptSync()

export function exercicio10(nmero:number) {

 while (nmero != 0) {
    nmero = parseInt(prompt("Digite um numero: "))
}
}
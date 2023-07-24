// Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.
// console.log("Exercicio 9")
import promptSync from "prompt-sync"
let prompt = promptSync()

export function exercicio9(numro:number) {
    while (numro >= 0) {
        console.log(numro)
        numro--
    }
}
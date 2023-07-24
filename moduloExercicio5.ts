// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

let anterior: number = 0
let fibonacci: number = 1
export function exercicio5(){
    for (let index: number = 0; index < 1; index++) {
        let numero: number = 0
        console.log(numero)

        for (let index: number = 1; index < 10; index++) {
            console.log(fibonacci)
            let atual = fibonacci
            fibonacci = anterior + atual
            anterior = atual

        }
    }
}
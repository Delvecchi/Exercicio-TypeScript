// 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura while.
// console.log("Exercicio 7")

let contador: number = 0;
let soma: number = 0;
export function exercicio7() {
while (contador <= 100) {
    
    soma = soma + contador
    contador ++
}

console.log(soma)
}
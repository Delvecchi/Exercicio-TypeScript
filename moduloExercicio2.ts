// 2. Imprimir números pares de 1 a 10.
let sobra: number;
export function exercicio2() {
    for (let indice: number = 0; indice <= 10; indice++) {
        sobra = indice % 2
        if (sobra == 0) {
            console.log(indice)

        }
    }
}
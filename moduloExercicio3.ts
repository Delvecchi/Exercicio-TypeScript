let sobra: number;
export function exercicio3() {
    for (let indice: number = 1; indice <= 50; indice++) {
        sobra = indice % 2
        if (sobra != 0) {
            console.log(indice)

        }
    }
}
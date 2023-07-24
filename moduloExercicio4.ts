import promptSync from "prompt-sync"

let prompt = promptSync()


export function exercicio4(numero: number) {

    
for (let indice: number = 0; indice <= 10; indice++){
    let result: number = numero * indice
    console.log(numero + "x" + indice + " = " + result)
};
}
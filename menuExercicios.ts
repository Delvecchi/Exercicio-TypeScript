import promptSync from "prompt-sync"
import { exercicio1 } from "./moduloExercicio1";
import { exercicio2 } from "./moduloExercicio2";
import { exercicio3 } from "./moduloExercicio3";
import { exercicio4 } from "./moduloExercicio4";
import { exercicio5 } from "./moduloExercicio5";
import { exercicio6 } from "./moduloExercicio6";
import { exercicio7 } from "./moduloExercicio7";
import { exercicio8 } from "./moduloExercicio8";
import { exercicio9 } from "./moduloExercicio9";
import { exercicio10 } from "./moduloexercicio10";
let prompt = promptSync()
let resposta: string;


do {
    resposta = prompt("Informe o número de 1 à 10, para selecionar um exercicio, ou digite sair para finalizar: ")
    switch (resposta) {
        case "1":
            console.log("Você escolheu o exercicio 1")
            exercicio1()
            break;
        case "2":
            console.log("Você escolheu o exercicio 2")
            exercicio2()
            break;
        case "3":
            console.log("Você escolheu o exercicio 3")
            exercicio3()
            break;
        case "4":
            console.log("Você escolheu o exercicio 4")
            let  numero: number = parseInt(prompt("Informe um número de 0 a 10: "))
            exercicio4(numero)
            break;
        case "5":
            console.log("Você escolheu o exercicio 5")
            exercicio5()
            break;
        case "6":
            console.log("Você escolheu o exercicio 6")
            exercicio6()
            break;
        case "7":
            console.log("Você escolheu o exercicio 7")
            exercicio7()
            break;
        case "8":
            console.log("Você escolheu o exercicio 8")
            let idade: number = parseInt(prompt("Informe a idade do usuario: "))
            exercicio8(idade)
            break;
        case "9":
            console.log("Você escolheu o exercicio 9")
            let numro: number = parseInt(prompt("Informe um numero: "))
            exercicio9(numro)
            break;
        case "10":
            console.log("Você escolheu o exercicio 10")
            let nmero: number = parseInt(prompt("Digite um numero: "))
            exercicio10(nmero)
            break;

        default:
            console.log("Essa opção é inválida")
            break;
    }
    
} while (resposta != "sair");
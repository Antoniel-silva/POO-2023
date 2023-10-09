/*1. Crie uma classe Calculadora que tenha:
a. Dois atributos privados (operando1 e 2) do tipo number;
b. Dois métodos públicos, cada um representando uma operação básica;
c. Um construtor onde são passados os operandos e que esses inicializam os
atributos;*/

class Calculadora{
    private operando1
    private operando2

    constructor(operando1: number, operando2: number){
        this.operando1 = operando1
        this.operando2 = operando2
    }

    somar(): number{
        return this.operando1 + this.operando2
    }

    dividir(): number{
        return this.operando1 - this.operando2
    }
}

let c = new Calculadora(5,7)
console.log("A soma é:",c.somar())
console.log("A divisão é:",c.dividir())
//console.log(c.operando1)
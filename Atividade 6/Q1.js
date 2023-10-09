/*1. Crie uma classe Calculadora que tenha:
a. Dois atributos privados (operando1 e 2) do tipo number;
b. Dois métodos públicos, cada um representando uma operação básica;
c. Um construtor onde são passados os operandos e que esses inicializam os
atributos;*/
var Calculadora = /** @class */ (function () {
    function Calculadora(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    Calculadora.prototype.somar = function () {
        return this.operando1 + this.operando2;
    };
    Calculadora.prototype.dividir = function () {
        return this.operando1 - this.operando2;
    };
    return Calculadora;
}());
var c = new Calculadora(5, 7);
console.log("A soma é:", c.somar());
console.log("A divisão é:", c.dividir());
console.log(c.operando1);

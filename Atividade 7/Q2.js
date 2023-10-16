//criando uma classe calculadora
var calculadora = /** @class */ (function () {
    function calculadora(_operando1, _operando2) {
        this.operador1 = _operando1;
        this.operador2 = _operando2;
    }
    calculadora.prototype.soma = function () {
        return this.operador1 + this.operador2;
    };
    return calculadora;
}());
var c = new calculadora(2, 5);
console.log("O valor da soma é:", c.soma());

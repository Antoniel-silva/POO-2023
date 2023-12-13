//aki é a classe abstrata para Figura Geometrica
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica() {
    }
    return FiguraGeometrica;
}());
//aqui é a Classe concreta para Quadrado
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(lado) {
        var _this = _super.call(this) || this;
        _this.lado = lado;
        return _this;
    }
    Quadrado.prototype.calcularArea = function () {
        return this.lado * this.lado;
    };
    Quadrado.prototype.calcularPerimetro = function () {
        return 4 * this.lado;
    };
    return Quadrado;
}(FiguraGeometrica));
//aqui é Classe concreta para Triangulo
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(base, altura, lado1, lado2, lado3) {
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.altura = altura;
        _this.lado1 = lado1;
        _this.lado2 = lado2;
        _this.lado3 = lado3;
        return _this;
    }
    Triangulo.prototype.calcularArea = function () {
        return (this.base * this.altura) / 2;
    };
    Triangulo.prototype.calcularPerimetro = function () {
        return this.lado1 + this.lado2 + this.lado3;
    };
    return Triangulo;
}(FiguraGeometrica));
// Classe concreta para Retângulo
var Retangulo = /** @class */ (function (_super) {
    __extends(Retangulo, _super);
    function Retangulo(base, altura) {
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Retangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    Retangulo.prototype.calcularPerimetro = function () {
        return 2 * (this.base + this.altura);
    };
    return Retangulo;
}(FiguraGeometrica));
// Exemplo de uso
var retangulo = new Retangulo(6, 8);
console.log("Área do retângulo:", retangulo.calcularArea()); // Saída: 48
console.log("Perímetro do retângulo:", retangulo.calcularPerimetro()); // Saída: 28
var quadrado = new Quadrado(5);
console.log("Área do quadrado:", quadrado.calcularArea()); // 25
console.log("Perímetro do quadrado:", quadrado.calcularPerimetro()); // 20
var triangulo = new Triangulo(4, 3, 5, 4, 3);
console.log("Área do triângulo:", triangulo.calcularArea()); // 6
console.log("Perímetro do triângulo:", triangulo.calcularPerimetro()); // 12

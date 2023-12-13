//a.	A classe funcionário deve ser abstrata e o método getBonificacao() abstrato;
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
var Funcionario = /** @class */ (function () {
    function Funcionario(salario) {
        this.salario = salario;
    }
    return Funcionario;
}());
//b.	Na classe gerente o método bonificação deve retornar 40% do salário;
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gerente.prototype.getBonificacao = function () {
        return this.salario * 0.4;
    };
    return Gerente;
}(Funcionario));
var g = new Gerente(2000);
console.log(g.getBonificacao());
//c.	Em Diretor a bonificação deve ser 60% do salário.
var Diretor = /** @class */ (function (_super) {
    __extends(Diretor, _super);
    function Diretor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Diretor.prototype.getBonificacao = function () {
        return this.salario * 0.6;
    };
    return Diretor;
}(Funcionario));
var d = new Diretor(2000);
console.log("A bonificação do gerente é:", d.getBonificacao());
//d.	Por fim, na classe presidente o método deve retornar 100% do salário + R$ 1.000,00.
var presidente = /** @class */ (function (_super) {
    __extends(presidente, _super);
    function presidente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    presidente.prototype.getBonificacao = function () {
        return this.salario * 1 + 1000;
    };
    return presidente;
}(Funcionario));
var p = new presidente(2000);
console.log("A bonificação do presidente é:", p.getBonificacao());

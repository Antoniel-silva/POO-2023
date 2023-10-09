/*Crie uma classe Hora que tenha:
a. Três atributos privados e definidos no construtor chamados hora, minutos e
segundos;
b. Métodos públicos para ler hora, minuto e segundo de forma individual;
c. Um método público para retorne a hora no formato “hh:mm:ss”.*/
var Hora = /** @class */ (function () {
    function Hora(_hora, _minutos, _segundos) {
        this.hora = _hora;
        this.minutos = _minutos;
        this.segundos = _segundos;
    }
    Hora.prototype.obterHora = function () {
        return this.hora;
    };
    Hora.prototype.obrterMinutos = function () {
        return this.minutos;
    };
    Hora.prototype.obtersegundos = function () {
        return this.segundos;
    };
    return Hora;
}());
var h = new Hora(2, 25, 35);
console.log("A hora é:", h.obterHora());
console.log("Minutos é:", h.obrterMinutos());
console.log("Segundos é:", h.obtersegundos());
console.log(h.obterHora(), "H:", h.obrterMinutos(), "M:", h.obtersegundos(), "S");

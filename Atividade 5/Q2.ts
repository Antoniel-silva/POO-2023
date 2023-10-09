/*Crie uma classe Hora que tenha:
a. Três atributos privados e definidos no construtor chamados hora, minutos e
segundos;
b. Métodos públicos para ler hora, minuto e segundo de forma individual;
c. Um método público para retorne a hora no formato “hh:mm:ss”.*/

class Hora{
    private hora: number
    private minutos: number
    private segundos: number

    constructor( _hora: number,  _minutos: number,  _segundos: number){
        this.hora = _hora
        this.minutos = _minutos
        this.segundos = _segundos
    }

    obterHora(): number{
        return this.hora
    }

    obrterMinutos(): number{
        return this.minutos
    }

    obtersegundos(): number{
        return this.segundos
    }
}

let h = new Hora(2,25,35)
console.log("A hora é:",h.obterHora())
console.log("Minutos é:",h.obrterMinutos())
console.log("Segundos é:",h.obtersegundos())
console.log(h.obterHora(),"H:",h.obrterMinutos(),"M:",h.obtersegundos(),"S")
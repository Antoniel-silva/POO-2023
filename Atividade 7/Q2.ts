//criando uma classe calculadora

class calculadora{
    private operador1: number
    private operador2: number

    constructor(_operando1: number, _operando2: number){
        this.operador1 = _operando1
        this.operador2 = _operando2
    }

    soma(): number{
        return this.operador1 + this.operador2
    }
}

let c = new calculadora(2,5)
console.log("O valor da soma é:", c.soma())
//a.	A classe funcionário deve ser abstrata e o método getBonificacao() abstrato;

abstract class Funcionario {
    protected salario: number;

    constructor(salario: number) {
        this.salario = salario;
    }

    abstract getBonificacao(): number;
    }

//b.	Na classe gerente o método bonificação deve retornar 40% do salário;

class Gerente extends Funcionario {
    getBonificacao(): number {
    return this.salario * 0.4;
    }
}
    
    let g: Gerente = new Gerente(2000);
    console.log(g.getBonificacao());


//c.	Em Diretor a bonificação deve ser 60% do salário.

class Diretor extends Funcionario {
    getBonificacao(): number {
    return this.salario * 0.6;
    }
}
    
    let d: Diretor = new Diretor(2000);
    console.log("A bonificação do gerente é:", d.getBonificacao());

//d.	Por fim, na classe presidente o método deve retornar 100% do salário + R$ 1.000,00.

class presidente extends Funcionario {
    getBonificacao(): number {
    return this.salario * 1 + 1000
    }
}
    
    let p: presidente = new presidente(2000);
    console.log("A bonificação do presidente é:", p.getBonificacao());


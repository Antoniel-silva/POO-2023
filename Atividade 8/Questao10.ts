//criando a class valor invalido erro de aplicação erro

class ValorInvalidoError extends AplicacaoError {
    constructor() {
        super("O valor fornecido é inválido.");
    }
}

class Conta {
    numero: string;
    nome: string;
    saldo: number;

    constructor(numero: string, nome: string, saldoInicial: number) {
        this.numero = numero;
        this.nome = nome;
        this.saldo = 0;  // Inicializando com zero e utilizando depositar para atribuir o saldo inicial
        this.depositar(saldoInicial);
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            throw new ValorInvalidoError();
        }

        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            throw new ValorInvalidoError();
        }

        if (this.saldo - valor < 0) {
            throw new SaldoInsuficienteError();
        }

        this.saldo -= valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}


// Exemplo de uso das novas classes e exceções na classe Conta

let contaTeste1 = new Conta("789", "Conta Teste", 100);

try {
    // Tentando depositar um valor inválido
    contaTeste.depositar(0);
} catch (erro) {
    if (erro instanceof ValorInvalidoError) {
        console.error("Erro: Valor inválido.");
    } else {
        console.error("Erro desconhecido:", erro.message);
    }
} 
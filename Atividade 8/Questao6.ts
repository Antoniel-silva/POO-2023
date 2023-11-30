class Conta {
    numero: string;
    nome: string;
    saldo: number;

    //lancando erro no construtor

    constructor(numero: string, nome: string, saldo: number) {
        if (saldo < 0) {
            throw new Error("O saldo não pode ser menor que zero.");
        }

        this.numero = numero;
        this.nome = nome;
        this.saldo = saldo;
    }

    //lançando erro no depositar e sacar

    depositar(valor: number): void {
        if (valor < 0) {
            throw new Error("O valor do depósito não pode ser menor que zero.");
        }

        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor do saque deve ser maior que zero.");
        }

        if (this.saldo - valor < 0) {
            throw new Error("Saldo insuficiente para realizar o saque.");
        }

        this.saldo -= valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (!this.sacar(valor)) {
            return false;
        }

        contaDestino.depositar(valor);
        return true;
    }
}

class Banco {
    contas: Conta[] = []

    inserir(conta: Conta): void {
        this.contas.push(conta);
    }

    consultar(numero: string): Conta {
        let contaProcurada!: Conta;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }

        return contaProcurada;
    }

    consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    alterar(conta: Conta): void {
        let indiceProcurado: number =
                this.consultarPorIndice(conta.numero);
        
        if (indiceProcurado != -1) {
            this.contas[indiceProcurado] = conta;
        }
    }

    excluir(numero: string): void {
        let indiceProcurado = this.consultarPorIndice(numero);

        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i+1];
            }
            this.contas.pop();
            
        }
    }

    sacar(numero: string, valor: number): void {
        let indiceProcurado: number = this.consultarPorIndice(numero);

        if (indiceProcurado != -1) {
            let conta: Conta = this.contas[indiceProcurado];
            conta.sacar(valor);
        }
    }
}

// Teste para valores menores que zero
let contaTeste = new Conta("789", "Conta Teste", 100);

try {
    console.log("Saldo inicial da Conta Teste:", contaTeste.consultarSaldo());
    
    // Tentando sacar um valor menor ou igual a zero
    contaTeste.sacar(0);

    // Tentando depositar um valor menor que zero
    contaTeste.depositar(-50);
    
} catch (erro) {
    console.error("Erro durante operações:", erro.message);
} 
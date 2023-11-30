//classe conta

class Conta {
    numero: string;
    nome: string
    saldo: number;

    constructor(numero: string, nome: string, saldo: number) {
        this.numero = numero;
        this.nome = nome;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    // adicionando exceções ao método sacar

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


let conta1 = new Conta("123", "Exemplo", 100);

try {
    console.log("Saldo inicial:", conta1.consultarSaldo());
    
    // Tentando sacar um valor maior que o saldo
    conta1.sacar(150);
    
    console.log("Esse código não será alcançado.");
} catch (erro) {
    console.error("Erro durante o saque:", erro.message);
} 

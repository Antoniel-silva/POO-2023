// de forma resumida e fazendo alteração nos métodos alterar, sacar, depositar e transferir na classe bank

class Banco {
    contas: Conta[] = []

    inserir(conta: Conta): void {
        this.contas.push(conta);
    }

    consultar(numero: string): Conta {
        let contaProcurada = this.contas.find(conta => conta.numero === numero);

        if (!contaProcurada) {
            throw new ContaInexistenteError();
        }

        return contaProcurada;
    }

    consultarPorIndice(numero: string): number {
        let indiceProcurado = this.contas.findIndex(conta => conta.numero === numero);

        if (indiceProcurado === -1) {
            throw new ContaInexistenteError();
        }

        return indiceProcurado;
    }

    alterar(conta: Conta): void {
        let indiceProcurado = this.consultarPorIndice(conta.numero);
        this.contas[indiceProcurado] = conta;
    }

    depositar(numero: string, valor: number): void {
        this.consultar(numero).depositar(valor);
    }

    sacar(numero: string, valor: number): void {
        this.consultar(numero).sacar(valor);
    }

    transferir(contaOrigemNumero: string, contaDestinoNumero: string, valor: number): void {
        const contaOrigem = this.consultar(contaOrigemNumero);
        const contaDestino = this.consultar(contaDestinoNumero);

        contaOrigem.transferir(contaDestino, valor);
    }

    excluir(numero: string): void {
        let indiceProcurado = this.consultarPorIndice(numero);

        for (let i = indiceProcurado; i < this.contas.length; i++) {
            this.contas[i] = this.contas[i+1];
        }
        this.contas.pop();
    }
}


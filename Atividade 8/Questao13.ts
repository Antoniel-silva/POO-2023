class Banco {
    contas: Conta[] = [];

    inserir(conta: Conta): void {
        try {
            // Tentar consultar a conta para verificar se já existe
            this.consultar(conta.numero);

            // Se a conta não existe, lança a exceção e vai para o catch
        } catch (erro) {
            if (erro instanceof ContaInexistenteError) {
                // Adicionar a conta apenas se a exceção foi ContaInexistenteError
                this.contas.push(conta);
            } else {
                // Lançar exceção não esperada novamente
                throw erro;
            }
        }
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

    // ... (outros métodos)
}


let banco = new Banco();
let contaTeste1 = new Conta("123", "Conta Teste 1", 100);
let contaTeste2 = new Conta("123", "Conta Teste 2", 200);

// Adiciona a primeira conta
banco.inserir(contaTeste1);

try {
    // Tenta adicionar a segunda conta com o mesmo número
    banco.inserir(contaTeste2);
} catch (erro) {
    if (erro instanceof ContaInexistenteError) {
        console.error("Erro: Já existe uma conta com o mesmo número.");
    } else {
        console.error("Erro desconhecido:", erro.message);
    }
} 
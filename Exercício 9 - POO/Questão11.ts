// Classe AuditoriaInterna
class AuditoriaInterna {
    private tributaveis: Tributavel[] = [];

    // Método para adicionar tributáveis ao array
    adicionar(tributavel: Tributavel): void {
        this.tributaveis.push(tributavel);
    }

    // Método para calcular tributos de todos os tributáveis no array
    calcularTributos(): number {
        let totalTributos = 0;
        for (const tributavel of this.tributaveis) {
            totalTributos += tributavel.calcularTributos();
        }
        return totalTributos;
    }
}

// Classe de Testes
class TesteAuditoria {
    static testarAuditoria(): void {
        // Instanciar várias classes ContaCorrente e SeguroDeVida
        const contaCorrente1 = new ContaCorrente("Cliente1", 2000);
        const contaCorrente2 = new ContaCorrente("Cliente2", 3000);
        const seguroVida1 = new SeguroDeVida();
        const seguroVida2 = new SeguroDeVida();

        // Criar uma instância da classe AuditoriaInterna
        const auditoria = new AuditoriaInterna();

        // Adicionar as instâncias ao array de tributáveis na classe AuditoriaInterna
        auditoria.adicionar(contaCorrente1);
        auditoria.adicionar(contaCorrente2);
        auditoria.adicionar(seguroVida1);
        auditoria.adicionar(seguroVida2);

        // Exibir o resultado do método calcularTributos
        console.log("Total de tributos calculados pela Auditoria Interna:", auditoria.calcularTributos());
    }
}

// Executar os testes
TesteAuditoria.testarAuditoria();

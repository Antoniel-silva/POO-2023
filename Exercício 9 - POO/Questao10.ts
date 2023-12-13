// 1. Classe abstrata Conta
abstract class Conta {
    private nome: string;
    private saldo: number;

    constructor(nome: string, saldo: number) {
        this.nome = nome;
        this.saldo = saldo;
    }

    // Métodos de acesso
    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getSaldo(): number {
        return this.saldo;
    }

    setSaldo(saldo: number): void {
        this.saldo = saldo;
    }

    // Comentário: O cálculo de tributos corresponde a 10% do saldo da Conta
    calcularTributos(): number {
        return this.saldo * 0.1;
    }
}

// 2. Interface Tributavel
interface Tributavel {
    calcularTributos(): number;
}

// 3. Classe ContaCorrente que herda de Conta e implementa a interface Tributavel
class ContaCorrente extends Conta implements Tributavel {
    // Implementação do cálculo de tributos para ContaCorrente (10% do saldo)
    calcularTributos(): number {
        return super.calcularTributos(); // Pode ser personalizado se necessário
    }
}

// 4. Classe SeguroDeVida que implementa somente a interface Tributavel
class SeguroDeVida implements Tributavel {
    // Implementação do cálculo de tributos para SeguroDeVida (R$ 50,00)
    calcularTributos(): number {
        return 50.0;
    }
}

// Exemplo de uso
const contaCorrente = new ContaCorrente("Cliente1", 2000);
const seguroVida = new SeguroDeVida();

// Calcula e exibe tributos
console.log("Tributos da Conta Corrente:", contaCorrente.calcularTributos());
console.log("Tributos do Seguro de Vida:", seguroVida.calcularTributos());

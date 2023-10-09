//Altere também a sua classe Conta dos exercícios anteriores para:
//a. Ter atributos privados e métodos “get” para leitura;
//b. Verifique se sua implementação da classe Banco e os testes precisarão ser
//adaptados para ter métodos de leitura e escrita, visto que os atributos que
//agora são privados.


//adicionando na classe conta com atributos privados

class Conta {
    private numero: string;
    private nome: string;
    private saldo: number;
  
    constructor(numero: string, nome: string, saldo: number) {
      this.numero = numero;
      this.nome = nome;
      this.saldo = saldo;
    }
  
    // Métodos "get" para leitura dos atributos privados
    public getNumero(): string {
      return this.numero;
    }
  
    public getNome(): string {
      return this.nome;
    }
  
    public getSaldo(): number {
      return this.saldo;
    }
  
    // Métodos de depósito, saque e transferência permanecem inalterados
    public depositar(valor: number): void {
      this.saldo += valor;
    }
  
    public sacar(valor: number): boolean {
      if (this.saldo >= valor) {
        this.saldo -= valor;
        return true;
      }
      return false;
    }
  
    public transferir(contaDestino: Conta, valor: number): boolean {
      if (this.sacar(valor)) {
        contaDestino.depositar(valor);
        return true;
      }
      return false;
    }
  }


//classe Banco e os testes adaptados para usar os métodos get

  class Banco {
    private contas: Conta[] = [];
  
    private consultarPorIndice(numero: string): number {
      let indiceProcurado: number = -1;
  
      for (let i: number = 0; i < this.contas.length; i++) {
        if (this.contas[i].getNumero() === numero) {
          indiceProcurado = i;
          break;
        }
      }
  
      return indiceProcurado;
    }
  
    public inserir(conta: Conta): void {
      this.contas.push(conta);
    }
  
    public consultar(numero: string): Conta | undefined {
      const indiceProcurado: number = this.consultarPorIndice(numero);
  
      if (indiceProcurado !== -1) {
        return this.contas[indiceProcurado];
      }
  
      return undefined;
    }
  
    public alterar(conta: Conta): void {
      const indiceProcurado: number = this.consultarPorIndice(conta.getNumero());
  
      if (indiceProcurado !== -1) {
        this.contas[indiceProcurado] = conta;
      }
    }
  
    public excluir(numero: string): void {
      const indiceProcurado: number = this.consultarPorIndice(numero);
  
      if (indiceProcurado !== -1) {
        this.contas.splice(indiceProcurado, 1);
      }
    }
  
    public sacar(numero: string, valor: number): void {
      const conta: Conta | undefined = this.consultar(numero);
  
      if (conta) {
        conta.sacar(valor);
      }
    }
  }
  
  // Testando as alterações
  let banco: Banco = new Banco();
  let conta1: Conta = new Conta("12345", "João", 1000);
  let conta2: Conta = new Conta("54321", "Maria", 500);
  
  banco.inserir(conta1);
  banco.inserir(conta2);
  
  console.log(banco.consultar("12345")?.getNome()); // Saída: João
  console.log(banco.consultar("54321")?.getSaldo()); // Saída: 500
  
  
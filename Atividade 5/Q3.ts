//Altere as implementações da classe Banco das aulas anteriores para que:
//a. O array de contas seja privado;
//b. O método consulta por índice seja privado;
//c. Os demais métodos sejam públicos.

class Banco {
    private contas: Conta[] = [];
  
    private consultarPorIndice(numero: string): number {
      let indiceProcurado: number = -1;
  
      for (let i: number = 0; i < this.contas.length; i++) {
        if (this.contas[i].numero === numero) {
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
  
      return undefined; // Retorna undefined se a conta não for encontrada
    }
  
    public alterar(conta: Conta): void {
      const indiceProcurado: number = this.consultarPorIndice(conta.numero);
  
      if (indiceProcurado !== -1) {
        this.contas[indiceProcurado] = conta;
      }
    }
  
    public excluir(numero: string): void {
      const indiceProcurado: number = this.consultarPorIndice(numero);
  
      if (indiceProcurado !== -1) {
        this.contas.splice(indiceProcurado, 1); // Remove a conta pelo índice
      }
    }
  
    public sacar(numero: string, valor: number): void {
      const conta: Conta | undefined = this.consultar(numero);
  
      if (conta) {
        conta.sacar(valor);
      }
    }
  }
  
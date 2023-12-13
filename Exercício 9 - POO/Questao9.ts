//continuando o codigo da questão anteriro . . . . . . 



class TesteFormasGeometricas {
    static testarComparacoes(): void {
        // Instâncias das formas geométricas
        const quadrado1 = new Quadrado(5);
        const quadrado2 = new Quadrado(4);

        const triangulo1 = new Triangulo(4, 3, 5, 4, 3);
        const triangulo2 = new Triangulo(3, 3, 4, 3, 4);

        

        const retangulo1 = new Retangulo(6, 8);
        const retangulo2 = new Retangulo(5, 7);

        // Teste de comparação
        this.exibirResultadoComparacao("Quadrados", quadrado1, quadrado2);
        this.exibirResultadoComparacao("Triângulos", triangulo1, triangulo2);
        this.exibirResultadoComparacao("Retângulos", retangulo1, retangulo2);
    }

    private static exibirResultadoComparacao(nomeForma: string, forma1: IComparavel, forma2: FiguraGeometrica): void {
        const resultado = forma1.comparar(forma2);
        console.log(`Comparação entre ${nomeForma}:`, resultado === 0 ? "Iguais" : resultado === -1 ? "Menor" : "Maior");
    }
}

// Executar o teste
TesteFormasGeometricas.testarComparacoes();

/*Comparação entre Quadrados: Maior
Comparação entre Triângulos: Maior
Comparação entre Círculos: Maior
Comparação entre Retângulos: Maior*/


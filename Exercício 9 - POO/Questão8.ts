// Interface para comparar formas geométricas
interface IComparavel {
    comparar(outraForma: FiguraGeometrica): number;
}

// Implementação para um Quadrado
class Quadrado implements FiguraGeometrica, IComparavel {
    lado: number;

    constructor(lado: number) {
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }

    calcularPerimetro(): number {
        return 4 * this.lado;
    }

    compara(outraForma: FiguraGeometrica): number {
        const minhaArea = this.calcularArea();
        const outraArea = outraForma.calcularArea();

        if (minhaArea < outraArea) {
            return -1;
        } else if (minhaArea > outraArea) {
            return 1;
        } else {
            return 0;
        }
    }
}

// Implementação para Triângulo
class Triangulo implements FiguraGeometrica, IComparavel {
    base: number;
    altura: number;
    lado1: number;
    lado2: number;
    lado3: number;

    constructor(base: number, altura: number, lado1: number, lado2: number, lado3: number) {
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }

    calcularPerimetro(): number {
        return this.lado1 + this.lado2 + this.lado3;
    }

    compara(outraForma: FiguraGeometrica): number {
        const minhaArea = this.calcularArea();
        const outraArea = outraForma.calcularArea();

        if (minhaArea < outraArea) {
            return -1;
        } else if (minhaArea > outraArea) {
            return 1;
        } else {
            return 0;
        }
    }
}



// Implementação para Retângulo
class Retangulo implements FiguraGeometrica, IComparavel {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.base * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.base + this.altura);
    }

    compara(outraForma: FiguraGeometrica): number {
        const minhaArea = this.calcularArea();
        const outraArea = outraForma.calcularArea();

        if (minhaArea < outraArea) {
            return -1;
        } else if (minhaArea > outraArea) {
            return 1;
        } else {
            return 0;
        }
    }
}


// Instâncias das formas geométricas quadado e as demais
let quadrado1 = new Quadrado(5);
let quadrado2 = new Quadrado(4);

let triangulo1 = new Triangulo(4, 3, 5, 4, 3);
let triangulo2 = new Triangulo(3, 3, 4, 3, 4);



let retangulo1 = new Retangulo(6, 8);
let retangulo2 = new Retangulo(5, 7);


// Teste de comparação
console.log("Comparação entre quadrados:", quadrado1.compara(quadrado2));
console.log("Comparação entre triângulos:", triangulo1.compara(triangulo2)); 
console.log("Comparação entre retângulos:", retangulo1.compara(retangulo2)); 


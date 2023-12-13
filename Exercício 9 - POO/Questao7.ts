// Interface para FiguraGeometrica

interface FiguraGeometrica {
    calcularArea(): number;
    calcularPerimetro(): number;
}




// Implementação para Quadrado
class Quadrado implements FiguraGeometrica {
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
}




// Implementação para Triângulo
class Triangulo implements FiguraGeometrica {
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
}





// Implementação para Retângulo
class Retangulo implements FiguraGeometrica {
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
}

// Script de teste
const quadrado = new Quadrado(5);
console.log("Área do quadrado:", quadrado.calcularArea()); // Saída: 25
console.log("Perímetro do quadrado:", quadrado.calcularPerimetro()); // Saída: 20

const triangulo = new Triangulo(4, 3, 5, 4, 3);
console.log("Área do triângulo:", triangulo.calcularArea()); // Saída: 6
console.log("Perímetro do triângulo:", triangulo.calcularPerimetro()); // Saída: 12


const retangulo = new Retangulo(6, 8);
console.log("Área do retângulo:", retangulo.calcularArea()); // Saída: 48
console.log("Perímetro do retângulo:", retangulo.calcularPerimetro()); // Saída: 28

//aki é a classe abstrata para Figura Geometrica



abstract class FiguraGeometrica {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
}


//aqui é a Classe concreta para Quadrado
class Quadrado_ extends FiguraGeometrica {
    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }

    calcularPerimetro(): number {
        return 4 * this.lado;
    }
}

//aqui é Classe concreta para Triangulo
class Triangulo_ extends FiguraGeometrica {
    base: number;
    altura: number;
    lado1: number;
    lado2: number;
    lado3: number;

    constructor(base: number, altura: number, lado1: number, lado2: number, lado3: number) {
        super();
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



// Classe concreta para Retângulo
class Retangulo_ extends FiguraGeometrica {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        super();
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

// Exemplo de uso
const retangulo_ = new Retangulo_(6, 8);
console.log("Área do retângulo:", retangulo_.calcularArea()); // Saída: 48
console.log("Perímetro do retângulo:", retangulo_.calcularPerimetro()); // Saída: 28


const quadrado_ = new Quadrado_(5);
console.log("Área do quadrado:", quadrado_.calcularArea()); // 25
console.log("Perímetro do quadrado:", quadrado_.calcularPerimetro()); // 20

const triangulo_ = new Triangulo_(4, 3, 5, 4, 3);
console.log("Área do triângulo:", triangulo_.calcularArea()); // 6
console.log("Perímetro do triângulo:", triangulo_.calcularPerimetro()); // 12

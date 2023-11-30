// Codigo para o exemplo: Mensagem de erro para usuário

function dividir(a: number, b: number): number{
    if (b ===0 ) {
        console.log("A divisão por zero não é possivel.")
    }
    
    return a /b

}

console.log(dividir(10,0))






// codigo para o exemplo: retornar codigo de erro:

function verificarNumeroPositivo(numero: number): { erro: boolean, mensagem?: string } {
    if (numero < 0) {
        return { erro: true, mensagem: "O número não pode ser negativo." };
    }
    return { erro: false };
}

// Exemplo de uso
const resultado1 = verificarNumeroPositivo(10);
if (resultado1.erro) {
    console.error("Erro: " + resultado1.mensagem);
} else {
    console.log("Número verificado com sucesso.");
}

const resultado2 = verificarNumeroPositivo(-5);
if (resultado2.erro) {
    console.error("Erro: " + resultado2.mensagem);
} else {
    console.log("Número verificado com sucesso.");
}


// exemplos usando exceções

function dividirNumero(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Não é possível dividir por zero.");
    }
    return a / b;
}

// Exemplo de uso com tratamento de exceção
try {
    const resultado1 = dividir(10, 2);
    console.log("Resultado da divisão:", resultado1);

    const resultado2 = dividir(5, 0);
    console.log("Este código não será alcançado.");
} catch (erro) {
    console.error("Erro durante a divisão:", erro.message);
}


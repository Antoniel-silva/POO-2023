// Codigo para o exemplo: Mensagem de erro para usuário
function dividir(a, b) {
    if (b === 0) {
        console.log("A divisão por zero não é possivel.");
    }
    return a / b;
}
console.log(dividir(10, 0));

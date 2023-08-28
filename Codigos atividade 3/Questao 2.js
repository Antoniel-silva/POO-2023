function primo(num) {
    var contador = 0;
    for (var i = num; i > 0; i--) {
        if (num % i === 0) {
            contador++;
        }
    }
    if (contador > 2) {
        return false;
    }
    else {
        return true;
    }
}
console.log(primo(397));

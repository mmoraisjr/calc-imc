function calculaImc(peso, altura) {
    var imc;

    if (peso <= 0 || peso >= 350) {
        valorImc.textContent = "Valor do Peso Inválido";
        resultado.classList.add("valor-invalido");
    } else if (altura <= 0 || altura >= 2.5) {
        valorImc.textContent = "Valor da Altura Inválida";
        resultado.classList.add("valor-invalido");
    } else {
        var imc = peso / (altura * altura);
    }

    return imc.toFixed(2);
}
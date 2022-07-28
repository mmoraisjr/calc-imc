function calculaImc(peso, altura) {
    var imc;
    var resultado = document.querySelector(".resultado__tabela");
    var valorImc = resultado.querySelector(".info-imc");
    var msgImc = resultado.querySelector(".msg-imc");

    if (peso <= 0 || peso >= 250) {
        valorImc.textContent = "Peso Inválido";
    } else if (altura <= 0 || altura >= 2.5) {
        valorImc.textContent = "Altura Inválida";
    } else {
        var imc = peso / (altura * altura);
        // if (imc <= 18.4) {
        //     msgImc.textContent = "Magreza";
        // } else if (imc >= 18.5 && imc <= 24.9) {
        //     msgImc.textContent = "Normal";
        // } else if (imc >= 25 && imc <= 29.9) {
        //     msgImc.textContent = "Sobrepeso";
        // } else if (imc >= 30 && imc <= 34.9) {
        //     msgImc.textContent = "Obesidade grau I";
        // } else if (imc >= 35 && imc <= 39.9) {
        //     msgImc.textContent = "Obesidade grau II";
        // } else {
        //     msgImc.textContent = "Obesidade grau III";
        // }
    }

    return imc.toFixed(2);
}
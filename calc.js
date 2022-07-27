var resultado = document.querySelector(".resultado__tabela");

var valorPeso = resultado.querySelector(".info-peso");
var peso = valorPeso.textContent;

var valorAltura = resultado.querySelector(".info-altura");
var altura = valorAltura.textContent;

var valorImc = resultado.querySelector(".info-imc");

if (peso <= 0 || peso >= 350) {
    valorImc.textContent = "Valor do Peso Inválido";
    resultado.classList.add("valor-invalido");
} else if (altura <= 0 || altura >= 2.5) {
    valorImc.textContent = "Valor da Altura Inválida";
    resultado.classList.add("valor-invalido");
} else {
    var imc = peso / (altura * altura);
    valorImc.textContent = imc.toFixed(2);
}
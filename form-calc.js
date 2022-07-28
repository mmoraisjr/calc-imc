// var resultado = document.querySelector(".resultado__tabela");

// var valorPeso = resultado.querySelector(".info-peso");
// var peso = valorPeso.textContent;

// var valorAltura = resultado.querySelector(".info-altura");
// var altura = valorAltura.textContent;

// var valorImc = resultado.querySelector(".info-imc");

var btnCalcula = document.querySelector("#calc-imc");
btnCalcula.addEventListener("click", function (event) {
    event.preventDefault();

    var valorForm = document.querySelector(".form-calc");
    var peso = valorForm.peso.value;
    var altura = valorForm.altura.value;
    
    var resultado = document.querySelector(".resultado__tabela");
    var valorPeso = resultado.querySelector(".info-peso");
    var valorAltura = resultado.querySelector(".info-altura");
    var valorImc = resultado.querySelector(".info-imc");
    
    valorPeso.textContent = peso
    valorAltura.textContent = altura;
    valorImc.textContent = calculaImc(peso,altura);
    
});
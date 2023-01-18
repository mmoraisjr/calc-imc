const btnCalcula = document.querySelector("#calc-imc");
const btnLimpar = document.querySelector("#limpar");

btnCalcula.addEventListener("click", function (event) {
    event.preventDefault();

    var valorForm = document.querySelector(".form-calc");
    var peso = valorForm.peso.value;
    var altura = valorForm.altura.value;
    
    var resultadoValores = document.querySelector(".resultado__valores");
    var valorPeso = resultadoValores.querySelector(".info-peso");
    var valorAltura = resultadoValores.querySelector(".info-altura");
    var valorImc = resultadoValores.querySelector(".info-imc");
    
    valorPeso.textContent = peso
    valorAltura.textContent = altura;
    valorImc.textContent = calculaImc(peso,altura).toFixed(2);
});


btnLimpar.addEventListener("click", (event) => {
    event.preventDefault();

    var altura = document.querySelector("#altura")
    var peso = document.querySelector("#peso")
    peso.value = "";
    altura.value = "";
})
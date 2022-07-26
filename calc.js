var botaoCalcular = document.querySelector("#calcular");
botaoCalcular.addEventListener("click", function(event){
    event.preventDefault(); 

    var form = document.querySelector("#form-calc"); 

    var resultado = obtemValoresDoForm(form);
    console.log(resultado);

    // var pacienteTr = montaTr(paciente);

    // var tabela = document.querySelector("#tabela-pacientes"); 
    // tabela.appendChild(pacienteTr); 

    // form.reset();
})

function obtemValoresDoForm(form){ 
    var resultado = {
        peso: form.peso.value,
        altura: form.altura.value,
        // imc: calculaImc(form.peso.value, form.altura.value)
    }
    
    return resultado;
}
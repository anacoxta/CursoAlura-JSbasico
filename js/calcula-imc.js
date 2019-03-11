/*
    OBSERVAÇÃO:
    CÓDIGO EXAGERADAMENTE COMENTADO PARA FINS DIDÁTICOS
*/

var titulo = document.querySelector(".titulo"); //> busca o elemento com classe 'titulo' e atribui à var
titulo.textContent = "Aparecida Nutricionista"; //replaces the content inside the h1 tag

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 600) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdPeso.textContent = "Peso inválido";
        //paciente.style.backgroundColor = "lightcoral"; //muda o estilo via JS
        paciente.classList.add("campo-invalido");
    }
    
    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdAltura.textContent = "Altura inválida";
        //paciente.style.backgroundColor = "lightcoral"; //muda o estilo via JS 
        paciente.classList.add("campo-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Corrija o(s) dado(s) inválido(s)."
    }

}

function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura **2);
    return imc.toFixed(2);
}
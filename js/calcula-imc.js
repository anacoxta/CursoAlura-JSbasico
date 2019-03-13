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

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdPeso.textContent = "Peso inválido";
        //paciente.style.backgroundColor = "lightcoral"; //muda o estilo via JS
        paciente.classList.add("campo-invalido");
    }
    
    if (!alturaEhValida) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdAltura.textContent = "Altura inválida";
        //paciente.style.backgroundColor = "lightcoral"; //muda o estilo via JS 
        paciente.classList.add("campo-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    } else if (alturaEhValida || pesoEhValido) {
        tdImc.textContent = "Corrija o dado inválido"
    } else {
        tdImc.textContent = "Corrija os dados inválidos"
    }

}

function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura **2);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 700) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 2.75) {
        return true;
    } else {
        return false;
    }
}
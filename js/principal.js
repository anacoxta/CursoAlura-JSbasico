var titulo = document.querySelector(".titulo"); //> busca o elemento com classe 'titulo' e atribui à var
titulo.textContent = "Aparecida Nutricionista"; //replaces the content inside the h1 tag

var paciente = document.querySelector("#primeiro-paciente");
  
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 600) {
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3) {
    console.log("Altura inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
}

//Existe um claro problema de verificação nesta solução, oferecida pelo curso (pelo menos até este ponto).
//Se ambos peso e altura forem inválidos, a verificação no console.log indicará os dois erros...
//...mas o preenchimento da tabela só mostrará "Altura inválida"

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura **2); //**2 = ao quadrado (es6)
    tdImc.textContent = imc;
}
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
        var imc = peso / (altura **2); //**2 = ao quadrado (es6)
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Corrija o(s) dado(s) inválido(s)."
    }

}

/* ====== MODELO DE FUNÇÃO DE EVENTO ========

var botao = document.querySelector("#botao")

1) Declarando função à parte:
    funcaoSeparada() {
        console.log("mensagem");
    };
    botao.addEventListener("click", funcaoSeparada);

2) Usando função anônima:
    botao.addEventListener("click", function(){
        console.log("mensagem");
    });

============================================ */

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(cliqueBotao) {
    cliqueBotao.preventDefault();
    //variaveis abaixo armazenam os dados de cada campo
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    //criando novos elementos (linha e células de tabela) para receber os dados inputados
    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    //passando os valores dos inputs pras celulas
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    //adicionando cada célula TD dentro da linha TR
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    //selecionar a tabela pelo ID e adicionar a linha TR como filha
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});
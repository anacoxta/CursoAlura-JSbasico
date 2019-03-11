/*
    OBSERVAÇÃO:
    CÓDIGO EXAGERADAMENTE COMENTADO PARA FINS DIDÁTICOS
*/



// ============= CLIQUE NO BOTÃO DEFLAGRA AÇÕES ==================

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(cliqueBotao) {
    cliqueBotao.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacientedoForm(form);
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    //reset limpa os campos após a ação
    form.reset(); 
});



// ======================== AÇÕES ===============================

// Puxa do form os dados do paciente e organiza em um objeto:
// ---> object {nome: "v", peso: "w", altura: "x", gordura: "y", imc: "z"}
function obtemPacientedoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }
    return paciente;
}

// monta linha tr +
// monta células td +
// appendChild células→linha +
// adiciona classes css:
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // função montaTd tem três utilidades:
    //   1) cria o td
    //   2) passa textContent pro param1
    //   3) adiciona a classe (param2)    
    // appendChild coloca cada célula TD dentro da linha TR
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td"); // 1) cria o td
    td.textContent = dado; // 2) passa textContent pro param1
    td.classList.add(classe); // 3) adiciona a classe (param2)

    return td;
}
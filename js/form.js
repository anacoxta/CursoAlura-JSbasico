/*
    DEVELOPER'S NOTE:
    OVERLY COMMENTED CODE FOR EDUCATIONAL PURPOSES
*/



// ============= CLIQUE NO BOTÃO DEFLAGRA AÇÕES ==================

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(cliqueBotao) {
    cliqueBotao.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacientedoForm(form);
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        //console.log(erros);
        exibeMensagensDeErro(erros);
        return;
    }

    if (!validaPaciente(paciente)) {
        //console.log("Erro. Verifique os dados.");
        return; //force quit a função sem inserir na tabela
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    //reset limpa os campos após a ação
    form.reset(); 

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""; //zera as mensagens de erro após adicionar um paciente com sucesso
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

// função montaTd tem três utilidades:
function montaTd(dado, classe) {
    var td = document.createElement("td"); // 1) cria o td
    td.textContent = dado;                 // 2) passa textContent pro param1
    td.classList.add(classe);              // 3) adiciona a classe (param2)  
    return td;
}

// monta linha tr +
// adiciona classes css +
// roda função montaTd +
// appendChild células→linha +
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

// faz validação do form usando dados do objeto paciente,
// gerado pela função obtemPacienteDoForm
function validaPaciente(paciente) {

    // cria um array vazio que vai receber zero, uma ou duas mensagens de erro.
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("Preencha o campo 'nome'")
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido. "); //empurra pra dentro do array
    }

    if (paciente.peso.length == 0) {
        erros.push("Preencha o campo 'peso'")
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida. ") //empurra pra dentro do array
    }

    if (paciente.altura.length == 0) {
        erros.push("Preencha o campo 'altura'")
    }


    if (paciente.gordura.length == 0) {
        erros.push("Preencha o campo 'gordura'")
    }

    return erros; //retorna o array montado
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");

    // em vez de usar loop for:
    /* for (var i=0; i < erros.length; i++) {...etc...} */
    // vamos usar forEach:

    ul.innerHTML = ""; //impede que acumule mensagens de erro, porque zera os 'li' a cada clique no botão

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}



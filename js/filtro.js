/*
    DEVELOPER'S NOTE:
    OVERLY COMMENTED CODE FOR EDUCATIONAL PURPOSES
*/

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    //acesso ao conteúdo de texto do campo de filtragem:
    //console.log(this.value)

    var linha = document.querySelectorAll(".paciente")
    
    //se algo for digitado no filtro
    if (this.value.length > 0) {

        // acesso ao nome de todos os pacientes da tabela:
        for (var i=0; i < linha.length; i++) {
            var paciente = linha[i];
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent;

            // param1 = o texto que queremos buscar (this.value),
            // param2 = referente às características dos termos que devem ser buscados
            // ("i" para *case insentitive*)
            var expressao = new RegExp(this.value, "i")
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i <linha.length; i++) {
            var paciente = linha[i];
            paciente.classList.remove("invisivel")
        }
    }

    
})
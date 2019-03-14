/*
    DEVELOPER'S NOTE:
    OVERLY COMMENTED CODE FOR EDUCATIONAL PURPOSES
*/

// ========= DUPLO-CLIQUE NO BOTÃO DEFLAGRA AÇÕES =============

// a tentativa comentada abaixo apresenta um problema:
// com ela, é posível remover as linhas criadas pelo arquivo html
// mas não as linhas criadas com o formulário

/*
var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick" , function() {
        this.remove();
    });
});
*/

// O código a seguir se utiliza do conceito de EVENT BUBBLING
// para propagar o evento de duplo clique

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    // console.log(event.target); //> puxa a célula <td> clicada
    // console.log(event.target.parentNode); //o parentNode da célula <td> puxa a linha <tr>

    event.target.parentNode.classList.add("fade-out");
    
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
});
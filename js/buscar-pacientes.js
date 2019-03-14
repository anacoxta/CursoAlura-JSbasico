/*
    DEVELOPER'S NOTE:
    OVERLY COMMENTED CODE FOR EDUCATIONAL PURPOSES
*/

var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function() {
    // XMLHttpRequest é utilizado para fazer requisições assíncronas
    // (pode ser usado para outros tipos de arquivo além de XML)
    var xhr = new XMLHttpRequest(); 
    
    //'open' indica requisição, 'get' é o método de requisição html
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes") 

    //para acessarmos os dados da resposta, usaremos a propriedade responseText do XMLHttpRequest
    xhr.addEventListener("load", function() {

        var erroAjax = document.querySelector("#erro-ajax")

        if (xhr.status ==200) {
            var resposta = xhr.responseText
            //console.log(typeof resposta) //>string (arquivo JSON)
    
            // usando o parseador, transformaremos essa string em um array de objetos:
            var pacientes = JSON.parse(resposta)
            //console.log(pacientes) //>array [{...}, {...}, etc]
            //console.log(typeof pacientes) //>object
    
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            })
        } else {
            console.log(xhr.status)
            console.log(xhr.responseText)
            erroAjax.classList.remove("invisivel")
            erroAjax.classList.add("mensagens-erro")
        }

    })

    xhr.send(); //inicia a requisição
})
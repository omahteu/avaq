import {urlInsercao} from "../urls.js"

$(document).on("click", "#respondendo", function() {
    let sufixo = $(this).attr("data-toggle")
    let ide = `#exerciciosalunos${sufixo}`
    let respostas = $(ide).serialize()
    console.log(respostas)
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: `${urlInsercao}correcoesexercicios.php`,
        async: true,
        data: respostas
    });
    alert("Exercício corrigido com sucesso!")
    location.reload()
})

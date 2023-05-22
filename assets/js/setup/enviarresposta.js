import {urlInsercao} from "../urls.js"

$(document).on("click", "#respondendo", function() {
    let sufixo = $(this).attr("data-toggle")
    let ide = `#exerciciosalunos${sufixo}`
    let respostas = $(ide).serialize()
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: `${urlInsercao}respostaexercicios.php`,
        async: true,
        data: respostas
    });
    alert("Exercício respondido com sucesso!")
    location.reload()
})

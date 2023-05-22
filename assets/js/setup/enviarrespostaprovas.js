import {urlInsercao} from "../urls.js"

$(document).on("click", "#respondendo", function() {
    let sufixo = $(this).attr("data-toggle")
    let ide = `#exerciciosalunos${sufixo}`
    let respostas = $(ide).serialize()
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: `${urlInsercao}provas.php`,
        async: true,
        data: respostas
    });
    alert("Avaliação respondida com sucesso!")
    location.reload()
})

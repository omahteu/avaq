import {urlInsercao} from "./urls.js"

$(document).on("click", "#comentar", function() {
    let respostas = $("#comentarios").serialize()
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: `${urlInsercao}chat.php`,
        async: true,
        data: respostas
    });
    $("#comentarios"). each (function(){ this. reset(); })
    alert("Exercício respondido com sucesso!")
})

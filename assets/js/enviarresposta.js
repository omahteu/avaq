import {urlAlteracao} from "./urls.js"

$(document).on("click", "#responderchat", function() {
    let respostas = $("#respondendochat").serialize()
    console.log(respostas)
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: `${urlAlteracao}responderchat.php`,
        async: true,
        data: respostas
    });
    alert("Respondido com sucesso!")
    location.reload()
})

$(document).on("click", "#respondendo", function() {
    let sufixo = $(this).attr("data-toggle")
    let ide = `#exerciciosalunos${sufixo}`
    let respostas = $(ide).serialize()
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: "http://localhost/avaq/assets/php/insert/correcoesexercicios.php",
        async: true,
        data: respostas
    });
    $(ide). each (function(){ this. reset(); })
    alert("Exercício corrigido com sucesso!")
})

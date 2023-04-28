$(document).on("click", "#respondendo", function() {
    let sufixo = $(this).attr("data-toggle")
    let respostas = $(`#exerciciosalunos${sufixo}`).serialize()
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: "http://localhost/avaq/assets/php/insert/respostaexercicios.php",
        async: true,
        data: respostas
    });
    document.getElementById(`#exerciciosalunos${sufixo}`).reset()
    alert("Exercício respondido com sucesso!")
})

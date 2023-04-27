$(document).on("click", "#respondendo", function() {
    let respostas = $("#exerciciosalunos").serialize()
    alert(respostas)
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: "http://localhost/avaq/assets/php/insert/respostaexercicios.php",
        async: true,
        data: dadosPhp
    });
    document.getElementById("exerciciosalunos").reset()
    alert("Exercício respondido com sucesso!")
})
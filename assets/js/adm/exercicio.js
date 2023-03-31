$(document).on("click", "#salvar", function() {
    const dd = $("#add_exercicio").serialize()
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: "http://localhost/Suites/php/configuracoes/igs.php",
        async: true,
        data: dd
    });
    document.getElementById("add_exercicio").reset()
})

$(document).on("click", "#responderchat", function() {
    let respostas = $("#respondendochat").serialize()
    console.log(respostas)
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: "http://localhost/avaq/assets/php/update/responderchat.php",
        async: true,
        data: respostas
    });
    alert("Respondido com sucesso!")
    location.reload()
})

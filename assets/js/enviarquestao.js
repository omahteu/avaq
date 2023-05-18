$(document).on("click", "#comentar", function() {
    let respostas = $("#comentarios").serialize()
    console.log(respostas)
    // $.ajax({
    //     type: 'POST',
    //     dataType: 'json',
    //     url: "http://localhost/avaq/assets/php/insert/chat.php",
    //     async: true,
    //     data: respostas
    // });
    // $("#comentarios"). each (function(){ this. reset(); })
    // alert("Exercício respondido com sucesso!")
})

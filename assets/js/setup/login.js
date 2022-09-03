

$("#acessar").click(function(){
    let usuario = $("#usuario").val()
    let senha = $(("#senha")).val()
    
    if(usuario == "prof" && senha == "123"){
        $(location).attr('href', "./professor.html")
    } else if(usuario == "aluno" && senha == "123"){
        $(location).attr("href", "./aluno.html")
    } else {
        alert("Login Inválido!")
    }
})
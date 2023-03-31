$(document).ready(function(){
    const user = sessionStorage.getItem("logado")
    $("#usuario_logado").text(user)
})
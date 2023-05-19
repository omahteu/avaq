$(document).on("click", "#sair", function() {
    sessionStorage.removeItem("logado")
    sessionStorage.removeItem("disc")
    sessionStorage.removeItem("tipo")
    window.location.href = "http://localhost/avaq/"
})

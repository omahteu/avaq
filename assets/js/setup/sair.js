import { home } from "../urls.js"

$(document).on("click", "#sair", function() {
    sessionStorage.removeItem("logado")
    sessionStorage.removeItem("disc")
    sessionStorage.removeItem("tipo")
    window.location.href = home
})

$(document).on("click", "#sairchar", function() {
    let tipo = sessionStorage.getItem("tipo")

    if (tipo == "professor") {
        window.location.href = "./professor.html"
    } else {
        window.location.href = "./aluno.html"
    }
})

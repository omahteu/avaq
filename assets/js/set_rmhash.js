import {hash} from "./adm/gerarhash.js"

$(document).on("change", "#disciplinas", function() {
    let rm = sessionStorage.getItem("logado")
    let hs = hash()
    $("#comentarios").append(`<input type="text" name="rm" id="rm" value="${rm}" hidden>`)
    $("#comentarios").append(`<input type="text" name="hash" id="hash" value="${hs}" hidden>`)
})

import {urlHomologacaoLeitura} from "../urls.js"
import dataHoje from "./hoje.js"

$(document).ready(function() {
    notificacoes()
})

async function notificacoes() {
    const rq = await fetch(`${urlHomologacaoLeitura}datas.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        let dados = rs["dados"][0]
        let hoje = String(dataHoje())

        if (moment(hoje).isSame(String(dados["modulo1"]))) {
            sessionStorage.setItem("modulo", "1")
        } else if (moment(hoje).isAfter(String(dados["modulo1"])) && moment(hoje).isBefore(String(dados["modulo2"]))) {
            sessionStorage.setItem("modulo", "1")
        } else if (moment(hoje).isSame(String(dados["modulo2"]))) {
            sessionStorage.setItem("modulo", "2")
        } else if (moment(hoje).isAfter(String(dados["modulo2"])) && moment(hoje).isBefore(String(dados["modulo3"]))) {
            sessionStorage.setItem("modulo", "2")
        } else if (moment(hoje).isSame(String(dados["modulo3"]))) {
            sessionStorage.setItem("modulo", "3")
        } else if (moment(hoje).isAfter(String(dados["modulo3"])) && moment(hoje).isBefore(String(dados["modulo4"]))) {
            sessionStorage.setItem("modulo", "3")
        } else if (moment(hoje).isSame(String(dados["modulo4"]))) {
            sessionStorage.setItem("modulo", "4")
        } else if (moment(hoje).isAfter(String(dados["modulo4"])) && moment(hoje).isBefore(String(dados["modulo5"]))) {
            sessionStorage.setItem("modulo", "4")
        } else if (moment(hoje).isSame(String(dados["modulo5"]))) {
            sessionStorage.setItem("modulo", "5")
        } else if (moment(hoje).isAfter(String(dados["modulo5"])) && moment(hoje).isBefore(String(dados["modulo6"]))) {
            sessionStorage.setItem("modulo", "5")
        } else if (moment(hoje).isSame(String(dados["modulo6"]))) {
            sessionStorage.setItem("modulo", "6")
        } else if (moment(hoje).isAfter(String(dados["modulo6"])) && moment(hoje).isBefore(String(dados["final"]))) {
            sessionStorage.setItem("modulo", "6")
        } else if (moment(hoje).isSame(String(dados["final"]))) {
            sessionStorage.setItem("modulo", "off")
        }
    }
}

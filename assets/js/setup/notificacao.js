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
            console.log('ativar1')
        } else if (moment(hoje).isAfter(String(dados["modulo1"])) && moment(hoje).isBefore(String(dados["modulo2"]))) {
            console.log('ativar1')
        } else if (moment(hoje).isSame(String(dados["modulo2"]))) {
            console.log('ativar2')
        } else if (moment(hoje).isAfter(String(dados["modulo2"])) && moment(hoje).isBefore(String(dados["modulo3"]))) {
            console.log('ativar2')
        } else if (moment(hoje).isSame(String(dados["modulo3"]))) {
            console.log('ativar3')
        } else if (moment(hoje).isAfter(String(dados["modulo3"])) && moment(hoje).isBefore(String(dados["modulo4"]))) {
            console.log('ativar3')
        } else if (moment(hoje).isSame(String(dados["modulo4"]))) {
            console.log('ativar4')
        } else if (moment(hoje).isAfter(String(dados["modulo4"])) && moment(hoje).isBefore(String(dados["modulo5"]))) {
            console.log('ativar4')
        } else if (moment(hoje).isSame(String(dados["modulo5"]))) {
            console.log('ativar5')
        } else if (moment(hoje).isAfter(String(dados["modulo5"])) && moment(hoje).isBefore(String(dados["modulo6"]))) {
            console.log('ativar5')
        } else if (moment(hoje).isSame(String(dados["modulo6"]))) {
            console.log('ativar6')
        } else if (moment(hoje).isAfter(String(dados["modulo6"])) && moment(hoje).isBefore(String(dados["final"]))) {
            console.log('ativar6')
        } else if (moment(hoje).isSame(String(dados["final"]))) {
            console.log('bloquear')
        }
    }
}

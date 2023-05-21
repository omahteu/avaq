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

        if (moment(hoje).isSame(String(dados["aulas_mod1"]))) {
            console.log('ativar')
        } else if (moment(hoje).isAfter(String(dados["aulas_mod1"])) && moment(hoje).isBefore(String(dados["aulas_mod2"]))) {
            console.log('ativar2')
        }

    }
}

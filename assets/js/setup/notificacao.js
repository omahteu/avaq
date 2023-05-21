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

        console.log()

        if (moment(String(dataHoje())).isSame(String(dados["aulas_mod1"]))) {
            console.log('ativar')
        } else if (moment(String(dataHoje())).isAfter(String(dados["aulas_mod1"]))) {
            console.log(ativar)
        }

        // if(moment(String(dataHoje())).isSame(String(dataHoje())))
        //     alert("Yep!");
    }
}


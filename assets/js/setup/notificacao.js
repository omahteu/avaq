import {urlHomologacaoLeitura} from "../urls.js"

$(document).ready(function() {
    notificacoes()
})

async function notificacoes() {
    const rq = await fetch(`${urlHomologacaoLeitura}datas.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        let dados = rs["dados"]
        
    }
}
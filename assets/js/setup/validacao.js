import {urlHomologacaoLeitura, home} from "../urls.js"

$(document).ready(function() {
    validando()
})

async function validando() {
    const rq = await fetch(`${urlHomologacaoLeitura}usuarios.php`)
    const rs = await rq.json()
    let flag = sessionStorage.getItem("logado")
    
    if (flag == null) {
        window.location.href = home
    } else {
        if (rs["status"]) {
            let dados = rs["dados"]
            let filt = dados.filter(x => x.usuario == flag)
            if (filt.length == 0) {
                window.location.href = home
            }
        }
    }
}

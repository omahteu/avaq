async function ler_notificacoes(){
    const rq = await fetch("")
    const rs = await rq.json()
    const us = sessionStorage.getItem("logado")

    if (rs.filter(x => x.remetente == us)) {
        console.log(rs)
    }
}

$(document).ready(function() {
    ler_notificacoes()
})

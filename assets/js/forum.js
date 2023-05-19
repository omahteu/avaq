import {urlHomologacaoLeitura} from "./urls.js"

$(document).ready(function() {
    forum()
})

async function forum() {
    const rq = await fetch(`${urlHomologacaoLeitura}chats.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        let dados = rs["dados"]
        let tabe = document.getElementById("forum_catalogado")
        tabe.innerHTML = ""
        dados.forEach(e => {
            tabe.innerHTML +=   `
                                <tr>
                                    <td>${e.hashe}</td>
                                    <td>${e.dia}</td>
                                    <td>${e.rm}</td>
                                    <td>${e.disciplina}</td>
                                    <td>${e.mensagem}</td>
                                    <td>${e.resposta}</td>
                                </tr>
                                `
        });
    }
}
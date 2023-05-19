$(document).ready(function () {
    formatchat()
    chats_ativos()
})

function formatchat() {
    $("#chats_tabs").html(
        `
        <thead>
            <tr>
                <th>ID</th>
                <th>Aluno(a)</th>
                <th>Data</th>
                <th>Mensagem</th>
                <th>Resposta</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="listar_chats_abertos"></tbody>
        `
    )
}

async function chats_ativos() {
    const rq = await fetch("http://localhost/avaq/assets/php/read/chats.php")
    const rs = await rq.json()
    const nome = sessionStorage.getItem("logado")
    const disc = sessionStorage.getItem("disciplina")
    const tipo = sessionStorage.getItem("tipo")
    if (rs["status"]) {
        let dados = rs["dados"]
        var chats = document.getElementById("listar_chats_abertos")
        chats.innerHTML = ""
        let filtrando_disciplina = dados.filter(x => x.disciplina == disc)
        if (filtrando_disciplina.length > 0) {
            let filtrando_respostas = filtrando_disciplina.filter(e => e.resposta == "")
            filtrando_respostas.forEach(i => {
                chats.innerHTML += `
                                    <tr>
                                        <td>${i.hashe}</td>
                                        <td>${i.rm}</td>
                                        <td>${i.dia}</td>
                                        <td>${i.mensagem}</td>
                                        <td>
                                            <form method="post" id="respondendochat">
                                                <input type="text" id="hashemsg" name="hashemsg" value="${i.hashe}" readonly hidden>
                                                <textarea class="form-control" name="resp" id="resp" rows="3"></textarea><br>
                                                <button type="button" class="btn btn-primary" id="responderchat">Responder</button>
                                            </form>
                                        </td>
                                    </tr>

                                    `
            });
        }
    }
}

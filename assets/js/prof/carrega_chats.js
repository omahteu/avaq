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
                <th>Remetente</th>
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
    const disc = sessionStorage.getItem("disc")
    const tipo = sessionStorage.getItem("tipo")
    if (rs["status"]) {
        let dados = rs["dados"]
        var chats = document.getElementById("listar_chats_abertos")
        chats.innerHTML = ""
        let filtrando_chats_abertos = dados.filter(e => e.resposta == "")
        if (tipo == "professor") {
            let f_c_a_p = filtrando_chats_abertos.filter(p => p.disciplina.length <= 3)
            let filtrando_disciplina = f_c_a_p.filter(x => x.disciplina == disc)
            filtrando_disciplina.forEach(i => {
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
        } else {
            let f_c_a_a = filtrando_chats_abertos.filter(p => p.disciplina.length > 3)
            let filtrando_remetente = f_c_a_a.filter(x => x.disciplina == nome)
            filtrando_remetente.forEach(i => {
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

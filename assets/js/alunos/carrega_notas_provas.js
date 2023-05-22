import { disc } from "../disciplinas.js";
import {urlHomologacaoLeitura} from "../urls.js"

$(document).ready(function () {
    carregar();
});

async function carregar() {
    var caixa1 = [];
    const rq1 = await fetch(`${urlHomologacaoLeitura}notas_provas.php`);
    const rs1 = await rq1.json();
    let nome = sessionStorage.getItem("logado");
    if (rs1["status"]) {
        let res1 = rs1["dados"];
        let filtro = res1.filter(x => x.rm == nome)
        let tabe = document.getElementById("lista_notas_aluno_provas")
        tabe.innerHTML = ""
        filtro.forEach(e => {
            tabe.innerHTML += `<tr></tr>
                                    <td>Avaliação</td>
                                    <td>${disc[e.disciplina]}</td>
                                    <td>${e.nota}</td>
                                <tr></tr>`
        });
    } else {
        sessionStorage.setItem("empty", "requisição voltou vázia");
    }
}

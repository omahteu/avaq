import {urlHomologacaoLeitura} from "./urls.js"

$(document).ready(function(){
    alunos()
})

async function alunos() {
    const rq = await fetch(`${urlHomologacaoLeitura}usuarios.php`)
    const rs = await rq.json()
    let validacao = sessionStorage.getItem("tipo")
    if (rs["status"]) {
        let dados = rs["dados"]
        let alunos = dados.filter(x => x.tipo == "aluno")
        if (validacao == "professor") {
            Object.keys(alunos).forEach((item) => {
                $('#disciplinas').append(`<option value="${alunos[item]["usuario"]}">${alunos[item]["nome"]}</option>`);
            });
        }
    }
}

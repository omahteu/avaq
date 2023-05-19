import {urlHomologacaoLeitura} from "../urls.js"
import {urlPagina} from "../urls.js"

$(document).on("click", "#acessar", function() {
    validacao($("#usuario").val(), $("#senha").val())
})

async function validacao(usuario, senha) {
    const rq = await fetch(`${urlHomologacaoLeitura}usuarios.php`)
    const rs = await rq.json()
    if (rs["status"] == true) {
        const dados = rs["dados"]
        const v1 = dados.filter(x => x.nome == usuario)
        if (v1[0]["senha"] == senha) {
            if (v1[0]["tipo"] == "professor") {
                sessionStorage.setItem("logado", v1[0]["nome"])
                sessionStorage.setItem("tipo", "professor")
                sessionStorage.setItem("disc", v1[0]["disciplina"])
                window.location.href = `${urlPagina}professor.html`
            } else {
                sessionStorage.setItem("logado", v1[0]["nome"])
                sessionStorage.setItem("tipo", "professor")
                sessionStorage.setItem("disc", "")
                window.location.href = `${urlPagina}aluno.html`
            }
        } else {
            alert("Usuário/Senha Inválido!")
        }
    } else {
        alert("Não é possível logar no momento. Tente mais tarde.")
    }
}

import {urlHomologacaoLeitura} from "../urls.js"
import dataHoje from "./hoje.js"
import emitir from "./popup.js"

$(document).ready(function() {
    notificacoes()
    notf_chat()
})

async function notificacoes() {
    const rq = await fetch(`${urlHomologacaoLeitura}datas.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        let dados = rs["dados"][0]
        let hoje = String(dataHoje())
        let tipo = sessionStorage.getItem("tipo")
        if (tipo == "aluno") {
            if (moment(hoje).isSame(String(dados["modulo1"]))) {
                sessionStorage.setItem("modulo", "1")
                emitir("1")
            } else if (moment(hoje).isAfter(String(dados["modulo1"])) && moment(hoje).isBefore(String(dados["modulo2"]))) {
                sessionStorage.setItem("modulo", "1")
                emitir("1")
            } else if (moment(hoje).isSame(String(dados["modulo2"]))) {
                sessionStorage.setItem("modulo", "2")
                emitir("2")
            } else if (moment(hoje).isAfter(String(dados["modulo2"])) && moment(hoje).isBefore(String(dados["modulo3"]))) {
                sessionStorage.setItem("modulo", "2")
                emitir("2")
            } else if (moment(hoje).isSame(String(dados["modulo3"]))) {
                sessionStorage.setItem("modulo", "3")
                emitir("3")
            } else if (moment(hoje).isAfter(String(dados["modulo3"])) && moment(hoje).isBefore(String(dados["modulo4"]))) {
                sessionStorage.setItem("modulo", "3")
                emitir("3")
            } else if (moment(hoje).isSame(String(dados["modulo4"]))) {
                sessionStorage.setItem("modulo", "4")
                emitir("4")
            } else if (moment(hoje).isAfter(String(dados["modulo4"])) && moment(hoje).isBefore(String(dados["modulo5"]))) {
                sessionStorage.setItem("modulo", "4")
                emitir("4")
            } else if (moment(hoje).isSame(String(dados["modulo5"]))) {
                sessionStorage.setItem("modulo", "5")
                emitir("5")
            } else if (moment(hoje).isAfter(String(dados["modulo5"])) && moment(hoje).isBefore(String(dados["modulo6"]))) {
                sessionStorage.setItem("modulo", "5")
                emitir("5")
            } else if (moment(hoje).isSame(String(dados["modulo6"]))) {
                sessionStorage.setItem("modulo", "6")
                emitir("6")
            } else if (moment(hoje).isAfter(String(dados["modulo6"])) && moment(hoje).isBefore(String(dados["final"]))) {
                sessionStorage.setItem("modulo", "6")
                emitir("6")
            } else if (moment(hoje).isSame(String(dados["final"]))) {
                sessionStorage.setItem("modulo", "off")
            }
        }
    }
}

async function notf_chat() {
    const rq = await fetch(`${urlHomologacaoLeitura}chats.php`)
    const rs = await rq.json()
    let nome = sessionStorage.getItem("logado")
    if (rs["status"]) {
        let dados = rs["dados"]
        let disc = sessionStorage.getItem("disc")
        let filtro_disciplina = dados.filter(x => x.disciplina == nome)
        filtro_disciplina.forEach(e => {
            if (e.resposta == ""){
                $("#notificacao").append(
                    `
                    <div class="col-lg-4 col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.4s">
                        <div class="about-div">
                            <i class="fa-solid fa-comments-o fa-4x"></i>
                            <h3>Chat Aberto!</h3>
                            <p>
                                Você recebeu a resposta de um professor!
                            </p>
                        </div>
                    </div>
                    `
                )
            }
        });
    }
}
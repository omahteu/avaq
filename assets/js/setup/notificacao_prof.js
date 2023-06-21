import {urlHomologacaoLeitura} from "../urls.js"
import dataHoje from "./hoje.js"
import emitir from "./popup.js"
import { modulus } from "../disciplinas.js"

$(document).ready(function() {
    notf_chat()
    notf_exercicios()
    notf_provas()
})

async function notf_chat() {
    const rq = await fetch(`${urlHomologacaoLeitura}chats.php`)
    const rs = await rq.json()
    console.log(rs)
    if (rs["status"]) {
        let dados = rs["dados"]
        let disc = sessionStorage.getItem("disc")
        let filtro_disciplina = dados.filter(x => x.disciplina == disc)
        filtro_disciplina.forEach(e => {
            if (e.resposta == ""){
                $("#notificacao").append(
                    `
                    <div class="col-lg-4 col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.4s">
                        <div class="about-div">
                            <i class="fa-solid fa-comments-o fa-4x"></i>
                            <h3>Chat Aberto!</h3>
                            <p>
                                Um aluno lhe enviou uma pergunta, e aguarda sua resposta!
                            </p>
                        </div>
                    </div>
                    `
                )
            }
        });
    }
}

async function notf_exercicios() {
    var caixa1 = [];
    var caixa2 = [];
    const rq1 = await fetch(`${urlHomologacaoLeitura}respostas.php`)
    const rq2 = await fetch(`${urlHomologacaoLeitura}correcoes.php`);
    const rs1 = await rq1.json();
    const rs2 = await rq2.json();
    let eudisciplina = sessionStorage.getItem('disc')
    if (rs1["status"] && rs2["status"]) {
        let res1 = rs1["dados"];
        let res2 = rs2["dados"];
        res1.forEach((e) => {
            caixa1.push(e.cod);
        });
        res2.forEach((e) => {
            caixa2.push(e.cod);
        });
        let r3 = caixa1.filter((a) => !caixa2.includes(a));
        let respondidas = res1.filter(i => r3.includes(i.cod))
        let paramim = respondidas.filter(l => l.disciplina == eudisciplina)
        if (paramim.length > 0) {
            $("#notificacao").append(
                `
                <div class="col-lg-4 col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.4s">
                    <div class="about-div">
                        <i class="fa-solid fa-comments-o fa-4x"></i>
                        <h3>Exercícios Chegaram!</h3>
                        <p>
                            Um aluno respondeu o exercício da sua disciplina, e está aguardando correção!
                        </p>
                    </div>
                </div>
                `
            )
        }
    } else if (rs1["status"]) {
        let res1 = rs1["dados"];
        let paramim = res1.filter(l => l.disciplina == eudisciplina)
        if (paramim.length > 0) {
            $("#notificacao").append(
                `
                <div class="col-lg-4 col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.4s">
                    <div class="about-div">
                        <i class="fa-solid fa-comments-o fa-4x"></i>
                        <h3>Exercícios Chegaram!</h3>
                        <p>
                        Um aluno respondeu o exercício da sua disciplina, e está aguardando correção!
                        </p>
                    </div>
                </div>
                `
            )
        }
    }
}

async function notf_provas() {
    var caixa1 = [];
    var caixa2 = [];
    const rq1 = await fetch(`${urlHomologacaoLeitura}respostas_provas.php`);
    const rq2 = await fetch(`${urlHomologacaoLeitura}correcoes_provas.php`);
    const rs1 = await rq1.json();
    const rs2 = await rq2.json();
    let eudisciplina = sessionStorage.getItem('disc')
    if (rs1["status"] && rs2["status"]) {
        let res1 = rs1["dados"];
        let res2 = rs2["dados"];
        res1.forEach((e) => {
            caixa1.push(e.cod);
        });
        res2.forEach((e) => {
            caixa2.push(e.cod);
        });
        let r3 = caixa1.filter((a) => !caixa2.includes(a));
        let respondidas = res1.filter(i => r3.includes(i.cod))
        let paramim = respondidas.filter(l => l.disciplina == eudisciplina)
        if (paramim.length > 0) {
            $("#notificacao").append(
                `
                <div class="col-lg-4 col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.4s">
                    <div class="about-div">
                        <i class="fa-solid fa-comments-o fa-4x"></i>
                        <h3>Avaliações Chegaram!</h3>
                        <p>
                            Um aluno respondeu sua avaliação, e está aguardando correção!
                        </p>
                    </div>
                </div>
                `
            )
        }
    } else if (rs1["status"]) {
        let res1 = rs1["dados"];
        let paramim = res1.filter(l => l.disciplina == eudisciplina)
        if (paramim.length > 0) {
            $("#notificacao").append(
                `
                <div class="col-lg-4 col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.4s">
                    <div class="about-div">
                        <i class="fa-solid fa-comments-o fa-4x"></i>
                        <h3>Avaliações Chegaram!</h3>
                        <p>
                            Um aluno respondeu sua avaliação, e está aguardando correção!
                        </p>
                    </div>
                </div>
                `
            )
        }
    }
}

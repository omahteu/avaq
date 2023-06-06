import { disc } from "../disciplinas.js"
import {urlHomologacaoLeitura} from "../urls.js"

$(document).ready(function () {
    carregar();
});

async function carregar() {
    var caixa1 = [];
    var caixa2 = [];
    const rq1 = await fetch(`${urlHomologacaoLeitura}respostas_provas.php`);
    const rq2 = await fetch(`${urlHomologacaoLeitura}correcoes_provas.php`);
    const rs1 = await rq1.json();
    const rs2 = await rq2.json();
    let nome = sessionStorage.getItem("logado");
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
        res1.forEach((e) => {
            if (r3.includes(e.cod)) {
                try {
                    $("#ficha").append(
                        `
                        <div class="card w-50">
                            <div class="card-body">
                                <h5 class="card-title">${disc[e.disciplina]}</h5>
                                <p class="card-text">Leia as respostas e dê uma nota para o aluno.</p>
                                <button type="button" class="btn btn-primary confg" data-toggle="modal" data-target="#tarja${e.disciplina}">Ver Respostas</button>
                            </div>
                        </div>
                        `
                    );
                    $("#features-sec").append(
                        `
                        <div class="modal fade" id="tarja${e.disciplina}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Respostas | ${e.rm}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form method="post" id="exerciciosalunos${e.disciplina}">
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 1:</label>
                                                <input class="form-control" name="q1" id="q1" value="${e.um}" readonly>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 2:</label>
                                                <input class="form-control" name="q2" id="q2" value="${e.dois}" readonly>
                                            </div>
                                                <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 3:</label>
                                                <input class="form-control" name="q3" id="q3" value="${e.tres}" readonly>
                                            </div>
                                                <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 4:</label>
                                                <input class="form-control" name="q4" id="q4" value="${e.quatro}" readonly>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 5:</label>
                                                <input class="form-control" name="q5" id="q5" value="${e.cinco}" readonly>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 6:</label>
                                                <input class="form-control" name="q6" id="q6" value="${e.seis}" readonly>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 7:</label>
                                                <input class="form-control" name="q7" id="q7" value="${e.sete}" readonly>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 8:</label>
                                                <input class="form-control" name="q8" id="q8" value="${e.oito}" readonly>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 9:</label>
                                                <input class="form-control" name="q9" id="q9" value="${e.nove}" readonly>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 10:</label>
                                                <input class="form-control" name="q10" id="q10" value="${e.dez}" readonly>
                                            </div>
                                            <input type="text" id="ha" name="ha" value="${e.cod}" hidden>
                                            <input type="text" id="rm" name="rm" value="${e.rm}" hidden>
                                            <input type="text" id="ds" name="ds" value="${e.disciplina}" hidden>
                                            <div class="modal-footer">
                                                <input text="text" id="nota" name="nota" placeholder="Nota">
                                                <button type="button" class="btn btn-primary" id="respondendo" data-toggle="${e.disciplina}">Enviar Nota</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    );
                } catch (error) {
                    sessionStorage.setItem("erro", error);
                }
            }
        });
    } else {
        let exe = rs1["dados"];
        try {
            exe.forEach((e) => {
                $("#ficha").append(
                    `
                    <div class="card w-50">
                        <div class="card-body">
                            <h5 class="card-title">${disc[e.disciplina]}</h5>
                            <p class="card-text">Leia as respostas e dê uma nota para o aluno.</p>
                            <button type="button" class="btn btn-primary confg" data-toggle="modal" data-target="#tarja${e.disciplina}">Ver Respostas</button>
                        </div>
                    </div>
                    `
                );
                $("#features-sec").append(
                    `
                    <div class="modal fade" id="tarja${e.disciplina}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Respostas | ${e.rm}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form method="post" id="exerciciosalunos${e.disciplina}">
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 1:</label>
                                            <input class="form-control" name="q1" id="q1" value="${e.um}" readonly
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 2:</label>
                                            <input class="form-control" name="q2" id="q2" value="${e.dois}" readonly>
                                        </div>
                                            <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 3:</label>
                                            <input class="form-control" name="q3" id="q3" value="${e.tres}" readonly>
                                        </div>
                                            <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 4:</label>
                                            <input class="form-control" name="q4" id="q4" value="${e.quatro}" readonly>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 5:</label>
                                            <input class="form-control" name="q5" id="q5" value="${e.cinco}" readonly>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 6:</label>
                                            <input class="form-control" name="q6" id="q6" value="${e.seis}" readonly>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 7:</label>
                                            <input class="form-control" name="q7" id="q7" value="${e.sete}" readonly>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 8:</label>
                                            <input class="form-control" name="q8" id="q8" value="${e.oito}" readonly>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 9:</label>
                                            <input class="form-control" name="q9" id="q9" value="${e.nove}" readonly>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 10:</label>
                                            <input class="form-control" name="q10" id="q10" value="${e.dez}" readonly>
                                        </div>
                                        <input type="text" id="ha" name="ha" value="${e.cod}" hidden>
                                        <input type="text" id="rm" name="rm" value="${e.rm}" hidden>
                                        <input type="text" id="ds" name="ds" value="${e.disciplina}" hidden>
                                        <div class="modal-footer">
                                            <input text="text" id="nota" name="nota" placeholder="Nota">
                                            <button type="button" class="btn btn-primary" id="respondendo" data-toggle="${e.disciplina}">Enviar Nota</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                );
            });
        } catch (error) {
            sessionStorage.setItem("erro", error);
        }
    }
}

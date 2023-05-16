import { disc } from "../disciplinas.js";
import filtrando_exibicao from "./filtro_exercicios_respondidos.js";

$(document).ready(function () {
    carregar();
});

async function carregar() {
    var caixa1 = [];
    var caixa2 = [];
    const rq1 = await fetch(
        "http://localhost/avaq/assets/php/read/exercicios.php"
    );
    const rq2 = await fetch(
        "http://localhost/avaq/assets/php/read/respostas.php"
    );
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
                        `<button type="button" 
                        class="btn btn-primary confg" 
                        data-toggle="modal" 
                        data-target="#tarja${e.capitulo}${e.disciplina}">${
                            disc[e.disciplina]
                        } ${e.capitulo}</button>`
                    );
                    $("#features-sec").append(
                        `
                        <div class="modal fade" id="tarja${e.capitulo}${e.disciplina}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Auto Atividade</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form method="post" id="exerciciosalunos${e.capitulo}${e.disciplina}">
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">${e.um}:</label>
                                            <textarea class="form-control" name="q1" id="q1"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">${e.dois}:</label>
                                            <textarea class="form-control" name="q2" id="q2"></textarea>
                                        </div>
                                            <div class="form-group">
                                            <label for="message-text" class="col-form-label">${e.tres}:</label>
                                            <textarea class="form-control" name="q3" id="q3"></textarea>
                                        </div>
                                            <div class="form-group">
                                            <label for="message-text" class="col-form-label">${e.quatro}:</label>
                                            <textarea class="form-control" name="q4" id="q4"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">${e.cinco}:</label>
                                            <textarea class="form-control" name="q5" id="q5"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">${e.seis}:</label>
                                            <textarea class="form-control" name="q6" id="q6"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">${e.sete}:</label>
                                            <textarea class="form-control" name="q7" id="q7"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">${e.oito}:</label>
                                            <textarea class="form-control" name="q8" id="q8"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">${e.nove}:</label>
                                            <textarea class="form-control" name="q9" id="q9"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">${e.dez}:</label>
                                            <textarea class="form-control" name="q10" id="q10"></textarea>
                                        </div>
                                        <div class="form-group" hidden>
                                            <input type="text" name="disciplina" id="disciplina" value="${e.disciplina}">
                                        </div>
                                        <div class="form-group" hidden>
                                            <input type="text" name="aluno" id="aluno" value="${nome}">
                                        </div>
                                        <div class="form-group" hidden>
                                            <input type="text" name="hash" id="hash" value="${e.cod}">
                                        </div>
                                        <div class="form-group" hidden>
                                        <input type="text" name="capi" id="capi" value="${e.capitulo}">
                                    </div>
                                        <div class="modal-footer">
                                            <button type="reset" class="btn btn-secondary">Limpar</button>
                                            <button type="button" class="btn btn-primary" id="respondendo" data-toggle="${e.capitulo}${e.disciplina}">Enviar</button>
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
                    `<button type="button" 
                    class="btn btn-primary confg" 
                    data-toggle="modal" 
                    data-target="#tarja${e.capitulo}${e.disciplina}">${
                        disc[e.disciplina]
                    } ${e.capitulo}</button>`
                );
                $("#features-sec").append(
                    `
                    <div class="modal fade" id="tarja${e.capitulo}${e.disciplina}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Auto Atividade</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form method="post" id="exerciciosalunos${e.capitulo}${e.disciplina}">
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">${e.um}:</label>
                                        <textarea class="form-control" name="q1" id="q1"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">${e.dois}:</label>
                                        <textarea class="form-control" name="q2" id="q2"></textarea>
                                    </div>
                                        <div class="form-group">
                                        <label for="message-text" class="col-form-label">${e.tres}:</label>
                                        <textarea class="form-control" name="q3" id="q3"></textarea>
                                    </div>
                                        <div class="form-group">
                                        <label for="message-text" class="col-form-label">${e.quatro}:</label>
                                        <textarea class="form-control" name="q4" id="q4"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">${e.cinco}:</label>
                                        <textarea class="form-control" name="q5" id="q5"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">${e.seis}:</label>
                                        <textarea class="form-control" name="q6" id="q6"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">${e.sete}:</label>
                                        <textarea class="form-control" name="q7" id="q7"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">${e.oito}:</label>
                                        <textarea class="form-control" name="q8" id="q8"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">${e.nove}:</label>
                                        <textarea class="form-control" name="q9" id="q9"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">${e.dez}:</label>
                                        <textarea class="form-control" name="q10" id="q10"></textarea>
                                    </div>
                                    <div class="form-group" hidden>
                                        <input type="text" name="disciplina" id="disciplina" value="${e.disciplina}">
                                    </div>
                                    <div class="form-group" hidden>
                                        <input type="text" name="aluno" id="aluno" value="${nome}">
                                    </div>
                                    <div class="form-group" hidden>
                                        <input type="text" name="hash" id="hash" value="${e.cod}">
                                    </div>
                                    <div class="form-group" hidden>
                                    <input type="text" name="capi" id="capi" value="${e.capitulo}">
                                </div>
                                    <div class="modal-footer">
                                        <button type="reset" class="btn btn-secondary">Limpar</button>
                                        <button type="button" class="btn btn-primary" id="respondendo" data-toggle="${e.capitulo}${e.disciplina}">Enviar</button>
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

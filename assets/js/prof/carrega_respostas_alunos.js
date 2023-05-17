import { disc } from "../disciplinas.js";

$(document).ready(function () {
    carregar();
});

async function carregar() {
    var caixa1 = [];
    var caixa2 = [];
    const rq1 = await fetch(
        "http://localhost/avaq/assets/php/read/respostas.php"
    );
    const rq2 = await fetch(
        "http://localhost/avaq/assets/php/read/correcoes.php"
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
                        `
                        <div class="card w-50">
                            <div class="card-body">
                                <h5 class="card-title">${disc[e.disciplina]} ${e.capitulo}</h5>
                                <p class="card-text">Leia as respostas e dê uma nota para o aluno.</p>
                                <button type="button" class="btn btn-primary confg" data-toggle="modal" data-target="#tarja${e.capitulo}${e.disciplina}">Ver Respostas</button>
                            </div>
                        </div>
                        `
                    );
                    $("#features-sec").append(
                        `
                        <div class="modal fade" id="tarja${e.capitulo}${e.disciplina}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Respostas | ${e.rm}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form method="post" id="exerciciosalunos${e.capitulo}${e.disciplina}">
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 1:</label>
                                                <textarea class="form-control" name="q1" id="q1" placeholder="${e.um}" readonly></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 2:</label>
                                                <textarea class="form-control" name="q2" id="q2" placeholder="${e.dois}" readonly></textarea>
                                            </div>
                                                <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 3:</label>
                                                <textarea class="form-control" name="q3" id="q3" placeholder="${e.tres}" readonly></textarea>
                                            </div>
                                                <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 4:</label>
                                                <textarea class="form-control" name="q4" id="q4" placeholder="${e.quatro}" readonly></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 5:</label>
                                                <textarea class="form-control" name="q5" id="q5" placeholder="${e.cinco}" readonly></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 6:</label>
                                                <textarea class="form-control" name="q6" id="q6" placeholder="${e.seis}" readonly></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 7:</label>
                                                <textarea class="form-control" name="q7" id="q7" placeholder="${e.sete}" readonly></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 8:</label>
                                                <textarea class="form-control" name="q8" id="q8" placeholder="${e.oito}" readonly></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 9:</label>
                                                <textarea class="form-control" name="q9" id="q9" placeholder="${e.nove}" readonly></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Questão 10:</label>
                                                <textarea class="form-control" name="q10" id="q10" placeholder="${e.dez}" readonly></textarea>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <input text="text" placeholder="Nota">
                                            <button type="button" class="btn btn-primary" id="respondendo" data-toggle="${e.capitulo}${e.disciplina}">Enviar Nota</button>
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
                            <h5 class="card-title">${disc[e.disciplina]} ${e.capitulo}</h5>
                            <p class="card-text">Leia as respostas e dê uma nota para o aluno.</p>
                            <button type="button" class="btn btn-primary confg" data-toggle="modal" data-target="#tarja${e.capitulo}${e.disciplina}">Ver Respostas</button>
                        </div>
                    </div>
                    `
                );
                $("#features-sec").append(
                    `
                    <div class="modal fade" id="tarja${e.capitulo}${e.disciplina}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Respostas | ${e.rm}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form method="post" id="exerciciosalunos${e.capitulo}${e.disciplina}">
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 1:</label>
                                            <textarea class="form-control" name="q1" id="q1" placeholder="${e.um}" readonly></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 2:</label>
                                            <textarea class="form-control" name="q2" id="q2" placeholder="${e.dois}" readonly></textarea>
                                        </div>
                                            <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 3:</label>
                                            <textarea class="form-control" name="q3" id="q3" placeholder="${e.tres}" readonly></textarea>
                                        </div>
                                            <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 4:</label>
                                            <textarea class="form-control" name="q4" id="q4" placeholder="${e.quatro}" readonly></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 5:</label>
                                            <textarea class="form-control" name="q5" id="q5" placeholder="${e.cinco}" readonly></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 6:</label>
                                            <textarea class="form-control" name="q6" id="q6" placeholder="${e.seis}" readonly></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 7:</label>
                                            <textarea class="form-control" name="q7" id="q7" placeholder="${e.sete}" readonly></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 8:</label>
                                            <textarea class="form-control" name="q8" id="q8" placeholder="${e.oito}" readonly></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 9:</label>
                                            <textarea class="form-control" name="q9" id="q9" placeholder="${e.nove}" readonly></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Questão 10:</label>
                                            <textarea class="form-control" name="q10" id="q10" placeholder="${e.dez}" readonly></textarea>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <input text="text" placeholder="Nota">
                                        <button type="button" class="btn btn-primary" id="respondendo" data-toggle="${e.capitulo}${e.disciplina}">Enviar Nota</button>
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

import { disc } from "./disciplinas.js";


$(document).ready(function(){
    disciplinas()
})

function disciplinas() {
    let validacao = sessionStorage.getItem("tipo")
    if (validacao == "aluno") {
        Object.keys(disc).forEach((item) => {
            $('#disciplinas').append(`<option value="${item}">${disc[item]}</option>`);
        });
    }
}

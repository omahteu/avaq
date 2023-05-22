import { disc, modulus } from "../disciplinas.js"
import {urlHomologacaoLeitura} from "../urls.js"

$(document).ready(function () {
    carregar();

    // var lo = $('#it').find('.row').children().children()[0]
    // $(lo).attr("src", "https://www.youtube.com/embed/prghTQWsRbI")
});

async function carregar() {
    const rq1 = await fetch(`${urlHomologacaoLeitura}aulas.php`)
    const rs1 = await rq1.json();
    let mod = sessionStorage.getItem("modulo")
    let ativo = modulus[mod]
    if (rs1["status"]) {
        let res1 = rs1["dados"];


        res1.forEach(e => {
            switch (e.disciplina) {
                case 'it':
                    e.capitulo == '1' ? $("#it1").attr("src", e.url) : 
                    e.capitulo == '2' ? $("#it2").attr("src", e.url) : 
                    e.capitulo == '3' ? $("#it3").attr("src", e.url) : 
                    e.capitulo == '4' ? $("#it4").attr("src", e.url) : 
                    e.capitulo == '5' ? $("#it5").attr("src", e.url) : 
                    e.capitulo == '6' ? $("#it6").attr("src", e.url) : ''
                    break;
            
                default:
                    break;
            }
        });

        ativo.forEach(e => {
            $(`#${e}`).css("visibility", "visible")

            let cum = $(`#${e}`).find('.row').children().length

        });




    } else {
        sessionStorage.setItem("erro", error);
    }
}

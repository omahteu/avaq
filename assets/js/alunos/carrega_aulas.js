import { modulus } from "../disciplinas.js"
import {urlHomologacaoLeitura} from "../urls.js"
import aulas_it from "../aulas/it.js";

$(document).ready(function () {
    carregar();
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
                    aulas_it(e)
                    break;
                
                case 'bib':
                    e.capitulo == '1' ? $("#bib1").attr("src", e.url) : 
                    e.capitulo == '2' ? $("#bib2").attr("src", e.url) : 
                    e.capitulo == '3' ? $("#bib3").attr("src", e.url) : 
                    e.capitulo == '4' ? $("#bib4").attr("src", e.url) : 
                    e.capitulo == '5' ? $("#bib5").attr("src", e.url) : 
                    e.capitulo == '6' ? $("#bib6").attr("src", e.url) : ''
                    break
                
                case 'vc':
                    e.capitulo == '1' ? $("#vc1").attr("src", e.url) : 
                    e.capitulo == '2' ? $("#vc2").attr("src", e.url) : 
                    e.capitulo == '3' ? $("#vc3").attr("src", e.url) : 
                    e.capitulo == '4' ? $("#vc4").attr("src", e.url) : 
                    e.capitulo == '5' ? $("#vc5").attr("src", e.url) : 
                    e.capitulo == '6' ? $("#vc6").attr("src", e.url) : ''
                    break

                case 'mta':
                    e.capitulo == '1' ? $("#mta1").attr("src", e.url) : 
                    e.capitulo == '2' ? $("#mta2").attr("src", e.url) : 
                    e.capitulo == '3' ? $("#mta3").attr("src", e.url) : 
                    e.capitulo == '4' ? $("#mta4").attr("src", e.url) : 
                    e.capitulo == '5' ? $("#mta5").attr("src", e.url) : 
                    e.capitulo == '6' ? $("#mta6").attr("src", e.url) : ''
                    break
            
                default:
                    break;
            }
        });
        ativo.forEach(e => {
            $(`#${e}`).css("visibility", "visible")
        });
    } else {
        sessionStorage.setItem("erro", error);
    }
}

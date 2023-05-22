import { disc, modulus } from "../disciplinas.js"
import {urlHomologacaoLeitura} from "../urls.js"

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
        

        









        // res1.forEach(e => {
        //     if (ativo.includes(e.disciplina)) {

        //         switch (e.disciplina) {
        //             case 'it':
        //                 console.log(e)





        //                 $("#features-sec").html(
        //                     `
                            
                            
                            
        //                     <div id="artq">
        //                         <h2>IT</h2>
        //                         <!--Aulas-->
 
        //                     </div>
        
        
        
        
        
        
        
        
        //                     `
        //                 )
        //                 $("#artq").append(
        //                     `
        //                     <div class="row">
        //                         <div class="card">
        //                             <iframe width="266" height="180" src="${e.url}"
        //                                 title="YouTube video player" frameborder="0"
        //                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //                                 allowfullscreen></iframe>
        //                             <div class="card-body">
        //                                 <h5 class="card-title">Bibliologia | Capítulo 1</h5>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     `
        //                 )
        //                 break;
                
        //             default:
        //                 break;
        //         }


        //     }
        // });

    } else {
        sessionStorage.setItem("erro", error);
    }
}

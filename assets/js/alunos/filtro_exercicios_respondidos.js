$(document).ready(function(){
    //filtrando_exibicao()
    // pegarDiferenca()
})

export default async function filtrando_exibicao(){
    var caixa1 = []
    var caixa2 = []
    const rq1 = await fetch("http://localhost/avaq/assets/php/read/exercicios.php")
    const rq2 = await fetch("http://localhost/avaq/assets/php/read/respostas.php")
    const rs1 = await rq1.json()
    const rs2 = await rq2.json()
    if (rs1["status"] && rs2["status"]) {
        let res1 = rs1["dados"]
        let res2 = rs2["dados"]
        res1.forEach(e => {
            caixa1.push(e.cod)
        });
        res2.forEach(e => {
            caixa2.push(e.cod)
        });


        let r3 = caixa1.filter( a => !caixa2.includes( a ) );
        return r3
    }
}

function pegarDiferenca() {
    let r1 = [2,4,6,8];
    let r2 = [3,4,5,7,9];       
    let r3 = r1.filter( a => !r2.includes( a ) );
    
    console.log(r1, r2)
    console.log('*********************')
    console.log(r3)
}

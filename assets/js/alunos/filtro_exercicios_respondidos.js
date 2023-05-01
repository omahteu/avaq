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

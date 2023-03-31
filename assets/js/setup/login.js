$(document).on("click", "#acessar", function() {
    validacao($("#usuario").val(), $("#senha").val())
})

async function validacao(usuario, senha) {
    const rq = await fetch("")
    const rs = await rq.json()
    if (rs.filter(x => x.usuario == usuario)) {
        if (rs.filter(y => y.senha == senha)) {
            console.log(rs)
        } else {
            alert("Senha Inválida!")
        }
    } else {
        alert("Usuário Inválido!")
    }
}

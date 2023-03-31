$(document).on("click", "#acessar", function() {
    validacao($("#usuario").val(), $("#senha").val())
})

async function validacao(usuario, senha) {
    const rq = await fetch("http://localhost/avaq/assets/php/read/usuarios.php")
    const rs = await rq.json()
    if (rs["status"] == true) {
        const dados = rs["dados"]
        const v1 = dados.filter(x => x.usuario == usuario)
        if (v1[0]["senha"] == senha) {
            if (v1[0]["tipo"] == "professor") {
                sessionStorage.setItem("logado", v1[0]["nome"])
                window.location.href = "http://localhost/avaq/assets/pages/professor.html";
            } else {
                sessionStorage.setItem("logado", v1[0]["nome"])
                window.location.href = "http://localhost/avaq/assets/pages/aluno.html";
            }
        } else {
            alert("Usuário/Senha Inválido!")
        }
    } else {
        alert("Não é possível logar no momento. Tente mais tarde.")
    }
}

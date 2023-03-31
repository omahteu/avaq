async function ler_notificacoes(){
    const rq = await fetch("http://localhost/avaq/assets/php/read/notificacoes.php")
    const rs = await rq.json()
    
    if (rs["status"] == true) {
        const vf = rs["dados"]
        vf.forEach(e => {
            $("#notific").html(
                `
                <div class="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.4s">
                    <div class="about-div">
                        <i class="fa-solid fa-comments-o fa-4x"></i>
                        <h3>${e.remetente}</h3>
                        <p>${e.mensagem}</p>
                    </div>
                </div>
                `
            )
        });
    } else {
        console.log("")
    }
}

$(document).ready(function() {
    ler_notificacoes()
})

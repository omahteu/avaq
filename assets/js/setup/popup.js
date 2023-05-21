export default function emitir(numero) {
    $("#notific").html(
        `
        <div class="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.4s">
            <div class="about-div">
                <i class="fa-solid fa-bell fa-4x"></i>
                <h3>Aulas</h3>
                <p>As aulas do módulo ${numero} já estão disponíveis.</p>
            </div>
        </div>
        <div class="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.4s">
            <div class="about-div">
                <i class="fa-solid fa-bell fa-4x"></i>
                <h3>Exercícios</h3>
                <p>Os exercícios do módulo ${numero} já estão disponíveis.</p>
            </div>
        </div>
        <div class="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.4s">
            <div class="about-div">
                <i class="fa-solid fa-bell fa-4x"></i>
                <h3>Avaliações</h3>
                <p>As avaliações do módulo ${numero} já estão disponíveis.</p>
            </div>
        </div>
        `
    )
}

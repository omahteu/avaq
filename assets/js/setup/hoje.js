export default function dataHoje() {
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    let dataAtual = `${ano}-${mes}-${dia}`
    return dataAtual
}

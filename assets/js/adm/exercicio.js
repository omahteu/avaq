import {urlInsercao} from "../urls.js"

$(document).on("click", "#salvar", function () {
  const dd = $("#add_exercicio").serialize();
  $.ajax({
    type: "POST",
    dataType: "json",
    url: `${urlInsercao}exercicios.php`,
    async: true,
    data: dd,
  });
  document.getElementById("add_exercicio").reset();
  alert("Exercício adicionado!");
});

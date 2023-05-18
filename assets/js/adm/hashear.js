import { hash } from "./gerarhash.js";

$(document).on("change", "#qd", function () {
    var prefixo = $(this).val();
    $("#hash").val(`${prefixo}${hash()}`);
});

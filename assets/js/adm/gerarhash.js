$(document).on("change", "#qd", function () {
  var prefixo = $(this).val();
  $("#hash").val(`${prefixo}${getPassword()}`);
});

function getPassword() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 5;
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}

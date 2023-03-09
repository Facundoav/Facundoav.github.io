const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (com.validity.typeMismatch) {
    com.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
  } else {
    email.setCustomValidity("");
  }
});

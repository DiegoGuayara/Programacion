let submit = document.getElementById("submit");
let user = document.getElementById("user");
let password = document.getElementById("password");

submit.addEventListener("click", () => {
  if (user.value !== "" && password.value !== "") {
    alert("Iniciando sesion");
  } else if (user.value !== "") {
    alert("Le falta ingresar la contraseña");
  } else {
    alert("No ha ingresado ningun dato");
  }
});

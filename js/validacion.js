function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById('regBtn').addEventListener('click', function () {
  // Obtener valores de los campos
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const email = document.getElementById('email').value.trim();
  const password1 = document.getElementById('password1').value.trim();
  const password2 = document.getElementById('password2').value.trim();
  const terminos = document.getElementById('terminos').checked;

  const alertSuccess = document.getElementById('alert-success');
  const alertDanger = document.getElementById('alert-danger');

  // Ocultar ambas alertas antes de validar
  alertSuccess.classList.remove('show');
  alertSuccess.classList.add('fade');
  alertDanger.classList.remove('show');
  alertDanger.classList.add('fade');

  // Validar campos
  if (
    nombre === '' ||
    apellido === '' ||
    email === '' ||
    password1 === '' ||
    password2 === '' ||
    password1 !== password2 ||
    !terminos ||
    password1.length < 6 
  ) {
    // Mostrar alerta de error
    alertDanger.classList.add('show');
    alertDanger.classList.remove('fade');
    setTimeout(() => {
      alertDanger.classList.remove('show');
      alertDanger.classList.add('fade');
    }, 3000);
  } else {
    // Mostrar alerta de éxito
    alertSuccess.classList.add('show');
    alertSuccess.classList.remove('fade');
    setTimeout(() => {
      alertSuccess.classList.remove('show');
      alertSuccess.classList.add('fade');
    }, 3000);
  }
});

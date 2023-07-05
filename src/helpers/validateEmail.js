function validarEmail(email) {
  var regex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g;
  return regex.test(email) ? true : false;
}

export default validarEmail;

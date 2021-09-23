function validar_nombre_usuario(usuario) {
  let letters = /^[A-Za-z]+$/;
  if (usuario.match(letters) && usuario[0] === usuario[0].toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

function validar_anoNacimiento_usuario(numero) {
  numero_convertido = parseInt(numero.value);
  if (numero_convertido >= 1900 && numero_convertido < 2022) {
    return true;
  } else {
    return false;
  }
}

function validar_contrasena(password) {
  //Expresión regular para Alfanumericos (letras y numeros)
  let contMayus = 0;
  let contMinus = 0;
  let contNum = 0;
  let flag_mayus_minus_num = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i].toUpperCase()) {
      contMayus += 1;
    }
    if (password[i] === password[i].toLowerCase()) {
      contMinus += 1;
    }
    if (Number.isInteger(parseInt(password[i]))) {
      contNum += 1;
    }
  }

  if (contMayus >= 1 && contMinus >= 1 && contNum >= 1) {
    flag_mayus_minus_num = true;
  }

  let letters = /^[a-zA-Z0-9_]*$/;
  if (password.length >= 6 && password.match(letters) && flag_mayus_minus_num) {
    return true;
  } else {
    return false;
  }
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;

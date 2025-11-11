export const  validateRegister = (formData) => {
    const errors = {};

    if (!formData.name) {
        errors.name = "El nombre es Requerido.";
    }  else if (formData.name.length < 3) {
        errors.name = "El nombre tiene que tener 3 o mas Caracteres";
    }

     if (!formData.username) {
        errors.username = "El username es Requerido.";
    }  else if (formData.username.length < 6) {
        errors.username = "El username tiene que tener 6 o mas Caracteres";
    }

     if (!formData.password) {
        errors.password = "La Contraseña es Requerida.";
    }  else if (formData.password.length < 6) {
        errors.password = "La Contraseña tiene que tener 6 o mas Caracteres";
    }

     if (!formData.nDni) {
        errors.nDni = "El nombre es Requerido.";
    }  else if (formData.nDni.length < 7 || formData.nDni.length> 8 ) {
        errors.nDni = "El numero de documento no es valido";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u;
      if (!formData.email) {
        errors.email = "El email es Requerido.";
    }  else if (!emailRegex.test(formData.email)) {
        errors.email = "Email invalido";
    }

      if (!formData.birthdate) {
        errors.birthdate = "La Fecha de nacimiento es requerida.";
    }  else  {
        const birthdate = new Date(formData.birthdate);
        const age = new Date().getFullYear() - birthdate.getFullYear();
        if (age < 18) {
            errors.birthdate = "Debe ser mayor de 18 años para registrarse en la app";
        }
    }

    return errors;
};


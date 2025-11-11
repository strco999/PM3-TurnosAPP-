export const  validateLogin = (formData) => {
    const errors = {};

     if (!formData.username) {
        errors.username = "El username es Requerido.";
    }  else if (formData.username.length < 6) {
        errors.username = "El username tiene que tener 3 o mas Caracteres";
    }

     if (!formData.password) {
        errors.password = "La Contraseña es Requerida.";
    }  else if (formData.password.length < 6) {
        errors.password = "La Contraseña tiene que tener 3 o mas Caracteres";
    }

    return errors;
};

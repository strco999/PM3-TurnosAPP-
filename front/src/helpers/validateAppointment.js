export const  validateAppointment = (formData) => {
    const errors = {};

     if (!formData.date) {
        errors.date = "La Fecha es Requerido.";
     }
    

     if (!formData.time) {
        errors.time = "La Hora es Requerida.";
     }
  

    return errors;
};

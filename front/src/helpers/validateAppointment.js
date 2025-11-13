// export const  validateAppointment = (formData) => {
//     const errors = {};

//      if (!formData.date) {
//         errors.date = "La Fecha es Requerido.";
//      }
    

//      if (!formData.time) {
//         errors.time = "La Hora es Requerida.";
//      }
  

//     return errors;
// };

export const validateAppointment = (formData) => {
  const errors = {};

  // ✅ Validar FECHA
  if (!formData.date) {
    errors.date = "La fecha es requerida.";
  } else {
    // formData.date viene como "YYYY-MM-DD"
    const [year, month, day] = formData.date.split("-").map(Number);

    // Usamos Date(año, mes-1, día) para evitar problemas de timezone
    const selectedDate = new Date(year, month - 1, day);

    // "Hoy" sin hora (00:00:00)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 1) No permitir fechas en el pasado
    if (selectedDate < today) {
      errors.date = "La fecha debe ser desde hoy en adelante.";
    } else {
      // 2) No permitir sábados ni domingos
      const dayOfWeek = selectedDate.getDay(); // 0 = domingo, 6 = sábado
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        errors.date = "No se pueden reservar turnos sábado ni domingo.";
      }
    }
  }

  // ✅ Validar HORA
  if (!formData.time) {
    errors.time = "La hora es requerida.";
  }

  return errors;
};

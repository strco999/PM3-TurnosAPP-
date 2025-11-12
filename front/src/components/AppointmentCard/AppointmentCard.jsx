import axios from "axios";
import styles from "./AppointmentCard.module.css";


function AppointmentCard({appointment, onCancel}) {

  const handleCancel = async () => {
     try {
      const appointmentDate = new Date(appointment.date);
      const currentDate = new Date();

      if(appointmentDate.getTime() <= currentDate.getTime()){
        return alert("El turno se puede cancelar unicamente hasta el dia anterior a la reserva")
      }

      await axios.put(`http://localhost:8080/appointments/cancel/${appointment.id}`);

      alert("Turno cancelado con exito");
      onCancel();
     } catch (error) {
      console.error(error);
      alert("Ocurrio un Error al cancelar el turno");
     }
};

    return (
      <div className={styles.appointmentCard}>
        <p>
            Date: <span>{appointment.date}</span>
        </p>
        <p>
            Time: <span>{appointment.time}</span>
        </p>
        <p>
            Status: <span>{appointment.status}</span>
        </p>        
        {appointment.status != "cancelled" && <button onClick={handleCancel}>Cancelar </button>}
      </div>
    );
}

export default AppointmentCard;
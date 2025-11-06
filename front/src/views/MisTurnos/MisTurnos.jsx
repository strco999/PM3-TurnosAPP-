import { useState } from "react";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import { appointmentsData } from "../../helpers/myAppointments";
import styles from "./MisTurnos.module.css";

function MisTurnos () {
   const [appointments, setAppointments] = useState(appointmentsData);
   
   return (
    <main className={styles.misTurnosContainer}>
      <h2>Mis Turnos</h2>
      <div className={styles.turnosList}>
        {appointments.map((appoint)=>(
          <AppointmentCard key={appoint.id} appointment={appoint}/>
        ))}
      </div>
    </main>
   );   
}

export default MisTurnos;
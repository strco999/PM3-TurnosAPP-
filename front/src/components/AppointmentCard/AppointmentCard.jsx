import styles from "./AppointmentCard.module.css";


function AppointmentCard({appointment}) {
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
      </div>
    );
}

export default AppointmentCard;
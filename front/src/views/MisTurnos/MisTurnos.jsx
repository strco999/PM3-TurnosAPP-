import { useEffect, useState } from "react";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import styles from "./MisTurnos.module.css";
import axios from "axios";

function MisTurnos () {
   const [appointments, setAppointments] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   
   const getAppointments = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("http://localhost:8080/appointments");
      setAppointments(response.data);        
    } catch (error) {
      console.error(error);
      setError("Ocurrio un error al pedir los turnos");
    }finally {
      setLoading(false);
    }
   };

   useEffect(() => {
    getAppointments();
   }, []);

   return (
    <main className={styles.misTurnosContainer}>
      <h2>Mis Turnos</h2>
      <div className={styles.turnosList}>
         {loading ? (
          <h2>Loading...</h2>
         ) : (
          appointments.map((appoint)=> <AppointmentCard key={appoint.id} appointment={appoint}/>)
          )} 
          
          {error && <p>{error}</p>}             
       </div>
    </main>
   );   
}

export default MisTurnos;
import { useEffect, useState } from "react";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import styles from "./MisTurnos.module.css";
import axios from "axios";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import { useNavigate } from "react-router-dom";

function MisTurnos () {
   const [appointments, setAppointments] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const navigate = useNavigate();
   
   const getAppointments = async () => {
    try {
      setLoading(true);
      setError(null);
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await axios.get(`http://localhost:8080/appointments?userId=${user.id}`);
      setAppointments(response.data);        
    } catch (error) {
      console.error(error);
      setError("Ocurrio un error al pedir los turnos");
    }finally {
      setLoading(false);
    }
   };

   const handleAddAppointment = (appointment) => {
    setAppointments((prevState) => [...prevState, appointment]);
   };

   const handleCancelAppointment = () => {
    getAppointments();
   };

   useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");      
    }else{
       getAppointments();
    }
   }, [navigate]);

   return (
    <main className={styles.misTurnosContainer}>
      <h2>Formulario de reserva</h2>
      <AppointmentForm onAddAppointment={handleAddAppointment}/>
      <h2>Mis Turnos</h2>
      <div className={styles.turnosList}>
         {loading ? (
          <h2>Loading...</h2>
         ) : (
          appointments.map((appoint)=> <AppointmentCard key={appoint.id} appointment={appoint} onCancel={handleCancelAppointment}/>)
          )} 
          
          {error && <p>{error}</p>}             
       </div>
    </main>
   );   
}

export default MisTurnos;
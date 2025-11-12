import { ErrorMessage, Field, Form, Formik } from "formik";
import { validateAppointment } from "../../helpers/validateAppointment";
import axios from "axios";
import styles from "./AppointmentForm.module.css";

function AppointmentForm({onAddAppointment}) {
const initialState = {
    date: "",
    time: "",
};

const handleSubmit = async (values) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));

        const response = await axios.post("http://localhost:8080/appointments/schedule", {
            ... values, 
            userId: user.id,
        });
        onAddAppointment(response.data);
        alert("Turno reservado");        
    } catch (error) {
        console.error(error);
        alert("Ocurrio un error al enviar el formulario");

        
    }
};

const hours = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
];



return (
<Formik 
initialValues={initialState} 
validate= {validateAppointment} 
onSubmit={handleSubmit}>
    <Form className={styles.appointmentForm}>
        <div className={styles.inputGroup}>
            <label>Fecha de reserva</label>
            <Field type="date" name="date"></Field>
            <p>
                <ErrorMessage name="date"></ErrorMessage>
            </p>
        </div>
        <div className={styles.inputGroup}>
         
            <label>Hora</label>
            <Field as="select" name="time">
                {hours.map((hour, index) => (
                    <option value={hour} key={index}>
                    {hour}
                    </option>
                ))}
            </Field>
            <p>
                <ErrorMessage name="date"></ErrorMessage>
            </p>
        </div>
        <button type="submit">Reservar</button>
    </Form>
</Formik>
);
}

export default AppointmentForm;
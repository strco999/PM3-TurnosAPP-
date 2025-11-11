import { ErrorMessage, Field, Form, Formik } from "formik";
import { validateLogin } from "../../../helpers/validateLogin";
import axios from "axios";
import styles from "./Login.module.css";

function Login () {
const initialState = {
    username: "",
    password: "",
};

    const handleSubmit = async (values) => {
        try {
          const response = await axios.post("http://localhost:8080/users/login", values);
          console.log(response.data);
      } catch (error) {
  console.error(error);
  alert("Ocurrió un error al enviar el formulario");
}
    };

    return (
    <main className={styles.loginContainer}>
        <h2>Login</h2>
        <Formik initialValues={initialState} validate={validateLogin} onSubmit={handleSubmit}>
        <Form>
            <div className={styles.inputGroup}>
                <label>Nombre de usuario</label>
                <Field type="text" name="username"/>
                <p>
                    <ErrorMessage name = "username" />
                </p>
            </div>
            <div className={styles.inputGroup}>
            
                <label>Contraseña</label>
                <Field type="password" name="password"/>
                <p>
                    <ErrorMessage name = "password" />
                </p>
            </div>
            <button type="submit">Enviar</button>

        </Form>
        </Formik>
    </main>
    );
}

export default Login;

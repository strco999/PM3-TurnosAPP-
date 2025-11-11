import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown -1);
        }, 1000);

        const navigatePageTimeout = setTimeout(() => {
            clearInterval(countdownInterval);
            navigate("/");
        }, 5000);

        return () => {
            clearInterval(countdownInterval);
            clearTimeout(navigatePageTimeout);
        };
    }, [navigate]);

    return (
        <main>
            <h2>Pagina no encontrada</h2>
            <p>vas a ser redirigido a la pagina principal en {countdown} segundo</p>
        </main>
    );
}

export default PageNotFound;
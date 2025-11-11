import styles from "./Navbar.module.css";
import {Link} from "react-router-dom";

function Navbar () {
return (
<header className={styles.header}>
    <h1> Turnos </h1>
        <nav>
            <ul className={styles.navList}>
                <li>
                   <Link to="/">Home</Link>
               </li>
                <li>
                   <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/appointments">Mis Turnos</Link>
                </li>
            </ul>
        </nav>
    </header>
);
  
}


export default Navbar;
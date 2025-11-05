import styles from "./Navbar.module.css";

function Navbar () {
return (
<header className={styles.header}>
    <h1> turnos </h1>
        <nav>
            <ul className={styles.navList}>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Register</a>
                </li>
                <li>
                    <a href="">Login</a>
                </li>
            </ul>
        </nav>
    </header>
);
  
}


export default Navbar;
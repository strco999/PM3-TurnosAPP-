import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import {Link, useNavigate} from "react-router-dom";

function Navbar () {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

useEffect(() => {
   setUser(JSON.parse(localStorage.getItem("user")));

	 const handleUserChange = () => {
   setUser(JSON.parse(localStorage.getItem("user")));
	 };

	 window.addEventListener("userChange", handleUserChange);
}, []);

const handleLogout = () => {
	localStorage.removeItem("user");
	setUser(null);
	navigate("/login");
}

return (
<header className={styles.header}>
   
		<Link to="/">Turnos App</Link>
        <nav>
            <ul className={styles.navList}>
                <li>
                   <Link to="/">Home</Link>
               </li>
               {user ?  (
								<>
                <li>
                  <Link to="/appointments">Mis Turnos</Link>
                </li> 
								<li>
									<button onClick={handleLogout}>Logout</button>
								</li>
								</>
                 ) : (
                    <>
                 <li>
                  <Link to="/register">Registro</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                </>
                )}             
            </ul>
        </nav>
    </header>
);
  
}


export default Navbar;
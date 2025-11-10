import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Login from './views/Home/Login/Login';
import MisTurnos from './views/MisTurnos/MisTurnos';
import Register from './views/Register/Register';


function App() {
  return (
  <> 
   <Navbar/>
   <Home/>
   <MisTurnos/>
   <Register/>
   <Login/>
    
  </>
  );
}

export default App;







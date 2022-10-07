import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import './Menu.css'



function Menu() {
  return (
    <>
   <nav>
    <ul>
      <li><Link to="/" className="menu">Inicio</Link></li>
      <li><Link to="/projects" className="menu">Proyectos</Link></li>
      <li><Link to="/contact" className="menu">Contacto</Link></li>
    </ul>
   </nav>
    
    </>
  )
}
export default Menu;

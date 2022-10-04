import React from "react";
import Button from 'react-bootstrap/Button';
import './Home.css';
import perfil from '../../img/perfil.jpg'


function Home (){
    return (
        <div className="body">
        <h1>Hola, soy Laura</h1>
        <h2>Desarrolladora Frontend</h2>
        
        <div className="image">
        <img src={perfil} alt="img" />
        <Button Link to="/contact">Contáctate conmigo</Button>
        </div>
        </div>
    )
}
export default Home;
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

const Actividad = ({actividad}) => {
    return (  
        <div>
            <li>
                <div>
                    <h3>Nombre: {actividad.nombreActividad} Fecha de Inicio: {actividad.fechaInicio} Fecha de Fin: {actividad.fechaTermino}</h3>
                    <Button variant = "info">Info</Button>
                    <Button variant = "primary">Editar</Button>
                    <Button variant = "danger">Eliminar</Button>
                </div>
            </li>
        </div>
    );
}
 
export default Actividad;
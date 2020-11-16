import React from 'react'

const Actividad = ({actividad}) => {
    return (  
        <div>
            <li>
    <h3>Nombre: {actividad.nombre} Fecha de Inicio: {actividad.fechaInicio} Fecha de Fin: {actividad.fechaFin}</h3>
            </li>
        </div>
    );
}
 
export default Actividad;
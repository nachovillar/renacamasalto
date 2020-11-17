import React from 'react'

const Actividad = ({actividad}) => {
    return (  
        <div>
            <li>
    <h3>Nombre: {actividad.nombreActividad} Fecha de Inicio: {actividad.fechaInicio} Fecha de Fin: {actividad.fechaTermino}</h3>
            </li>
        </div>
    );
}
 
export default Actividad;
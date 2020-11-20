import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import actividadContext from '../../context/actividad/ActividadContext'

const Actividad = ({actividad}) => {

    const { eliminarActividad, obtenerActividades} = useContext(actividadContext)

    const deleteActividad = id => {
        eliminarActividad(id)
        obtenerActividades()
    }

    return (  
        <div>
            <li>
                <div>
                    <h3>Nombre: {actividad.nombreActividad} Fecha de Inicio: {actividad.fechaInicio} Fecha de Fin: {actividad.fechaTermino}</h3>
                    <Button variant = "info">Info</Button>
                    <Button variant = "primary">Editar</Button>
                    <Button 
                        variant = "danger"
                        onClick = {() => deleteActividad(actividad.id)}
                    >Eliminar</Button>
                </div>
            </li>
        </div>
    );
}
 
export default Actividad;
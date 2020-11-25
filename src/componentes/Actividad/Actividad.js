import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import actividadContext from '../../context/actividad/ActividadContext'
import './Actividad.css'

const Actividad = ({actividad}) => {

    const actividadesContext  = useContext(actividadContext)
    const { eliminarActividad, obtenerActividades, guardarActividadActual, mostrarFormulario } = actividadesContext

    const deleteActividad = id => {
        eliminarActividad(id)
        obtenerActividades()
    }

    const seleccionarActividad = actividad =>{
        guardarActividadActual(actividad)
        mostrarFormulario()
    }

    return (  
        <div>
            <li>
                <div className="contenedor-evento">
                    <div className="nombreE">
                        <h3>Nombre</h3><p>{actividad.nombre}</p>
                    </div>
                    <div className="fechasEvento">
                        <div className="fechaE"><h3>Fecha de Inicio</h3><p>{actividad.fecha_hora_inicio}</p></div>
                        <div className="fechaE"><h3>Fecha de Término</h3><p>{actividad.fecha_hora_termino}</p></div>
                    </div>
                    <div className="botones">
                    <Button className="botonEvent" variant = "info">Info</Button>

                    <Button 
                        className="botonEvent"
                        variant = "primary"
                        onClick = {() => seleccionarActividad(actividad)}
                    >Editar</Button>

                    <Button 
                        className="botonEvent"
                        variant = "danger"
                        onClick = {() => deleteActividad(actividad.id)}
                    >Eliminar</Button>
                    </div>
                </div>
            </li>
        </div>
    );
}
 
export default Actividad;
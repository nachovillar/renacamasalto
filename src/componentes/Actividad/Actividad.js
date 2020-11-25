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

    const postularActividad = id =>{
        postularActividad(id)
        mostrarFormulario()
    }

    const retirarActividad = id =>{
        retirarActividad(id)
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
                        <div className="fechaE"><h3>Fecha de Inicio</h3><p>{actividad.fechaInicio}</p></div>
                        <div className="fechaE"><h3>Fecha de Término</h3><p>{actividad.fechaTermino}</p></div>
                    </div>
                    <div className="fechasEvento">
                        <div className="fechaE"><h3>Hora de Inicio</h3><p>{actividad.horaInicio}</p></div>
                        <div className="fechaE"><h3>Hora de Término</h3><p>{actividad.horaTermino}</p></div>
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

                    <Button
                        className="botonEvent postular"
                        onClick = {() => postularActividad(actividad.id)}
                    >Inscribir a evento</Button>
                    <Button
                        className="botonEvent"
                        variant = "warning"
                        onClick = {() => retirarActividad(actividad.id)}
                    >Desinscribir</Button>
                    </div>
                </div>
            </li>
        </div>
    );
}
 
export default Actividad;
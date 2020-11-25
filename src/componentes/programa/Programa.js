import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import programaContext from '../../context/programa/ProgramaContext'
import '../Actividad/Actividad.css'

const Programa = ({programa}) => {

    const programasContext  = useContext(programaContext)
    const { eliminarPrograma/*, obtenerProgramas**/, guardarProgramaActual, mostrarFormulario } = programasContext

    const deletePrograma = id => {
        eliminarPrograma(id)
        //obtenerProgramas()
    }

    const seleccionarPrograma = programa =>{
        guardarProgramaActual(programa)
        mostrarFormulario()
    }
 

    return (  
        <div>
            <li>
                <div className="programa contenedor-evento">
                    <div className="nombreE">
                        <h3>Nombre</h3><p>{programa.nombrePrograma}</p>
                    </div>
                    <div className="botones">
                    <Button className="botonEvent" variant = "info">Info</Button>

                    <Button 
                        className="botonEvent"
                        variant = "primary"
                        onClick = {() => seleccionarPrograma(programa)}
                    >Editar</Button>

                    <Button 
                        className="botonEvent"
                        variant = "danger"
                        onClick = {() => deletePrograma(programa.id)}
                    >Eliminar</Button>

                    </div>
                </div>
            </li>
        </div>
    );
}
 
export default Programa;
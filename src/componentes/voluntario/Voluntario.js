import React, { useContext } from 'react'
import voluntarioContext from '../../context/voluntario/VoluntarioContext'
import './Voluntario.css'
import {Button} from 'react-bootstrap'

const Voluntario = ({voluntario}) => {

    const voluntariosContext = useContext(voluntarioContext)
    const { eliminarVoluntario, obtenerVoluntarios, guardarVoluntarioActual, mostrarFormulario } = voluntariosContext

    const deleteVoluntario = id => {
        eliminarVoluntario(id)
        obtenerVoluntarios()
    }
    
    const seleccionarVoluntario = voluntario =>{
        guardarVoluntarioActual(voluntario)
        mostrarFormulario()
    }
     

    return(

        <div className="voluntario container-fluid">
            <div className="row justify-content-center">
                <div className="col-xs-12">
                    <h3>RUT: </h3>
                </div>
                <div className="col-xs-12 valorRut">
                    <p>{voluntario.id_rut}</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xs-6">
                    <h3>Nombre: </h3>
                </div>
                <div className="col-xs-6 valorRut">
                    <p>{voluntario.nombres}    </p>
                </div>
                <div className="col-xs-6">
                    <h3>Apellido: </h3>
                </div>
                <div className="col-xs-6 valorRut">
                    <p>{voluntario.apellidos}    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xs-12">
                    <h3>Permisos: </h3>
                </div>
                <div className="col-xs-12 valorRut">
                    <p>{voluntario.permisos}</p>
                </div>
            </div>
            <div className="editarV">
                <Button 
                    className="botonEvent"
                    variant = "primary"
                    onClick = {() => seleccionarVoluntario(voluntario,'Editar')}
                >Editar Permisos</Button>
            </div>
            
        </div>
        
    );
}

export default Voluntario;
import React, { useContext } from 'react'
import voluntarioContext from '../../context/voluntario/VoluntarioContext'
import './Voluntario.css'
import {Button} from 'react-bootstrap'
import Swal from 'sweetalert2'

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
    function alerta(){
        Swal.fire({
            title: '¿Estás seguro(a)?',
            text: "No se podra revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, reiniciar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Reiniciada!',
                'La contraseña se ha reiniciado satisfactoriamente',
                'success'
              )
            }
          })
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
            <div className = "row justify-content-center">
                <div className="editarV">
                    <Button 
                        className="botonEvent"
                        variant = "primary"
                        onClick = {() => seleccionarVoluntario(voluntario,'Editar')}
                    >Editar Permisos</Button>
                </div>
                <div className="editarCont">
                    <Button 
                        className="botonEvent"
                        variant = "warning"
                        onClick = {() => alerta()}
                    >Reiniciar Contraseña</Button>
                </div>
            </div>
            
        </div>
        
    );
}

export default Voluntario;
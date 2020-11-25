import React, { useContext } from 'react'
import voluntarioContext from '../../context/voluntario/VoluntarioContext'
import './Voluntario.css'

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
                    <p>{voluntario.rut}</p>
                </div>
            </div>
        </div>
        
    );
}

export default Voluntario;
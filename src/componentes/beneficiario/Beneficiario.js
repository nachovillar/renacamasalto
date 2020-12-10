import React, { useContext } from 'react'
import {Button} from 'react-bootstrap'
import beneficiarioContext from '../../context/beneficiario/BeneficiarioContext'
import './Beneficiario.css'

const Beneficiario = ({beneficiario}) => {

    const beneficiariosContext = useContext(beneficiarioContext)
    const { eliminarBeneficiario, obtenerBeneficarios, guardarBeneficiarioActual, mostrarFormulario } = beneficiariosContext

    const deleteBeneficiario = id => {
        eliminarBeneficiario(id)
        obtenerBeneficarios()
    }
    
    const seleccionarBeneficiario = beneficiario =>{
        guardarBeneficiarioActual(beneficiario)
        mostrarFormulario()
    }
     

    return(

        <div className="beneficiario container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-3">
                    <h3>Nombre(s)(*)</h3>
                    <p>{beneficiario.nombres}</p>
                </div>
                <div className="col-sm-12 col-md-3">
                    <h3>Apellido(s)</h3>
                    <p>{beneficiario.apellidos}</p>
                </div>
                <div className="col-sm-12 col-md-3">
                    <h3>Género</h3>
                    <p>{beneficiario.genero}</p>
                </div>
                <div className="col-sm-12 col-md-3">
                    <h3>Fecha de Nacimiento</h3>
                    <p>{beneficiario.fecha_nacimiento}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <h3>Telefono</h3>
                    <p>{beneficiario.telefono}</p>
                </div>
                <div className="col-sm-12 col-md-4">
                    <h3>Ocupación</h3>
                    <p>{beneficiario.ocupacion}</p>
                </div>
                <div className="col-sm-12 col-md-4">
                    <h3>Activo (*)</h3>
                    <p>{beneficiario.es_activo}</p>
                </div>
            </div>
            <div className="editarB">
                <Button 
                    className="botonEvent"
                    variant = "primary"
                    onClick = {() => seleccionarBeneficiario(beneficiario,'Editar')}
                >Editar</Button>
            </div>
        </div>
        
    );
}

export default Beneficiario;

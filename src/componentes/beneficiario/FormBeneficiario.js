import React, { Fragment, useState, useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'
import './FormBeneficiario.css'
import beneficiarioContext from '../../context/beneficiario/BeneficiarioContext'

const FormBeneficiario = () => {

    const beneficiariosContext = useContext(beneficiarioContext)
    const { beneficiarioSeleccionada ,formulario , errorformulario,ocultarError,
            mostrarFormulario, agregarBeneficiario, mostrarError, editarBeneficiario, ocultarFormulario } = beneficiariosContext

    

    const [beneficiario, guardarBeneficiario] = useState({
        id_rut: '',
        nombres: '',
        apellidos: '',
        genero:'',
        fecha_nacimiento:'',
        telefono:'',
        ocupacion:'',
        es_activo:'',
    })


    useEffect(() =>{

        if(beneficiarioSeleccionada !== null){
            guardarBeneficiario(beneficiarioSeleccionada)
            
        }
        else{
            guardarBeneficiario({
                id_rut: '',
                nombres: '',
                apellidos: '',
                genero:'',
                fecha_nacimiento:'',
                telefono:'',
                ocupacion:'',
                es_activo:'',
            })
        }

    }, [beneficiarioSeleccionada])

    const {id_rut, nombres, apellidos, genero, fecha_nacimiento, telefono, ocupacion, es_activo} = beneficiario

    

    const onChangeBeneficiario = e => {

        guardarBeneficiario({
            ...beneficiario,
            [e.target.getAttribute('name')]: e.target.value
        })
    }

    const onSubmitBeneficiario = e => {
        e.preventDefault()

        if(id_rut === '' || es_activo === '' || nombres === ''){
            mostrarError("null")
            return
        }

        if(beneficiarioSeleccionada === null){
            agregarBeneficiario(beneficiario)
            ocultarError()
            ocultarFormulario()
            
        } else {
            editarBeneficiario(beneficiario)
            ocultarError()
            ocultarFormulario()
        }

        guardarBeneficiario({
            id_rut: '',
            nombres: '',
            apellidos: '',
            genero:'',
            fecha_nacimiento:'',
            telefono:'',
            ocupacion:'',
            es_activo:'',
        })

    }
    
    return (        
        <Fragment>
            <div className = "nuevo-beneficiario">
                <Button
                    className = "button-danger" 
                    variant = "danger"
                    type = "button"
                    onClick = {() => mostrarFormulario()}
                >Nuevo Beneficiario</Button>

                {formulario
                    ?(
                        <Form onSubmit = {onSubmitBeneficiario}>

                            <div className = "inputbox">
                                <Form.Group controlId="dob">
                                    <Form.Label>Nombre(s)(*)</Form.Label>
                                    <Form.Control 
                                        name = "nombres"
                                        type = "text" 
                                        placeholder = "Nombre del beneficiario"
                                        value = {nombres}
                                        onChange = {onChangeBeneficiario}       
                                    />
                                </Form.Group>
                            </div>
            
                            <div className = "inputbox">
                                <Form.Group controlId="dob">
                                    <Form.Label>Apellido(s)</Form.Label>
                                    <Form.Control
                                        name = "apellidos"
                                        type = "text" 
                                        placeholder = "Ingrese el apellido(s)"
                                        value = {apellidos}
                                        onChange = {onChangeBeneficiario}       
                                    />
                                    
                                </Form.Group>
                            </div>
            
                            <div className = "inputbox">
                                <Form.Group controlId="dob">
                                    <Form.Label>RUT</Form.Label>
                                    <Form.Control
                                        name = "id_rut"
                                        type = "text" 
                                        placeholder = "Ingrese su RUT"
                                        value = {id_rut}
                                        onChange = {onChangeBeneficiario}       
                                    />
                                    
                                </Form.Group>
                            </div>

                            <div className = "inputbox">
                                <Form.Group controlId="dob">
                                    <Form.Label>Género</Form.Label>
                                    <Form.Control as="select"
                                        name = "genero"
                                        type = "text" 
                                        placeholder = "Ingrese el genero"
                                        value = {genero}
                                        onChange = {onChangeBeneficiario}   
                                    >
                                    <option>Masculino</option>
                                    <option>Femenino</option>
                                    <option>Otro</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>

                            <div className = "inputbox">
                                <Form.Group controlId="dob">
                                    <Form.Label>Fecha de Nacimiento</Form.Label>
                                    <Form.Control 
                                        name = "fecha_nacimiento"
                                        type = "date" 
                                        id="start"
                                        placeholder = "Ingrese fecha"
                                        value = {fecha_nacimiento}
                                        onChange = {onChangeBeneficiario}       
                                    />
                                </Form.Group>
                            </div>

                            <div className = "inputbox">
                                <Form.Group controlId="dob">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control 
                                        name = "telefono"
                                        type = "number" 
                                        placeholder = "Ingrese teléfono"
                                        value = {telefono}
                                        onChange = {onChangeBeneficiario}       
                                    />
                                </Form.Group>
                            </div>

                            <div className = "inputbox">
                                <Form.Group controlId="dob">
                                    <Form.Label>Ocupación</Form.Label>
                                    <Form.Control 
                                        name = "ocupacion"
                                        type = "text" 
                                        placeholder = "Ingrese ocupación"
                                        value = {ocupacion}
                                        onChange = {onChangeBeneficiario}       
                                    />
                                </Form.Group>
                            </div>

                            <div className = "inputbox">
                                <Form.Group controlId="dob">
                                    <Form.Label>Activo(*)</Form.Label>
                                    <Form.Control as="select" 
                                        name = "es_activo"
                                        type = "text" 
                                        placeholder = "Ingrese Actividad"
                                        value = {es_activo}
                                        onChange = {onChangeBeneficiario}       
                                    >
                                        <option>0</option>
                                        <option>1</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div className="container">
                                <div className="row botonesBeneficiario">
                                    <div className = "submitButton col-md-6 botonEditarB">
                                        <Button
                                                variant = "success"
                                                type = "submit"
                                                className = "button-primary"

                                        >Guardar</Button>
                                    </div>
                                    <div className="submitButton col-md-6 botonCancelarB">
                                        <Button
                                            variant = "success"
                                            type = "submit"
                                            className = "btn-danger"
                                            onClick={()=> ocultarFormulario()}
                                        >Cancelar</Button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    ) : null 
                
                }

                {errorformulario
                    ? <p className = "mensaje-error">Recuerde llenar los campos obligatorios (*)</p>
                    : null
                }

            </div>
        </Fragment>  
    )
}
 
export default FormBeneficiario;
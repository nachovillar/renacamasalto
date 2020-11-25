import React, { Fragment, useState, useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'
import './FormVoluntario.css'

import voluntarioContext from '../../context/voluntario/VoluntarioContext'

const FormVoluntario = () => {

    const voluntariosContext = useContext(voluntarioContext)
    const { voluntarioSeleccionada ,formulario , errorformulario,
            mostrarFormulario, agregarVoluntario, mostrarError, editarVoluntario, ocultarFormulario } = voluntariosContext

    

    const [voluntario, guardarVoluntario] = useState({
        id:'',
        rut:'',
    })


    useEffect(() =>{

        if(voluntarioSeleccionada !== null){
            guardarVoluntario(voluntarioSeleccionada)
            
        }
        else{
            guardarVoluntario({
                id:'',
                rut:'',
            })
        }

    }, [voluntarioSeleccionada])

    const {id, rut} = voluntario

    

    const onChangeVoluntario = e => {

        guardarVoluntario({
            ...voluntario,
            [e.target.getAttribute('name')]: e.target.value
        })
    }

    const onSubmitVoluntario = e => {
        e.preventDefault()

        if(rut === ''){
            mostrarError()
            return
        }

        if(voluntarioSeleccionada === null){
            agregarVoluntario(voluntario)
            ocultarFormulario()
            
        } 

        guardarVoluntario({
            id:'',
            rut:'',
        })

    }
    
    return (
        <Fragment>
            <div className = "nuevo-voluntario">
                <Button
                    className = "button-danger" 
                    variant = "danger"
                    type = "button"
                    onClick = {() => mostrarFormulario()}
                >Crear Voluntario</Button>

                {formulario
                    ?(
                        <Form onSubmit = {onSubmitVoluntario}>
                            <div className = "inputbox">
                                <Form.Group>
                                    <Form.Label>RUT</Form.Label>
                                    <Form.Control 
                                        name = "rut"
                                        type = "text" 
                                        placeholder = "Ej: 12345678-9"
                                        value = {rut}
                                        onChange = {onChangeVoluntario}       
                                    />
                                </Form.Group>
                            </div>
            
                            <div className="container">
                                <div className="row botonesBeneficiario">
                                    <div className = "submitButton col-md-6 botonEditarB">
                                        <Button
                                                variant = "success"
                                                type = "submit"
                                                className = "button-primary"

                                        >{voluntarioSeleccionada ? 'Editar':'Agregar'}</Button>
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
                    ? <p className = "mensaje-error">Recuerde rellenar el campo RUT</p>
                    : null
                }

            </div>
        </Fragment>  

    )
}
 
export default FormVoluntario;
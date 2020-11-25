import React, { Fragment, useState, useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'
import './FormActividad.css'

import programaContext from '../../context/programa/ProgramaContext'

const FormPrograma = () => {

    const programasContext = useContext(programaContext)
    const { programaSeleccionado ,formulario , errorformulario,
            mostrarFormulario, agregarPrograma, mostrarError, editarPrograma, ocultarFormulario } = programasContext

    

    const [programa, guardarPrograma] = useState({
        nombrePrograma: '',
        fechaInicio: '',
        fechaTermino: ''
    })


    useEffect(() =>{

        if(programaSeleccionado !== null){
            guardarPrograma(programaSeleccionado)
            
        }
        else{
            guardarPrograma({
                nombrePrograma: '',
                fechaInicio: '',
                fechaTermino: ''

            })
        }

    }, [programaSeleccionado])

    const {nombrePrograma, fechaInicio, fechaTermino} = programa

    

    const onChangePrograma = e => {

        guardarPrograma({
            ...programa,
            [e.target.getAttribute('name')]: e.target.value
        })
    }

    const onSubmitPrograma = e => {
        e.preventDefault()

        if(nombrePrograma === '' || fechaInicio === '' || fechaTermino === ''){
            mostrarError()
            return
        }

        if(programaSeleccionado === null){
            agregarPrograma(programa)
            ocultarFormulario()
            
        } else {
            editarPrograma(programa)
            ocultarFormulario()
        }

        guardarPrograma({
            nombrePrograma: '',
            fechaInicio: '',
            fechaTermino: ''
        })

    }
    
    return (
        <Fragment>
            <div className = "nueva-actividad">
                <Button
                    className = "button-danger" 
                    variant = "danger"
                    type = "button"
                    onClick = {() => mostrarFormulario()}
                >Nuevo Evento</Button>

                {formulario
                    ?(
                        <Form onSubmit = {onSubmitPrograma}>
                            <div className = "inputbox">
                                <Form.Group>
                                    <Form.Label>Nombre Evento</Form.Label>
                                    <Form.Control 
                                        name = "nombrePrograma"
                                        type = "text" 
                                        placeholder = "Nombre del evento"
                                        value = {nombrePrograma}
                                        onChange = {onChangePrograma}       
                                    />
                                </Form.Group>
                            </div>
            
                            <div className = "inputbox">
                                <Form.Group controlId="dob">
                                    <Form.Label>Fecha de Inicio</Form.Label>
                                    <Form.Control 
                                        name = "fechaInicio"
                                        type = "date" 
                                        placeholder = "Ingrese el nombre del Programa"
                                        value = {fechaInicio}
                                        onChange = {onChangePrograma}       
                                    />
                                </Form.Group>
                            </div>
            
                            <div className = "inputbox">
                                <Form.Group controlId="dob">
                                    <Form.Label>Fecha de Término</Form.Label>
                                    <Form.Control 
                                        name = "fechaTermino"
                                        type = "date" 
                                        placeholder = "Ingrese el nombre del programa"
                                        value = {fechaTermino}
                                        onChange = {onChangePrograma}       
                                    />
                                </Form.Group>
                            </div>
            
                            <div className = "submitButton">
                                <Button
                                        variant = "success"
                                        type = "submit"
                                        className = "button-primary"

                    >{ programaSeleccionado ? 'Editar' : 'Agregar' }</Button>
                            
                            </div>
            
                        </Form>
                    ) : null 
                
                }

                {errorformulario
                    ? <p className = "mensaje-error">Recuerde que los campos de nombre y fechas son obligtorios</p>
                    : null
                }

            </div>
        </Fragment>  

    )
}
 
export default FormPrograma;
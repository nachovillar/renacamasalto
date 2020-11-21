import React, { Fragment, useState, useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'
import './FormActividad.css'

import actividadContext from '../../context/actividad/ActividadContext'

const FormActividad = () => {

    const actividadesContext = useContext(actividadContext)
    const { actividadSeleccionada ,formulario , errorformulario,
            mostrarFormulario, agregarActividad, mostrarError, editarActividad, ocultarFormulario } = actividadesContext

    

    const [actividad, guardarActividad] = useState({
        nombreActividad: '',
        fechaInicio: '',
        fechaTermino: ''
    })


    useEffect(() =>{

        if(actividadSeleccionada !== null){
            guardarActividad(actividadSeleccionada)
            
        }
        else{
            guardarActividad({
                nombreActividad: '',
                fechaInicio: '',
                fechaTermino: ''

            })
        }

    }, [actividadSeleccionada])

    const {nombreActividad, fechaInicio, fechaTermino} = actividad

    

    const onChangeActividad = e => {

        guardarActividad({
            ...actividad,
            [e.target.getAttribute('name')]: e.target.value
        })
    }

    const onSubmitActividad = e => {
        e.preventDefault()

        if(nombreActividad === '' || fechaInicio === '' || fechaTermino === ''){
            mostrarError()
            return
        }

        if(actividadSeleccionada === null){
            agregarActividad(actividad)
            ocultarFormulario()
            
        } else {
            editarActividad(actividad)
            ocultarFormulario()
        }

        guardarActividad({
            nombreActividad: '',
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
                        <Form onSubmit = {onSubmitActividad}>
                            <div className = "inputbox">
                                <Form.Group>
                                    <Form.Label>Nombre Evento</Form.Label>
                                    <Form.Control 
                                        name = "nombreActividad"
                                        type = "text" 
                                        placeholder = "Nombre del evento"
                                        value = {nombreActividad}
                                        onChange = {onChangeActividad}       
                                    />
                                </Form.Group>
                            </div>
            
                            <div className = "inputbox">
                                <Form.Group controlId="dob">
                                    <Form.Label>Fecha de Inicio</Form.Label>
                                    <Form.Control 
                                        name = "fechaInicio"
                                        type = "date" 
                                        placeholder = "Ingrese el nombre de la actividad"
                                        value = {fechaInicio}
                                        onChange = {onChangeActividad}       
                                    />
                                </Form.Group>
                            </div>
            
                            <div className = "inputbox">
                                <Form.Group controlId="dob">
                                    <Form.Label>Fecha de Término</Form.Label>
                                    <Form.Control 
                                        name = "fechaTermino"
                                        type = "date" 
                                        placeholder = "Ingrese el nombre de la actividad"
                                        value = {fechaTermino}
                                        onChange = {onChangeActividad}       
                                    />
                                </Form.Group>
                            </div>
            
                            <div className = "submitButton">
                                <Button
                                        variant = "success"
                                        type = "submit"
                                        className = "button-primary"

                    >{ actividadSeleccionada ? 'Editar' : 'Agregar' }</Button>
                            
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
 
export default FormActividad;
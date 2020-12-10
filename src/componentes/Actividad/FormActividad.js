import React, { Fragment, useState, useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'
import './FormActividad.css'
import Evento from '../../models/Evento'

import actividadContext from '../../context/actividad/ActividadContext'
import { VALIDAR_FORMULARIO_V } from '../../types'

const FormActividad = () => {

    const actividadesContext = useContext(actividadContext)
    const { actividadSeleccionada ,formulario , errorformulario,
            mostrarFormulario, agregarActividad, mostrarError, editarActividad, ocultarFormulario } = actividadesContext

    
    // const actividad = actividadSeleccionada
    // var guardarActividad = new Evento()

    // const [actividad, guardarActividad] = useState({
    //     nombre: '',
    //     fecha_hora_inicio: '',
    //     fecha_hora_termino: '',
    //     hora_inicio: '',
    //     hora_termino: ''
    // })
    var [actividad, guardarActividad] = useState(new Evento())

    useEffect(() =>{

        if(actividadSeleccionada !== null){
            guardarActividad(actividadSeleccionada)
            
        }
        // else{
        //     guardarActividad({
        //         nombre: '',
        // fecha_hora_inicio: '',
        // fecha_hora_termino: '',
        // hora_inicio: '',
        // hora_termino: ''

        //     })
        // }

    }, [actividadSeleccionada])

    // const {nombre,
    //      fecha_hora_inicio,
    //       fecha_hora_termino,
    //        hora_inicio,
    //         hora_termino} = actividad

    

    

    const onChangeActividad = e => {

        guardarActividad({
            ...actividad,
            [e.target.getAttribute('name')]: e.target.value
        })
    }

    const onSubmitActividad = e => {
        e.preventDefault()

        if(actividad.nombre === '' || actividad.fechaInicio === '' || actividad.fechaTermino === ''){
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
            nombre: '',
        fecha_hora_inicio: '',
        fecha_hora_termino: '',
        hora_inicio: '',
        hora_termino: ''
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
                                        name = "nombre"
                                        type = "text" 
                                        placeholder = "Nombre del evento"
                                        value = {actividad.nombre}
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
                                        placeholder = "Fecha inicio de la actividad"
                                        value = {actividad.fechaInicio}
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
                                        placeholder = "Fecha de terminp de la actividad"
                                        value = {actividad.fechaTermino}
                                        onChange = {onChangeActividad}       
                                    />
                                </Form.Group>
                            </div>

                            <div className = "inputbox">
                                <Form.Group controlId="dob">
                                    <Form.Label>Hora de Inicio</Form.Label>
                                    <Form.Control 
                                        name = "horaInicio"
                                        type = "time" 
                                        placeholder = "Ingrese el nombre de la actividad"
                                        value = {actividad.horaInicio}
                                        onChange = {onChangeActividad}       
                                    />
                                </Form.Group>
                            </div>
            
                            <div className = "inputbox">
                                <Form.Group controlId="dob">
                                    <Form.Label>Hora de Término</Form.Label>
                                    <Form.Control 
                                        name = "horaTermino"
                                        type = "time" 
                                        placeholder = "Ingrese el nombre de la actividad"
                                        value = {actividad.horaTermino}
                                        onChange = {onChangeActividad}       
                                    />
                                </Form.Group>
                            </div>

                            <div className = "inputbox">
                                <Form.Group>
                                    <Form.Label>Descripcion</Form.Label>
                                    <Form.Control 
                                        name = "descripcion"
                                        as = "textarea"
                                        rows = "3" 
                                        placeholder = "Nombre del evento"
                                        value = {actividad.descripcion}
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
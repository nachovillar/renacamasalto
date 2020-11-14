import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap'
import './FormActividad.css'

const NuevaActividad = () => {

    const [actividad, guardarActividad] = useState({
        nombreActividad: '',
        fechaInicio: '',
        fechaTermino: ''
    })

    const {nombreActividad, fechaInicio, fechaTermino} = actividad

    const onChangeActividad = e => {
        guardarActividad({
            ...actividad,
            [e.target.getAttribute('name')]: e.target.value
        })
    }

    return (  
        <div className = "nueva-actividad">
            <Button
                className = "button-danger" 
                variant = "danger"
                type = "button"
            >Nueva Actividad</Button>

            <Form>
                <div className = "inputbox">
                    <Form.Group>
                        <Form.Label>Nombre Actividad</Form.Label>
                        <Form.Control 
                            name = "nombreActividad"
                            type = "text" 
                            placeholder = "Ingrese el nombre de la actividad"
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
                            
                    >Ingresar</Button>
                
                </div>

            </Form>

        </div>

    )
}
 
export default NuevaActividad;
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap'
import './NuevaActividad.css'

const NuevaActividad = () => {

    const [actividad, guardarActividad] = useState({
        nombreActividad: ''
    })

    const {nombreActividad} = actividad

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
import React, { Fragment, useState, useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'
import './FormPrograma.css'

import programaContext from '../../context/programa/ProgramaContext'

const FormPrograma = () => {

    const programasContext = useContext(programaContext)
    const { programaSeleccionado ,formulario , errorformulario,
            mostrarFormulario, agregarPrograma, mostrarError, editarPrograma, ocultarFormulario } = programasContext

    

    const [programa, guardarPrograma] = useState({
        id: '',
        nombrePrograma: '',
    })


    useEffect(() =>{

        if(programaSeleccionado !== null){
            guardarPrograma(programaSeleccionado)
            
        }
        else{
            guardarPrograma({
                id: '',
                nombrePrograma: '',
            })
        }

    }, [programaSeleccionado])

    const {id, nombrePrograma} = programa

    

    const onChangePrograma = e => {

        guardarPrograma({
            ...programa,
            [e.target.getAttribute('name')]: e.target.value
        })
    }

    const onSubmitPrograma = e => {
        e.preventDefault()

        if(nombrePrograma === ''){
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
            id:'',
            nombrePrograma: '',
            
        })

    }
    
    return (
        <Fragment>
            <div className = "nuevo-programa">
                <Button
                    className = "button-danger" 
                    variant = "danger"
                    type = "button"
                    onClick = {() => mostrarFormulario()}
                >Nuevo Programa</Button>

                {formulario
                    ?(
                        <Form onSubmit = {onSubmitPrograma}>
                            <div className = "inputbox">
                                <Form.Group>
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control 
                                        name = "nombrePrograma"
                                        type = "text" 
                                        placeholder = "Nombre programa"
                                        value = {nombrePrograma}
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
                    ? <p className = "mensaje-error">Recuerde rellenar los campos</p>
                    : null
                }

            </div>
        </Fragment>  

    )
}
 
export default FormPrograma;
import React, { Fragment, useState, useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, FormControl, Modal, ModalBody, ModalFooter, Table } from 'react-bootstrap'
import './FormPrograma.css'
import programaContext from '../../context/programa/ProgramaContext'

const FormPrograma = () => {

    const programasContext = useContext(programaContext)
    const { programaSeleccionado, formulario , errorformulario,
        mostrarFormulario, agregarPrograma, mostrarError, editarPrograma, ocultarFormulario } = programasContext

    const [show, setShow] = useState(false)

    const [programa, guardarPrograma] = useState({
        id: '',
        nombrePrograma: '',
        fecha: '',
        descripcion: ''
    })


    useEffect(() =>{

        if(programaSeleccionado !== null){
            guardarPrograma(programaSeleccionado)
            
        }
        else{
            guardarPrograma({
                id: '',
                nombrePrograma: '',
                fecha: '',
                descripcion: ''
            })
        }

    }, [programaSeleccionado])

    const {id, nombrePrograma, fecha, descripcion} = programa

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const onChangePrograma = e => {

        guardarPrograma({
            ...programa,
            [e.target.getAttribute('name')]: e.target.value
        })
    }

    const onSubmitPrograma = e => {
        e.preventDefault()

        if(nombrePrograma === '' || fecha === ''){
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
            fecha: '',
            descripcion: ''
            
        })

    }

    
    return (
        <Fragment>

            <Button variant="primary" onClick={handleShow}>
                Nueva Sesion
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Nueva Sesion</Modal.Title>
                </Modal.Header>

                <Modal.Body>
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

                            <Form.Group controlId="dob">
                                <Form.Label>Fecha de Término</Form.Label>
                                <Form.Control 
                                    name = "fecha"
                                    type = "date" 
                                    placeholder = "Fecha de la sesión"
                                    value = {programa.fecha}
                                    onChange = {onChangePrograma}       
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Descripción</Form.Label>
                                <FormControl 
                                    as="textarea" 
                                    name = "descripcion"
                                    value = {programa.descripcion}
                                    onChange = {onChangePrograma}
                                />
                            </Form.Group>

                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td><input type = "checkbox"></input></td>
                                    </tr>
                                    
                                    
                                </tbody>
                                </Table>
                                
                        </div>
                        <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>

                    <Button type = "submit" variant="primary" >
                        Guardar Cambios
                    </Button>
                    </Form>
                </Modal.Body>
            </Modal>


            {/* <div>
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

            </div>*/}
        </Fragment>  

    )
}
 
export default FormPrograma;
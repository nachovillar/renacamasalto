import React, { useState } from 'react';
import logo from '../../imagenes/logo.png';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../layout/Footer'

const Login = () => {

    const [usuario, setUsuario] = useState({
        rut: '',
        contrasena: ''
    })

    const {rut, contrasena} = usuario;

    const onChange = e => {
        setUsuario({
        ...usuario,
        [e.target.getAttribute('name')]: e.target.value
        })
    }
    return ( 
        <div className = "Login">
            
            <div>
                <img src = {logo} alt = "Imagen del logo de reñaca más alto" className = "logo" />
            </div>

            <Form>
                <div className = "contenedorInputs">
                    
                    <div className = "inputbox">
                        <h2>Iniciar Sesión</h2>
                        <Form.Group>
                            <Form.Label>RUT</Form.Label>
                            <Form.Control 
                                name = "rut"
                                type = "text" 
                                placeholder = "Ej: 12345678-9" 
                                value = {rut}
                                onChange = {onChange}
                                    
                            />
                        </Form.Group>
                    </div>

                    <div className = "inputbox">
                        <Form.Group controlId="formBasicPassword">  
                            <Form.Label>CONTRASEÑA</Form.Label>
                            <Form.Control 
                                name = "contrasena"
                                type = "password" 
                                placeholder= "Ingrese su contraseña"
                                value = {contrasena}
                                onChange = {onChange}
                                
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
                    
                    <div>
                        <Link to = "/olvide-contrasena" className = "enlace-olvide-contrasena">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                    
                </div>
            </Form>
            <div>
                <Footer></Footer>
            </div>
        </div>
        
    )
}
 
export default Login;
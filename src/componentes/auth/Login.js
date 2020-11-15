import React, { useState } from 'react';
import logo from '../../imagenes/logo.png';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../layout/Footer'
import axios from 'axios'

const Login = () => {

    const [usuario, setUsuario] = useState({
        id_rut: '',
        password: ''
    })

    const {id_rut, password} = usuario;

    const onChange = e => {
        setUsuario({
        ...usuario,
        [e.target.getAttribute('name')]: e.target.value
        })
    }
	const submitHandler = e => {
		e.preventDefault()
		console.log(usuario)
		let json = 'json=' + JSON.stringify(usuario)
		axios.post('http://192.168.0.38/api/login',json)
			.then(response => {
				console.log(response)
			}).catch(error => {
				console.log(error)
			})
	}
    return ( 
        <div className = "Login">
            
            <div>
                <img src = {logo} alt = "Imagen del logo de reñaca más alto" className = "logo" />
            </div>

            <Form onSubmit = {submitHandler}>
                <div className = "contenedorInputs">
                    
                    <div className = "inputbox">
                        <h2>Iniciar Sesión</h2>
                        <Form.Group>
                            <Form.Label>RUT</Form.Label>
                            <Form.Control 
                                name = "id_rut"
                                type = "text" 
                                placeholder = "Ej: 12345678-9" 
                                value = {id_rut}
                                onChange = {onChange}
                                    
                            />
                        </Form.Group>
                    </div>

                    <div className = "inputbox">
                        <Form.Group controlId="formBasicPassword">  
                            <Form.Label>CONTRASEÑA</Form.Label>
                            <Form.Control 
                                name = "password"
                                type = "password" 
                                placeholder= "Ingrese su contraseña"
                                value = {password}
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

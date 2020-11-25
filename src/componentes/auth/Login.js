import React, { useState, useContext, useEffect } from 'react';
import logo from '../../imagenes/logo.png';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../layout/Footer'
import axios from 'axios'
import alertaContext from '../../context/alerta/AlertaContext'
import authContext from '../../context/auth/AuthContext' 

const Login = (props) => {
    
    const alertasContext = useContext(alertaContext)
    const { alerta, mostrarAlerta } = alertasContext

    const authsContext = useContext(authContext)
    const { mensaje, autenticado, iniciarSesion } = authsContext

    useEffect(() =>{

        if(autenticado){
            props.history.push("/perfil-admin")
        }
        
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }

    }, [mensaje, autenticado, props.history])

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
        
        if(id_rut.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error') 
            return
        }

        if(password.length < 4){
            mostrarAlerta('La contraseña no contiene el formato requerido', 'alerta-error')
            return
        }

        if(password !== '7071'){
            mostrarAlerta('La contraseña no es correcta', 'alerta-error')
        }

		// console.log(usuario)
		let json = 'json=' + JSON.stringify(usuario)
		
        iniciarSesion(json)
	}
    return ( 
        <div className = "Login">
            
            <div>
                <img src = {logo} alt = "Imagen del logo de reñaca más alto" className = "logo" />
            </div>
    
            { alerta ? (<div className= "alerta ${alerta.categoria}">{alerta.msg}</div>) : null}
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
            <div className="footerLogin">
                <Footer></Footer>
            </div>
        </div>
        
    )
}
 
export default Login;

import React, { Fragment, useState } from 'react';
import logo from '../imagenes/logo.png';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap'

const Login = () => {



    return ( 
        <Fragment>
            <div>
                <img src = {logo} className = "logo" />
            </div>
            <Form>
                <div className = "contenedorInputs">
                    
                    <div className = "inputbox">
                        <h2>Iniciar Sesión</h2>

                        <Form.Label>RUT</Form.Label>
                        <Form.Control type="text" placeholder="Ej: 12345678-9" />
                    </div>

                    <div className = "inputbox">
                        <Form.Label>CONTRASEÑA</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña" />
                    </div>

                    <div className = "submitButton">
                        <Button
                                variant="success"
                                type = "submit"
                                className = "button-primary"
                        >Ingresar</Button>
                    
                    </div>
                    
                    <div className ="recuperarPassword">
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                    
                </div>
            </Form>
        </Fragment>
    )
}
 
export default Login;
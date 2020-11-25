import React,{useState} from 'react';
import logo from '../../imagenes/logo.png';
import './OlvideContrasena.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap'
import Footer from '../layout/Footer'
import { Link } from 'react-router-dom';

const OlvideContrasena = () => {

    const [usuario, setUsuario] = useState({
        rut: '',
        email: ''
    })

    const {rut, email} = usuario;

    const onChange = e => {
        setUsuario({
        ...usuario,
        [e.target.getAttribute('name')]: e.target.value
        })
    }

    return ( 
        <div className = "OlvideContrasena">
            
            <div>
                <img src = {logo} alt = "Imagen del logo de reñaca más alto" className = "logo" />
            </div>

            <Form>
                <div className = "contenedorInputs">
                    
                    <div className = "inputbox">
                        <h2 id="tituloRest">Restablecer Contraseña</h2>
                        <Form.Group>
                            <Form.Label>INGRESE SU RUT</Form.Label>
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
                        <Form.Group>
                            <Form.Label>INGRESE CORREO ASOCIADO</Form.Label>
                            <Form.Control 
                                name = "email"
                                type = "email" 
                                placeholder = "ejemplo@example.ej" 
                                value = {email}
                                onChange = {onChange}
                                    
                            />
                        </Form.Group>
                    </div>

                    <div className = "submitButton">
                        <Button
                                variant = "success"
                                type = "submit"
                                className = "button-primary"
                                
                        >Enviar</Button>
                    
                    </div>
                    <div className = "Inicio">
                        <Link to = "/" className = "enlace-login">
                            Volver al inicio de sesión
                        </Link>
                    </div>
                </div>
            </Form>
            <div>
                <Footer></Footer>
            </div>
        </div>
     );
}
 
export default OlvideContrasena;
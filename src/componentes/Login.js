import React, { Fragment, useState } from 'react';
import logo from '../imagenes/logo.png';

const Login = () => {
    return ( 
        <Fragment>
            <img src = {logo} />

            <label>Rut</label>
            <input
                type = "text"
                name = "rut"
                className = "rut"
                placeholder = "Ingrese su Rut"
            
            ></input>


            <label>Contraseña</label>
            <input
                type = "password"
                name = "password"
                className = "password"
                placeholder = "Ingrese su Contraseña"
            ></input>

            
            
            <button
                    type = "submit"
                    className = "button-primary"
                >Ingresar</button>

        </Fragment>
    
    );
}
 
export default Login;
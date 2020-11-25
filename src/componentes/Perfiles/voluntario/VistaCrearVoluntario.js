import React from 'react'
import {Button} from 'react-bootstrap'
import './VistaCrearVoluntario.css'
import Barra from '../../layout/Barra'
import construccion from '../../../imagenes/construccion.png'
import Footer from '../../layout/Footer'

const VistaCrearVoluntario = () => {

    return(
        <div>
            <img src={construccion} className="imgConst"></img>
        </div>
    );
}

export default VistaCrearVoluntario;
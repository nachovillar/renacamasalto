import React from 'react'
import {Button} from 'react-bootstrap'
import './VistaCrearVoluntario.css'
import Barra from '../../layout/Barra'
import construccion from '../../../imagenes/construccion.png'
import Footer from '../../layout/Footer'

const CrearVoluntario = () => {

    return(
        <div>
            <div>
                <Barra/>
            </div>
            <div>
                <img src={construccion} className="imgConst"></img>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default CrearVoluntario;
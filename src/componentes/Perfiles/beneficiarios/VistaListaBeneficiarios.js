import React from 'react'
import Barra from '../../layout/Barra'
import Footer from '../../layout/Footer'
import './VistaListaBeneficiarios.css'
import ListadoBeneficiarios from '../../beneficiario/ListadoBeneficiarios'

const VistaListaBeneficiarios = () => {
    return(
        <div className="vista-lista-beneficiarios">
            <div>
                <Barra/>
            </div>
            <div>
                <ListadoBeneficiarios/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default VistaListaBeneficiarios;
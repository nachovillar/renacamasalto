import React from 'react'
import Barra from '../../layout/Barra'
import Footer from '../../layout/Footer'
import './VistaListaBeneficiarios.css'
import ListadoBeneficiarios from '../../beneficiario/ListadoBeneficiarios'
import FormBeneficiario from '../../beneficiario/FormBeneficiario'

const VistaListaBeneficiarios = () => {
    return(
        <div className="vista-lista-beneficiarios">
            <div>
                <Barra/>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <FormBeneficiario/>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <ListadoBeneficiarios/>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default VistaListaBeneficiarios;
import React from 'react'
import FormVoluntario from '../../voluntario/FormVoluntario';
import ListadoVoluntarios from '../../voluntario/ListadoVoluntarios';
import './VistaCrearVoluntario.css'



const VistaCrearVoluntario = () => {

    return(
        <div className="vista-lista-voluntarios">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <FormVoluntario/>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <ListadoVoluntarios/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VistaCrearVoluntario;
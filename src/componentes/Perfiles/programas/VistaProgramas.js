import React from 'react'
import FormPrograma from '../../programa/FormPrograma';
import ListadoProgramas from '../../programa/ListadoProgramas';
import './VistaProgramas.css'



const VistaProgramas = () => {

    return(
        <div className="vista-lista-programas">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <FormPrograma/>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <ListadoProgramas/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VistaProgramas;
import React from 'react'
import './VistaEventos.css'
import ListadoActividades from '../../Actividad/ListadoActividades'
import Sidebar from '../../layout/Sidebar'

const VistaEventos = () => {
    return(
        <div className="vista-lista-beneficiarios">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <Sidebar/>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <ListadoActividades/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VistaEventos;
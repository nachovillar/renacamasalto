import React from 'react'
import Barra from '../layout/Barra'
import Sidebar from '../layout/Sidebar'
import './PerfilAdministrador.css'

const PerfilAdministrador = () => {

    return ( 

        <div className = "perfil-admin">
            <div>
                <Barra/>
            </div>
            <div className = "cuerpo-perfil-admin">
                <div className = "sidebar">
                    <Sidebar/>

                    <div></div>
                </div>
            </div>
            
            
        </div>
        
        

    );
}
 
export default PerfilAdministrador;
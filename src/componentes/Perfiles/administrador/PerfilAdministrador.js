import React from 'react'
import Barra from '../../layout/Barra'
import Sidebar from '../../layout/Sidebar'
import Footer from '../../layout/Footer'
import './PerfilAdministrador.css'
// import FormActividad from '../../Actividad/FormActividad'
import ListadoActividades from '../../Actividad/ListadoActividades'


const PerfilAdministrador = (login) => {
    
    return ( 

        <div className = "perfil-admin">
            <div>
                <Barra/>
            </div>
            <div className = "cuerpo-perfil-admin">
                <div className = "sidebar">
                    <aside>
                        <Sidebar/>
                    </aside>   
                </div>
                <div>
                    <main>
                        <div className = "contenedor-actividades">
                            <ListadoActividades/>
                        </div>
                    </main>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
        
        

    );
}
 
export default PerfilAdministrador;
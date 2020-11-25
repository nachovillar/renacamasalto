import React, { useContext } from 'react'
import Barra from '../../layout/Barra'
import Sidebar from '../../layout/Sidebar'
import Footer from '../../layout/Footer'
import './PerfilAdministrador.css'
// import FormActividad from '../../Actividad/FormActividad'
import ListadoActividades from '../../Actividad/ListadoActividades'
import ListadoBeneficiarios from '../../beneficiario/ListadoBeneficiarios'
import barraState from '../../../context/barra/BarraContext'
import Inicio from '../../inicio/Inicio'

const PerfilAdministrador = (login) => {
    
    const barrasContext = useContext(barraState)
    const { eventos, programas, inicio } = barrasContext

    return ( 

        <div className = "perfil-admin">
            <div>
                <Barra/>
            </div>
            <div className = "cuerpo-perfil-admin container-fluid">
                <div className="row">
                    
                    <div className="eventos col-sm-12 col-md-8">
                        <main>
                         { eventos ?
                            <div className = "evento">
                                <aside className = "sidebar col-sm-12 col-md-4">
                                    
                                        <Sidebar/>
                                  
                                </aside>

                                <div className = "contenedor-actividades">
                                    <ListadoActividades/>
                                </div>
                            </div>
                            : null
                        }

                        { programas ?
                            <p>HOLAAA</p>  
                            : null  
                        }

                        { inicio ?
                            <Inicio></Inicio>
                        
                            : null
                        }

                        </main>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
        
        

    );
}
 
export default PerfilAdministrador;
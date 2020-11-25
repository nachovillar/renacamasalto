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
import VistaCrearVoluntario from '../../Perfiles/voluntario/VistaCrearVoluntario'
import VistaListaBeneficiarios from '../beneficiarios/VistaListaBeneficiarios'

const PerfilAdministrador = (login) => {
    
    const barrasContext = useContext(barraState)
    const { eventos, programas, voluntarios, beneficiarios,inicio  } = barrasContext

    return ( 

        <div className = "perfil-admin">
            <div>
                <Barra/>
            </div>
            <div>                    
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
                    { voluntarios ? 
                        <VistaCrearVoluntario></VistaCrearVoluntario>
                        
                        : null
                    }
                    { beneficiarios ?
                        <VistaListaBeneficiarios></VistaListaBeneficiarios>
                        : null
                    }
                    { inicio ?
                        <Inicio></Inicio>
                    
                        : null
                    }
                </main>
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
        
        

    );
}
 
export default PerfilAdministrador;
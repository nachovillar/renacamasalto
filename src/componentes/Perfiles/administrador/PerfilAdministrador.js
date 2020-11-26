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
import ListadoProgramas from '../../programa/ListadoProgramas'
import VistaEventos from '../../Perfiles/eventos/VistaEventos'
import FormPrograma from '../../programa/FormPrograma'
import VistaProgramas from '../programas/VistaProgramas'

const PerfilAdministrador = (props) => {
    
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
                    <VistaEventos></VistaEventos>
                    : null
                    }

                    { programas ?
                        <VistaProgramas></VistaProgramas>
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
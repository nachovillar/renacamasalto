import React from 'react'
import FormActividad from '../Actividad/FormActividad'

const Sidebar = (login) => {
    const tipoLogin = login.tipo
    if(tipoLogin === 'Administrador'){
        return (  
            <aside className = "sidebar">
                <a href = '#/'>Eventos</a>
                <a href = '#/'>Administración</a>
            </aside>
    
        );
    }
    else if(tipoLogin === 'Voluntario'){
        return (  
            <aside className = "sidebar">
                <a href = '#/'>Eventos</a>
            </aside>
    
        );
    }

    else{
        return(
            <aside>
                <FormActividad/>
            </aside>
            
        )
    }
}
 
export default Sidebar;
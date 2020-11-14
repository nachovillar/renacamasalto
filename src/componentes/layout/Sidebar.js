import React from 'react'

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
            <a href = '#/'>Eventos</a>
        )
    }
}
 
export default Sidebar;
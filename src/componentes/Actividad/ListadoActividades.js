import React, { useContext, useEffect } from 'react'
import Actividad from './Actividad'
import actividadContext from '../../context/actividad/ActividadContext'

const ListadoActividades = () => {

    const ActividadesContext = useContext(actividadContext)
    const { listaActividades, obtenerActividades } = ActividadesContext

    useEffect(() => {
        obtenerActividades()
    }, [])

    if(listaActividades.length === 0) return null

    return (  

        <div>
            <ul className = "listado-actividades">
                {listaActividades.length === 0
                    ?   (<li className = "actividad"><p>No Hay Tareas en su Calendario</p></li>)
                    :   listaActividades.map(actividad => (
                            <Actividad 
                                key = {actividad.id}
                                actividad = {actividad}
                            />
    
                        ))
                }
                
            </ul>
        </div>

    );
}
 
export default ListadoActividades;
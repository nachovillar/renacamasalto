import React, { useContext, useEffect } from 'react'
import Actividad from './Actividad'
import actividadContext from '../../context/actividad/ActividadContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
                    :   <TransitionGroup>
                            {listaActividades.map(actividad => (
                                <CSSTransition
                                    key = {actividad.id}
                                    timeout = {200}
                                    className = "Actividad"
                                >
                                    <Actividad 
                                        actividad = {actividad}
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                }
                
            </ul>
        </div>

    );
}
 
export default ListadoActividades;
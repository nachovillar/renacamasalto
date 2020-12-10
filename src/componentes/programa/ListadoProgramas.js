import React, { useContext, useEffect } from 'react'
import Programa from './Programa'
import programaContext from '../../context/programa/ProgramaContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './ListadoProgramas.css'

const ListadoProgramas = () => {

    const programasContext = useContext(programaContext)
    const { listaProgramas, obtenerProgramas } = programasContext

    // useEffect(() => {
    //     obtenerProgramas()
    // }, [])

    //if(listaProgramas.length === 0) return null

    return (  

        <div className="listadoProgramas">
            <h2 className="titEvento">Programas</h2>
            <ul className = "listado-programas">
                {listaProgramas.length === 0
                    ?   (<li className = "programaSinS"><p>No Hay Sesiones</p></li>)
                    :   <TransitionGroup>
                            {listaProgramas.map(programa => (
                                <CSSTransition
                                    key = {programa.id}
                                    timeout = {200}
                                    className = "Programa"
                                >
                                    <Programa 
                                        programa = {programa}
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                }
                
            </ul>
        </div>

    );
}
 
export default ListadoProgramas;
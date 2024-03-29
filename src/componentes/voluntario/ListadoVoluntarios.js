import React, { useContext, useEffect } from 'react'
import Voluntario from './Voluntario'
import voluntarioContext from '../../context/voluntario/VoluntarioContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './ListadoVoluntarios.css'
import userAuth from '../auth/UserAuth'


const ListadoVoluntarios = () => {

    const VoluntariosContext = useContext(voluntarioContext)
    const { listaVoluntarios, obtenerVoluntarios } = VoluntariosContext

    useEffect(() => {
        obtenerVoluntarios()
        console.log(userAuth.isDirectivo())
    }, [])

    if(listaVoluntarios.length === 0) return null

    return (  

        <div className="listadoVoluntarios container">
            <h2 className="titBeneficiarios">Voluntarios Creados</h2>
            <ul className = "listado-voluntarios">
                {userAuth.isDirectivo() === false
                    ?   (<li className = "voluntario"><p>No Hay Voluntarios Inscritos</p></li>)
                    :   <TransitionGroup>
                            {listaVoluntarios.map(voluntario => (
                                <CSSTransition
                                    key = {voluntario.id}
                                    timeout = {200}
                                    className = "Voluntario"
                                >
                                    <Voluntario 
                                        voluntario = {voluntario}
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                }
                
            </ul>
        </div>

    );
}
 
export default ListadoVoluntarios;
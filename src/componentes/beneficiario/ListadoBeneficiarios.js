import React, { useContext, useEffect, useState } from 'react'
import Beneficiario from './Beneficiario'
import beneficiarioContext from '../../context/beneficiario/BeneficiarioContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './ListadoBeneficiarios.css'


const ListadoBeneficiarios = () => {

    const BeneficiariosContext = useContext(beneficiarioContext)
    const { listaBeneficiarios, obtenerBeneficiarios } = BeneficiariosContext

    useEffect(() => {
        obtenerBeneficiarios()
    }, [])

    if(listaBeneficiarios.length === 0) return null

    return (  

        <div className="listadoBeneficiarios container">
            <h2 className="titBeneficiarios">Beneficiarios Inscritos</h2>
            <h6 className="camposO">Campos Obligatorios (*) </h6>
            <ul className = "listado-beneficiarios">
                {listaBeneficiarios.length === 0
                    ?   (<li className = "beneficiario"><p>No Hay Beneficirios Inscritos</p></li>)
                    :   <TransitionGroup>
                            {listaBeneficiarios.map(beneficiario => (
                                <CSSTransition
                                    key = {beneficiario.id_rut}
                                    timeout = {200}
                                    className = "Beneficiario"
                                >
                                    <Beneficiario 
                                        beneficiario = {beneficiario}
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                }
                
            </ul>
        </div>

    );
}
 
export default ListadoBeneficiarios;
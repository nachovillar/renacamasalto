import React, { useReducer } from 'react'
import actividadContext from './ActividadContext'
import reducer from './ActividadReducer'
import { FORMULARIO_ACTIVIDAD } from '../types'

const State = props => {
    const initialState = {
        formulario: false
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_ACTIVIDAD
        })
    }
    return(
        <actividadContext.Provider
            value = {{
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </actividadContext.Provider>
    )
}

export default State
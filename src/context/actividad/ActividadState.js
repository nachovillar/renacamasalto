import React, { useReducer } from 'react'
import actividadContext from './ActividadContext'
import reducer from './ActividadReducer'
import { FORMULARIO_ACTIVIDAD, OBTENER_ACTIVIDADES } from '../../types'

const ActividadState = props => {

const listaActividades = [
        {id: 1,
         nombre: 'La weaita de actividad',
         fechaInicio: '10-12-2020',
         fechaFin : '23-12-2020'
        },
        {id: 2,
         nombre: 'La tonterita de actividad',
         fechaInicio: '10-12-2020',
         fechaFin : '23-12-2020'
        },
        {id: 3,
         nombre: 'La basurita de actividad',
         fechaInicio: '10-12-2020',
         fechaFin : '23-12-2020'
       }
]

    const initialState = {
        listaActividades: [
        ],
        formulario: false
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_ACTIVIDAD
        })
    }

    const obtenerActividades = () => {
        dispatch({
            type: OBTENER_ACTIVIDADES,
            payload: listaActividades
        })
    }
    return(
        <actividadContext.Provider
            value = {{
                listaActividades: state.listaActividades,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerActividades
            }}
        >
            {props.children}
        </actividadContext.Provider>
    )
}

export default ActividadState
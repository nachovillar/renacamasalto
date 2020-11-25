import React, { useReducer } from 'react'
import actividadContext from './ActividadContext'
import reducer from './ActividadReducer'
import { FORMULARIO_ACTIVIDAD,
         OBTENER_ACTIVIDADES,
         AGREGAR_ACTIVIDAD,
         VALIDAR_FORMULARIO,
         ELIMINAR_ACTIVIDAD,
         ACTIVIDAD_ACTUAL,
         ACTUALIZAR_ACTIVIDAD,
         OCULTAR_FORMULARIO,
         POSTULAR_ACTIVIDAD,
         RETIRAR_ACTIVIDAD
        } from '../../types'

import { v4 as uuidv4 } from 'uuid'

const ActividadState = props => {

const listaActividades = [
        {id: 1,
         nombreActividad: 'La weaita de actividad',
         fechaInicio: '10-12-2020',
         fechaTermino : '23-12-2020',
        },
        {id: 2,
         nombreActividad: 'La tonterita de actividad',
         fechaInicio: '10-12-2020',
         fechaTermino : '23-12-2020'
        },
        {id: 3,
         nombreActividad: 'La basurita de actividad',
         fechaInicio: '10-12-2020',
         fechaTermino : '23-12-2020'
       }
]

    const initialState = {
        listaActividades: [
        ],
        formulario: false,
        errorformulario: false,
        actividadSeleccionada: null
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

    const agregarActividad = actividad => {
        actividad.id = uuidv4()

        dispatch({
            type: AGREGAR_ACTIVIDAD,
            payload: actividad
        })
    }

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO,
        })
    }

    const eliminarActividad = id => {
        dispatch({
            type: ELIMINAR_ACTIVIDAD,
            payload: id
        })
    }

    const guardarActividadActual = actividad => {
        dispatch({
            type: ACTIVIDAD_ACTUAL,
            payload: actividad
        })
    }

    const editarActividad = actividad => {
        dispatch({
            type: ACTUALIZAR_ACTIVIDAD,
            payload: actividad
        })
    }

    const ocultarFormulario = () => {
        dispatch({
            type: OCULTAR_FORMULARIO,
        })
    }

    const postularActividad = id => {
        dispatch({
            type: POSTULAR_ACTIVIDAD,   
            payload: id
        })
    }

    const retirarActividad = id => {
        dispatch({
            type: RETIRAR_ACTIVIDAD,   
            payload: id
        })
    }
    
    return(
        <actividadContext.Provider
            value = {{
                listaActividades: state.listaActividades,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                actividadSeleccionada: state.actividadSeleccionada,
                mostrarFormulario,
                obtenerActividades,
                agregarActividad,
                mostrarError,
                eliminarActividad,
                guardarActividadActual,
                editarActividad,
                ocultarFormulario,
                postularActividad,
                retirarActividad
                
            }}
        >
            {props.children}
        </actividadContext.Provider>
    )
}

export default ActividadState
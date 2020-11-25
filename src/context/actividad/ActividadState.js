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
         EVENTOS_ERROR
        } from '../../types'

import { v4 as uuidv4 } from 'uuid'
import jwt_decode from "jwt-decode"
import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/token'

const ActividadState = props => {

   

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

    const obtenerActividades = async () => {

        const token = localStorage.getItem('jwt')

        if(token) {
            tokenAuth(token)
        }

        try {
            //const user = jwt_decode(token)
            const respuesta = await clienteAxios.get('https://api.chilo.team/api/evento/mostrar/')
            console.log(respuesta.data)
            dispatch({
                type: OBTENER_ACTIVIDADES,
                payload: respuesta.data
            })
        } catch (error){
            dispatch({
                type:EVENTOS_ERROR
            })
        }

        
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
            type: OCULTAR_FORMULARIO
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
                ocultarFormulario
                
            }}
        >
            {props.children}
        </actividadContext.Provider>
    )
}

export default ActividadState
import React, { useReducer } from 'react'
import programaContext from './ProgramaContext'
import ProgramaReducer from './ProgramaReducer'
import { FORMULARIO_PROGRAMA,
         AGREGAR_PROGRAMA,
         ELIMINAR_PROGRAMA,
         PROGRAMA_ACTUAL,
         ACTUALIZAR_PROGRAMA,
         OCULTAR_FORMULARIO,
         VALIDAR_FORMULARIO
        } from '../../types'

import { v4 as uuidv4 } from 'uuid'
// import jwt_decode from "jwt-decode"
// import clienteAxios from '../../config/axios'
// import tokenAuth from '../../config/token'

const ProgramaState = props => {

   

    const initialState = {
        listaProgramas: [
        ],
        formulario: false,
        errorformulario: false,
        ProgramaSeleccionado: null
    }

    const [state, dispatch] = useReducer(ProgramaReducer, initialState)

    const mostrarFormulario = () => {
            dispatch({
                type: FORMULARIO_PROGRAMA
        })
    }

    // const obtenerProgramas = async () => {

    //     const token = localStorage.getItem('jwt')

    //     if(token) {
    //         tokenAuth(token)
    //     }

    //     try {
    //         //const user = jwt_decode(token)
    //         const respuesta = await clienteAxios.get('https://api.chilo.team/api/evento/mostrar/')
    //         console.log(respuesta.data)
    //         dispatch({
    //             type: OBTENER_ACTIVIDADES,
    //             payload: respuesta.data
    //         })
    //     } catch (error){
    //         dispatch({
    //             type:EVENTOS_ERROR
    //         })
    //     }

        
    // }

    const agregarPrograma = programa => {
        programa.id = uuidv4()

        dispatch({
            type: AGREGAR_PROGRAMA,
            payload: programa
        })
    }

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO,
        })
    }

    const eliminarPrograma = id => {
        dispatch({
            type: ELIMINAR_PROGRAMA,
            payload: id
        })
    }

    const guardarProgramaActual = programa => {
        dispatch({
            type: PROGRAMA_ACTUAL,
            payload: programa
        })
    }

    const editarPrograma = programa => {
        dispatch({
            type: ACTUALIZAR_PROGRAMA,
            payload: programa
        })
    }

    const ocultarFormulario = () => {
        dispatch({
            type: OCULTAR_FORMULARIO,
        })
    }
   
    return(
        <programaContext.Provider
            value = {{
                listaProgramas: state.listaProgramas,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                programaSeleccionado: state.programaSeleccionado,
                mostrarFormulario,
                /*obtenerProgramas,*/
                agregarPrograma,
                mostrarError,
                eliminarPrograma,
                guardarProgramaActual,
                editarPrograma,
                ocultarFormulario, 
            }}
        >
            {props.children}
        </programaContext.Provider>
    )
}

export default ProgramaState
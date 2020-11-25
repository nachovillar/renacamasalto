import React, { useReducer } from 'react'
import voluntarioContext from './VoluntarioContext'
import reducer from './VoluntarioReducer'
import{
    FORMULARIO_VOLUNTARIO,
    OBTENER_VOLUNTARIOS,
    AGREGAR_VOLUNTARIO,
    VALIDAR_FORMULARIO_V,
    INVALIDAR_FORMULARIO_V,
    ELIMINAR_VOLUNTARIO,
    VOLUNTARIO_ACTUAL,
    ACTUALIZAR_VOLUNTARIO,
    OCULTAR_FORMULARIO_V
} from '../../types'

import { v4 as uuidv4 } from 'uuid'

const VoluntarioState = props => {

const listaVoluntarios = [
        {   id: 1,
            rut: '18564622-0',
        },
        {   id: 2,
            rut: '19777999-1',
            
        },
        {   id: 3,
            rut: '18090999-2',
        },
        {   id: 4,
            rut: '16987097-0',
        },
        {   id: 5,
            rut: '19000411-1',
            
        },
        {   id: 6,
            rut: '18076543-2',
        }
]

    const initialState = {
        listaVoluntarios: [
        ],
        formulario: false,
        errorformulario: false,
        voluntarioSeleccionada: null
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const mostrarFormulario = () => {
            dispatch({
                type: FORMULARIO_VOLUNTARIO
        })
    }

    const obtenerVoluntarios = () => {
        dispatch({
            type: OBTENER_VOLUNTARIOS,
            payload: listaVoluntarios
        })
    }

    const agregarVoluntario = voluntario => {
        voluntario.id = uuidv4()

        dispatch({
            type: AGREGAR_VOLUNTARIO,
            payload: voluntario
        })
    }

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO_V,
        })
    }
    const ocultarError = () => {
        dispatch({
            type: INVALIDAR_FORMULARIO_V,
        })
    }
    const eliminarVoluntario = id => {
        dispatch({
            type: ELIMINAR_VOLUNTARIO,
            payload: id
        })
    }

    const guardarVoluntarioActual = voluntario => {
        dispatch({
            type: VOLUNTARIO_ACTUAL,
            payload: voluntario
        })
    }

    const editarVoluntario = voluntario => {
        dispatch({
            type: ACTUALIZAR_VOLUNTARIO,
            payload: voluntario
        })
    }

    const ocultarFormulario = () => {
        dispatch({
            type: OCULTAR_FORMULARIO_V
        })
    }
    return(
        <voluntarioContext.Provider
            value = {{
                listaVoluntarios: state.listaVoluntarios,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                voluntarioSeleccionada: state.voluntarioSeleccionada,
                mostrarFormulario,
                obtenerVoluntarios,
                agregarVoluntario,
                mostrarError,
                ocultarError,
                eliminarVoluntario,
                guardarVoluntarioActual,
                editarVoluntario,
                ocultarFormulario
                
            }}
        >
            {props.children}
        </voluntarioContext.Provider>
    )
}

export default VoluntarioState
import React, { useReducer } from 'react'
import beneficiarioContext from './BeneficiarioContext'
import reducer from './BeneficiarioReducer'
import{
    FORMULARIO_BENEFICIARIO,
    OBTENER_BENEFICIARIOS,
    AGREGAR_BENEFICIARIO,
    VALIDAR_FORMULARIO_B,
    INVALIDAR_FORMULARIO_B,
    ELIMINAR_ATRIBUTOS_BENEFICIARIO,
    BENEFICIARIO_ACTUAL,
    ACTUALIZAR_BENEFICIARIO,
    OCULTAR_FORMULARIO_B
} from '../../types'

import { v4 as uuidv4 } from 'uuid'

const BeneficiarioState = props => {

const listaBeneficiarios = [
        {id: 1,
         nombres: 'Papelucho',
         apellidos: 'Principe',
         genero : 'Masculino',
         fechaNacimiento: '1991-10-12',
         telefono: '911111111',
         ocupacion: 'Viajero',
         activo: '1'
        },
        {id: 2,
            nombres: 'Lucila',
            apellidos: 'Godoy',
            genero : 'Femenino',
            fechaNacimiento: '1889-04-07',
            telefono: '911111110',
            ocupacion: 'Escritora',
            activo: '0'
        },
        {id: 3,
            nombres: 'Condorito',
            apellidos: 'Pepo',
            genero : 'Masculino',
            fechaNacimiento: '1949-06-08',
            telefono: '9111111138',
            ocupacion: 'Cómico',
            activo: '1'
       }
]

    const initialState = {
        listaBeneficiarios: [
        ],
        formulario: false,
        errorformulario: false,
        beneficiarioSeleccionada: null
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const mostrarFormulario = () => {
            dispatch({
                type: FORMULARIO_BENEFICIARIO
        })
    }

    const obtenerBeneficiarios = () => {
        dispatch({
            type: OBTENER_BENEFICIARIOS,
            payload: listaBeneficiarios
        })
    }

    const agregarBeneficiario = beneficiario => {
        beneficiario.id = uuidv4()

        dispatch({
            type: AGREGAR_BENEFICIARIO,
            payload: beneficiario
        })
    }

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO_B,
        })
    }
    const ocultarError = () => {
        dispatch({
            type: INVALIDAR_FORMULARIO_B,
        })
    }
    const eliminarBeneficiario = id => {
        dispatch({
            type: ELIMINAR_ATRIBUTOS_BENEFICIARIO,
            payload: id
        })
    }

    const guardarBeneficiarioActual = beneficiario => {
        dispatch({
            type: BENEFICIARIO_ACTUAL,
            payload: beneficiario
        })
    }

    const editarBeneficiario = beneficiario => {
        dispatch({
            type: ACTUALIZAR_BENEFICIARIO,
            payload: beneficiario
        })
    }

    const ocultarFormulario = () => {
        dispatch({
            type: OCULTAR_FORMULARIO_B
        })
    }
    return(
        <beneficiarioContext.Provider
            value = {{
                listaBeneficiarios: state.listaBeneficiarios,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                beneficiarioSeleccionada: state.beneficiarioSeleccionada,
                mostrarFormulario,
                obtenerBeneficiarios,
                agregarBeneficiario,
                mostrarError,
                ocultarError,
                eliminarBeneficiario,
                guardarBeneficiarioActual,
                editarBeneficiario,
                ocultarFormulario
                
            }}
        >
            {props.children}
        </beneficiarioContext.Provider>
    )
}

export default BeneficiarioState
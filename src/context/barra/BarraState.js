import { useReducer } from 'react'
import BarraReducer from './BarraReducer'
import barraContext from './BarraContext'
import { MOSTRAR_INICIO,
         MOSTRAR_PROGRAMAS,
         MOSTRAR_EVENTOS,
         MOSTRAR_VOLUNTARIOS,
         MOSTRAR_BENEFICIARIOS
} from '../../types'


const BarraState = (props) => {
    
    const initialState = {
        inicio: true,
        eventos: false,
        programas: false,
        voluntarios: false,
        beneficiarios: false
    }

    const [state, dispatch] = useReducer(BarraReducer, initialState)
    
    const mostrarInicio = () => {
        dispatch({
            type: MOSTRAR_INICIO
        })
    }

    const mostrarProgramas = () => {
        dispatch({
            type: MOSTRAR_PROGRAMAS
        })
    }

    const mostrarEventos = () => {
        dispatch({
            type: MOSTRAR_EVENTOS
        })
    }
    const mostrarVoluntarios = () => {
        dispatch(
            {
                type:MOSTRAR_VOLUNTARIOS
            }
        )
    }
    const mostrarBeneficiarios = () => {
        dispatch({
            type:MOSTRAR_BENEFICIARIOS
        })
    }
    return(

        <barraContext.Provider
            value = {{
                inicio: state.inicio,
                eventos: state.eventos,
                programas: state.programas,
                voluntarios: state.voluntarios,
                beneficiarios: state.beneficiarios,
                mostrarProgramas,
                mostrarEventos,
                mostrarVoluntarios,
                mostrarBeneficiarios,
                mostrarInicio
                
            }}
        >
            
            {props.children}

        </barraContext.Provider>

    )

}

export default BarraState
import { useReducer } from 'react'
import BarraReducer from './BarraReducer'
import barraContext from './BarraContext'
import { MOSTRAR_INICIO,
         MOSTRAR_PROGRAMAS,
         MOSTRAR_EVENTOS
} from '../../types'


const BarraState = (props) => {
    
    const initialState = {
        inicio: true,
        eventos: false,
        programas: false
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

    return(

        <barraContext.Provider
            value = {{
                inicio: state.inicio,
                eventos: state.eventos,
                programas: state.programas,
                mostrarProgramas,
                mostrarEventos,
                mostrarInicio
            }}
        >
            
            {props.children}

        </barraContext.Provider>

    )

}

export default BarraState
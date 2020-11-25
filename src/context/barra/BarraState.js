import { useReducer } from 'react'
import BarraReducer from './BarraReducer'
import barraContext from './BarraContext'
import { MOSTRAR_PROGRAMAS
    
} from '../../types'


const BarraState = (props) => {
    
    const initialState = {
        evento: false,
        programas: false
    }

    const [state, dispatch] = useReducer(BarraReducer, initialState)
    
    const mostrarProgramas = () => {
        dispatch({
            type: MOSTRAR_PROGRAMAS
        })
    }

    return(

        <barraContext.Provider
            value = {{
                evento: state.evento,
                programas: state.programas,
                mostrarProgramas
            }}
        >
            
            {props.children}

        </barraContext.Provider>

    )

}

export default BarraReducer
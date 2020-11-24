import { useReducer } from 'react'
import {MOSTRAR_ALERTA,
    OCULTAR_ALERTA} from '../../types'
import AlertaReducer from './AlertaReducer'
import alertaContext from './AlertaContext'


const AlertaState = props => {

    const initialState = {
        alerta: null
    } 

    const [state, dispatch] = useReducer(AlertaReducer, initialState)

    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        })

        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA,
            })
        }, 5000 )
    }

    return(

        <alertaContext.Provider
            value = {{
                alerta: state.alerta,
                mostrarAlerta

            }}
        
        >
            {props.children}
        </alertaContext.Provider>
    )

}

export default AlertaState


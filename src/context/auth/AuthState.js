import { useReducer } from 'react'
import { 
         LOGIN_ERROR,
         LOGIN_EXITOSO,
         
} from '../../types'
import authContext from './AuthContext'
import AuthReducer from './AuthReducer'

import clienteAxios from '../../config/axios'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)


    const iniciarSesion = async datos => {
 
        try{
            const respuesta = await clienteAxios.post('https://api.chilo.team/api/login', datos)
            console.log(respuesta)
            // dispatch({
            //     type: LOGIN_EXITOSO,
            //     payload: respuesta.data
            // })
        } catch (error) {
            
            const alerta = {
                msg: error.response,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }


    return (
        <authContext.Provider
            value = {{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                iniciarSesion
            }}
        >
            {props.children}

        </authContext.Provider>


    )
}

export default AuthState
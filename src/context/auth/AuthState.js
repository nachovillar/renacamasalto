import { useReducer } from 'react'
import { OBTENER_USUARIO,
         LOGIN_ERROR,
         LOGIN_EXITOSO,
         
} from '../../types'
import authContext from './AuthContext'
import AuthReducer from './AuthReducer'

import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/token'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token')

        if(token) {
            tokenAuth(token)
        }

        try {
            const respuesta = await clienteAxios.get('https://api.chilo.team/api/login')
            console.log(respuesta)
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data
            })
        } catch (error){
            dispatch({
                type:LOGIN_ERROR
            })
        }
    }

    const iniciarSesion = async datos => {
 
        try{
            const respuesta = await clienteAxios.post('https://api.chilo.team/api/login', datos)
          
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            })
             
            usuarioAutenticado()

        } catch (error) {
            
            const alerta = {
                msg: error.response.mensaje,
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
                iniciarSesion,
                usuarioAutenticado
            }}
        >
            {props.children}

        </authContext.Provider>


    )
}

export default AuthState
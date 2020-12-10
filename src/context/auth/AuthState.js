import { useReducer } from 'react'
import { OBTENER_USUARIO,
         LOGIN_ERROR,
         LOGIN_EXITOSO,
         LOGOUT_EXITOSO,
         LOGOUT_ERROR
         
} from '../../types'
import authContext from './AuthContext'
import AuthReducer from './AuthReducer'
import jwt_admin from "jsonwebtoken"
import userAuth from '../../componentes/auth/UserAuth'

import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/token'
// import { ResponsiveEmbed } from 'react-bootstrap'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('jwt'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('jwt')
        console.log(token)
        if(jwt_admin.verify(token,"Clave super secreto para jwt")) {
            tokenAuth(token)
            userAuth.login()
        }

        try {
            const user = jwt_admin.decode(token)
            const respuesta = await clienteAxios.get('https://api.chilo.team/api/user/mostrar/'+user.sub)
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
            // const respuesta = await 
            clienteAxios.post('https://api.chilo.team/api/login', datos)
            .then(response => {
                dispatch({
                    type: LOGIN_EXITOSO,
                    payload: response.data
                })
                console.log(response)
                console.log("ingreso")
                localStorage.setItem('jwt',response.data.signup)
                userAuth.login()
                usuarioAutenticado()
            }).catch(error => {
                console.log(error)
                const alerta = {
                    msg: error.response.data.status,
                    categoria: 'alerta-error'
                }
    
                dispatch({
                    type: LOGIN_ERROR,
                    payload: alerta
                })
            })
            // console.log(respuesta)
            

        } catch (error) {
            
            const alerta = {
                msg: error.mensaje,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    const logout = async () => {
        try{
            localStorage.removeItem('jwt')
            userAuth.logout()
            const mensaje = {
                msg: "logout exitoso",
            }
            dispatch({
                type: LOGOUT_EXITOSO,
                payload: mensaje
            })
        }catch(error){
            const alerta = {
                msg: error.mensaje,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGOUT_ERROR,
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
                usuarioAutenticado,
                logout
            }}
        >
            {props.children}

        </authContext.Provider>


    )
}

export default AuthState
import { OBTENER_USUARIO,
         LOGIN_ERROR,
         LOGIN_EXITOSO,
         LOGOUT_EXITOSO,
         LOGOUT_ERROR
         
} from '../../types'

export default (state, action) =>{
    switch(action.type){

        case LOGIN_ERROR:
            localStorage.removeItem('token')

            return {
                ...state,
                token: null,
                mensaje: action.payload
            }
        
        case LOGIN_EXITOSO:
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                token: action.payload
            }
        case LOGOUT_EXITOSO:
            return {
                ...state,
                autenticado: false,
                mensaje: "Logout exitoso",
                token: null
            }

        case LOGOUT_ERROR:
            localStorage.removeItem('token')

            return {
                ...state,
                token: null,
                mensaje: action.payload
            }

        case OBTENER_USUARIO:
            return{
                ...state,
                usuario: action.payload
            }
        default:
            return state
    }
}
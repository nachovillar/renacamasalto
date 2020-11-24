import { 
         LOGIN_ERROR,
         LOGIN_EXITOSO,
         
} from '../../types'

export default (state, action) => {
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
                token: action.payload
            }
        default:
            return state
    }
}
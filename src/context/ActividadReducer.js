import { FORMULARIO_ACTIVIDAD } from '../types'

export default (state, action) => {
    switch(action.type) {

        case FORMULARIO_ACTIVIDAD: 
            return {
                ...state,
                formulario: true
            }


        default: 
            return state
    }
}


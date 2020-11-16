import { FORMULARIO_ACTIVIDAD, OBTENER_ACTIVIDADES } from '../../types'

export default (state, action) => {
    switch(action.type) {

        case FORMULARIO_ACTIVIDAD: 
            return {
                ...state,
                formulario: true
            }

        case OBTENER_ACTIVIDADES:
            return {
                ...state,
                listaActividades: action.payload
            }

        default: 
            return state
    }
}


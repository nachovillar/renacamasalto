import { MOSTRAR_PROGRAMAS
    
} from '../../types'

export default (state, action) => {
    switch(action.type){

        case MOSTRAR_PROGRAMAS:
            
            return {
                ...state,
                programas: true
            }

        default: 

            return state
    }
}
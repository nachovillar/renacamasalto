import { MOSTRAR_INICIO,
         MOSTRAR_PROGRAMAS,
         MOSTRAR_EVENTOS
} from '../../types'

export default (state, action) => {
    switch(action.type){
        case MOSTRAR_INICIO:
            return{
                ...state,
                eventos: false,
                programas: false,
                inicio: true
            }
        case MOSTRAR_PROGRAMAS:

            return {
                ...state,
                inicio: false,
                eventos: false,
                programas: true
            }
        
        case MOSTRAR_EVENTOS:
        
            return {
                ...state,
                inicio: false,
                programas: false,
                eventos: true

            }

        default: 

            return state
    }
}
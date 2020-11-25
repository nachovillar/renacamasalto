import { MOSTRAR_INICIO,
         MOSTRAR_PROGRAMAS,
         MOSTRAR_EVENTOS,
         MOSTRAR_VOLUNTARIOS,
         MOSTRAR_BENEFICIARIOS
} from '../../types'

export default (state, action) => {
    switch(action.type){
        case MOSTRAR_INICIO:
            return{
                ...state,
                eventos: false,
                programas: false,
                voluntarios:false,
                beneficiarios:false,
                inicio: true
            }
        case MOSTRAR_PROGRAMAS:

            return {
                ...state,
                inicio: false,
                eventos: false,
                voluntarios:false,
                beneficiarios:false,
                programas: true
            }
        
        case MOSTRAR_EVENTOS:
        
            return {
                ...state,
                inicio: false,
                programas: false,
                voluntarios:false,
                beneficiarios:false,
                eventos: true

            }
        case MOSTRAR_VOLUNTARIOS:
            
            return{
                ...state,
                inicio:false,
                programas:false,
                eventos:false,
                beneficiarios:false,
                voluntarios:true

            }
        case MOSTRAR_BENEFICIARIOS:

            return{
                ...state,
                inicio:false,
                programas:false,
                eventos:false,
                voluntarios:false,
                beneficiarios:true
            }
        default: 

            return state
    }
}
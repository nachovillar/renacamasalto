import{
    FORMULARIO_VOLUNTARIO,
    OBTENER_VOLUNTARIOS,
    AGREGAR_VOLUNTARIO,
    VALIDAR_FORMULARIO_V,
    INVALIDAR_FORMULARIO_V,
    ELIMINAR_VOLUNTARIO,
    VOLUNTARIO_ACTUAL,
    ACTUALIZAR_VOLUNTARIO,
    OCULTAR_FORMULARIO_V
} from '../../types'

export default (state, action) => {
    switch(action.type) {

        case FORMULARIO_VOLUNTARIO: 
            return {
                ...state,
                formulario: true
            }

        case OBTENER_VOLUNTARIOS:
            return {
                ...state,
                listaVoluntarios: action.payload
            }
        
        case AGREGAR_VOLUNTARIO:
            return {
                ...state,
                listaVoluntarios: [ action.payload, ...state.listaVoluntarios],
                formulario: false,
                errorformulario: false
            }
        case VALIDAR_FORMULARIO_V:
            return{
                ...state,
                errorformulario: true
            }
        case INVALIDAR_FORMULARIO_V:
            return{
                ...state,
                errorformulario:false
            }
        case ELIMINAR_VOLUNTARIO:
            return{
                ...state,
                listaVoluntarios: state.listaVoluntarios.filter(voluntario => voluntario.id !== action.payload)
            }

        case VOLUNTARIO_ACTUAL:
            return{
                ...state,
                voluntarioSeleccionada: action.payload
            }
        case ACTUALIZAR_VOLUNTARIO:
            return{
                ...state,
                listaVoluntarios: state.listaVoluntarios.map(voluntario => 
                                                                voluntario.id === action.payload.id ? action.payload : voluntario),
                voluntarioSeleccionada: null
            }

        case OCULTAR_FORMULARIO_V:
            return {
                ...state,
                formulario: false
            }

        default: 
            return state
    }
}
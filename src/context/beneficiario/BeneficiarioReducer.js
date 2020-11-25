import{
    FORMULARIO_BENEFICIARIO,
    OBTENER_BENEFICIARIOS,
    AGREGAR_BENEFICIARIO,
    VALIDAR_FORMULARIO_B,
    INVALIDAR_FORMULARIO_B,
    ELIMINAR_ATRIBUTOS_BENEFICIARIO,
    BENEFICIARIO_ACTUAL,
    ACTUALIZAR_BENEFICIARIO,
    OCULTAR_FORMULARIO_B
} from '../../types'

export default (state, action) => {
    switch(action.type) {

        case FORMULARIO_BENEFICIARIO: 
            return {
                ...state,
                formulario: true
            }

        case OBTENER_BENEFICIARIOS:
            return {
                ...state,
                listaBeneficiarios: action.payload
            }
        
        case AGREGAR_BENEFICIARIO:
            return {
                ...state,
                listaBeneficiarios: [ action.payload, ...state.listaBeneficiarios],
                formulario: false,
                errorformulario: false
            }
        case VALIDAR_FORMULARIO_B:
            return{
                ...state,
                errorformulario: true
            }
        case INVALIDAR_FORMULARIO_B:
            return{
                ...state,
                errorformulario:false
            }
        case ELIMINAR_ATRIBUTOS_BENEFICIARIO:
            return{
                ...state,
                listaBeneficiarios: state.listaBeneficiarios.filter(beneficiario => beneficiario.id !== action.payload)
            }

        case BENEFICIARIO_ACTUAL:
            return{
                ...state,
                beneficiarioSeleccionada: action.payload
            }
        case ACTUALIZAR_BENEFICIARIO:
            return{
                ...state,
                listaBeneficiarios: state.listaBeneficiarios.map(beneficiario => 
                                                                beneficiario.id === action.payload.id ? action.payload : beneficiario),
                benefeciarioSeleccionada: null
            }

        case OCULTAR_FORMULARIO_B:
            return {
                ...state,
                formulario: false
            }

        default: 
            return state
    }
}
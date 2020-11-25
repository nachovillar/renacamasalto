import {FORMULARIO_PROGRAMA,
    /*OBTENER_PROGRAMAS,*/
    AGREGAR_PROGRAMA,
    VALIDAR_FORMULARIO,
    ELIMINAR_PROGRAMA,
    PROGRAMA_ACTUAL,
    ACTUALIZAR_PROGRAMA,
    OCULTAR_FORMULARIO,

    } from '../../types'

export default (state, action) => {
switch(action.type) {

    case FORMULARIO_PROGRAMA: 
        return {
            ...state,
            formulario: true
        }

    // case OBTENER_PROGRAMAS:
    //     return {
    //         ...state,
    //         listaProgramas: action.payload
    //     }
    
    case AGREGAR_PROGRAMA:
        return {
            ...state,
            listaProgramas: [ action.payload, ...state.listaProgramas],
            formulario: false,
            errorformulario: false
        }
    case VALIDAR_FORMULARIO:
        return{
            ...state,
            errorformulario: true
        }
    
    case ELIMINAR_PROGRAMA:
        return{
            ...state,
            listaProgramas: state.listaProgramas.filter(programa => programa.id !== action.payload)
        }

    case PROGRAMA_ACTUAL:
        return{
            ...state,
            programaSeleccionado: action.payload
        }
    case ACTUALIZAR_PROGRAMA:
        return{
            ...state,
            listaProgramas: state.listaProgramas.map(programa => 
                                                            programa.id === action.payload.id ? action.payload : programa),
            programaSeleccionado: null
        }

    case OCULTAR_FORMULARIO:
        return {
            ...state,
            formulario: false
        }
    

    default: 
        return state
}
}

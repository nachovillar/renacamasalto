import {FORMULARIO_ACTIVIDAD,
        OBTENER_ACTIVIDADES,
        AGREGAR_ACTIVIDAD,
        VALIDAR_FORMULARIO,
        ELIMINAR_ACTIVIDAD,
        ACTIVIDAD_ACTUAL,
        ACTUALIZAR_ACTIVIDAD,
        OCULTAR_FORMULARIO
        } from '../../types'

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
        
        case AGREGAR_ACTIVIDAD:
            return {
                ...state,
                listaActividades: [ action.payload, ...state.listaActividades],
                formulario: false,
                errorformulario: false
            }
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorformulario: true
            }
        
        case ELIMINAR_ACTIVIDAD:
            return{
                ...state,
                listaActividades: state.listaActividades.filter(actividad => actividad.id !== action.payload)
            }

        case ACTIVIDAD_ACTUAL:
            return{
                ...state,
                actividadSeleccionada: action.payload
            }
        case ACTUALIZAR_ACTIVIDAD:
            return{
                ...state,
                listaActividades: state.listaActividades.map(actividad => 
                                                                actividad.id === action.payload.id ? action.payload : actividad),
                actividadSeleccionada: null
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


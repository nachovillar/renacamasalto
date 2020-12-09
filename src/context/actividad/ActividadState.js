import React, { useReducer } from 'react'
import actividadContext from './ActividadContext'
import reducer from './ActividadReducer'
import { FORMULARIO_ACTIVIDAD,
         OBTENER_ACTIVIDADES,
         AGREGAR_ACTIVIDAD,
         VALIDAR_FORMULARIO,
         ELIMINAR_ACTIVIDAD,
         ACTIVIDAD_ACTUAL,
         ACTUALIZAR_ACTIVIDAD,
         OCULTAR_FORMULARIO,
         POSTULAR_ACTIVIDAD,
         RETIRAR_ACTIVIDAD,
         EVENTOS_ERROR
        } from '../../types'

import { v4 as uuidv4 } from 'uuid'
import jwt_decode from "jwt-decode"
import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/token'
import Evento from '../../models/Evento'

const ActividadState = props => {

    var evento = {
        id_evento: null,
        nombre: '',
        fecha_hora_inicio:'',
        fecha_hora_termino:'',
        descripcion: '',
        cuota: null,
        cupos: null
    }

    const initialState = {
        listaActividades: [
        ],
        formulario: false,
        errorformulario: false,
        actividadSeleccionada: null
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const mostrarFormulario = () => {
            dispatch({
                type: FORMULARIO_ACTIVIDAD
        })
    }

    const obtenerActividades = async () => {

        const token = localStorage.getItem('jwt')

        if(token) {
            tokenAuth(token)
        }

        try {
            //const user = jwt_decode(token)
            var respuesta = await clienteAxios.get('https://api.chilo.team/api/evento/mostrar/')
            console.log(respuesta.data)
            var listaEventos = []
            for(let i=0;i<respuesta.data.length;i++){
                let evento = new Evento();
                evento.id = respuesta.data[i].id_evento
                evento.nombre = respuesta.data[i].nombre
                evento.descripcion = respuesta.data[i].descripcion
                let inicio = respuesta.data[i].fecha_hora_inicio.split(" ")
                let termino = respuesta.data[i].fecha_hora_termino.split(" ")
                evento.fechaInicio = inicio[0]
                evento.horaInicio = inicio[1]
                evento.fechaTermino = termino[0]
                evento.horaTermino = termino[1]
                const res = evento
                let cont = listaEventos.push(res)
                console.log(cont)
            }
            
            console.log(listaEventos)
            dispatch({
                type: OBTENER_ACTIVIDADES,
                payload: listaEventos
            })
        } catch (error){
            dispatch({
                type:EVENTOS_ERROR
            })
        }

        
    }

    const agregarActividad = actividad => {
        // const token = localStorage.getItem('jwt')
        // if(token) {
        //     tokenAuth(token)
        // }
        try {
            evento.nombre = actividad.nombre
            evento.fecha_hora_inicio = actividad.fechaInicio+' '+actividad.horaInicio+':00'
            evento.fecha_hora_termino = actividad.fechaTermino+' '+actividad.horaTermino+':00'
            evento.descripcion = actividad.descripcion
            evento.lugar = 'Espacio Vincula'
            const data = 'json='+JSON.stringify(evento)
            var respuesta = clienteAxios.post('https://api.chilo.team/api/evento/crear/', data)
            console.log(respuesta.data)
            dispatch({
                type: AGREGAR_ACTIVIDAD,
                payload: actividad
            })
        } catch (error){
            console.log(error)
            dispatch({
                type:EVENTOS_ERROR
            })
        }
        

        
    }

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO,
        })
    }

    const eliminarActividad = id => {
        dispatch({
            type: ELIMINAR_ACTIVIDAD,
            payload: id
        })
    }

    const guardarActividadActual = actividad => {
        dispatch({
            type: ACTIVIDAD_ACTUAL,
            payload: actividad
        })
    }

    const editarActividad = actividad => {

        const token = localStorage.getItem('jwt')

        if(token) {
            tokenAuth(token)
        }

        try {
            evento.id_evento = actividad.id
            evento.nombre = actividad.nombre
            evento.fecha_hora_inicio = actividad.fechaInicio+' '+actividad.horaInicio
            evento.fecha_hora_termino = actividad.fechaTermino+' '+actividad.horaTermino
            evento.descripcion = actividad.descripcion
            console.log(evento)
            const data = 'json='+JSON.stringify(evento)
            var respuesta = clienteAxios.post('https://api.chilo.team/api/evento/editar/'+actividad.id, data)
            console.log(respuesta)
            dispatch({
                type: ACTUALIZAR_ACTIVIDAD,
                payload: actividad
            })
        } catch (error){
            console.log(error)
            dispatch({
                type:EVENTOS_ERROR
            })
        }

        
    }

    const ocultarFormulario = () => {
        dispatch({
            type: OCULTAR_FORMULARIO,
        })
    }

    const postularActividad = id => {
        dispatch({
            type: POSTULAR_ACTIVIDAD,   
            payload: id
        })
    }

    const retirarActividad = id => {
        dispatch({
            type: RETIRAR_ACTIVIDAD,   
            payload: id
        })
    }
    
    return(
        <actividadContext.Provider
            value = {{
                listaActividades: state.listaActividades,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                actividadSeleccionada: state.actividadSeleccionada,
                mostrarFormulario,
                obtenerActividades,
                agregarActividad,
                mostrarError,
                eliminarActividad,
                guardarActividadActual,
                editarActividad,
                ocultarFormulario,
                postularActividad,
                retirarActividad
                
            }}
        >
            {props.children}
        </actividadContext.Provider>
    )
}

export default ActividadState
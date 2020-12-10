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

import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/token'
import Evento from '../../models/Evento'
import userAuth from '../../componentes/auth/UserAuth'
import Swal from 'sweetalert2'
import voluntarioContext from '../voluntario/VoluntarioContext'
import { findAllByDisplayValue } from '@testing-library/react'

const ActividadState = props => {

    var evento = {
        id_evento: null,
        nombre: '',
        fecha_hora_inicio:'',
        fecha_hora_termino:'',
        descripcion: '',
        id_lugar: 1,
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
                listaEventos.push(res)
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
        const token = localStorage.getItem('jwt')

        if(token) {
            tokenAuth(token)
        }
        evento.id_evento = id
        const data = 'json='+JSON.stringify(evento)
        clienteAxios.post('https://api.chilo.team/api/evento/eliminar',data)
        .then(response => {
            dispatch({
                type: ELIMINAR_ACTIVIDAD,
                payload: id
            })
            console.log(response)
            console.log("evento eliminado con exito")
        }).catch(error => {
            console.log(error)
            const alerta = {
                msg: error.response.data.mensaje,
                categoria: 'alerta-error'
            }

            dispatch({
                type: EVENTOS_ERROR,
                payload: alerta
            })
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
            evento.id_lugar = 'Espacio Vincula'
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

        let e = 'json={"id_evento":'+String(id)+'}'
        clienteAxios.post('https://api.chilo.team/api/evento/mostrarDetalleEvento',e)
        .then(response=>{
            
            let jsonInscritos = response.data.inscritos.id_voluntarios_inscritos
            var existe = false 
            for(let i=0;i<jsonInscritos.length;i++){
                if(jsonInscritos[i].id_voluntario === userAuth.id_rut){
                    existe = true
                }
             }
            if(existe){
                console.log("voluntai inscrito")
                Swal.fire({
                        title: 'Usted está inscrito',
                        text: "¿Desea desinscribirse?",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, desincribirme'
                }).then((result) => {
                    if (result.isConfirmed) {
                        postulo(id)
                    }
                })
            }else{
                console.log("voluntai NO inscrito")
                Swal.fire({
                        title: 'Usted no está inscrito',
                        text: "¿Desea inscribirse?",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, incribirme'
                }).then((result) => {
                    if (result.isConfirmed) {
                        postulo(id)
                    }
                })
            }
             
        })

    }

    const postulo = id => {
        let data = 'json={"id_evento":'+String(id)+',"id_rut":"'+userAuth.id_rut+'"}'
        console.log(data)
        clienteAxios.post('https://api.chilo.team/api/user/postular', data)
        .then(response =>{
            console.log(response)
            dispatch({
                type: POSTULAR_ACTIVIDAD,   
                payload: response.data
            })
        }).catch(error =>{
            console.log(error)
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
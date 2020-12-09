import React, { useReducer } from 'react'
import voluntarioContext from './VoluntarioContext'
import reducer from './VoluntarioReducer'
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

import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/token'
import Voluntario from '../../models/Voluntario'

import { v4 as uuidv4 } from 'uuid'

const VoluntarioState = props => {

    var voluntario = {
        id_rut: ''
    }

    const listaVoluntarios = null

    

    const initialState = {
        listaVoluntarios: [
        ],
        formulario: false,
        errorformulario: false,
        voluntarioSeleccionada: null
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_VOLUNTARIO
        })
    }

    const obtenerVoluntarios = async () => {
        const token = localStorage.getItem('jwt')

        if(token) {
            tokenAuth(token)
        }

        try {
            //const user = jwt_decode(token)
            var respuesta = await clienteAxios.post('https://api.chilo.team/api/user/mostrar/')
            console.log(respuesta.data.data)
            var listaVoluntarios = []
            for(let i=0;i<respuesta.data.data.length;i++){
                let voluntario = new Voluntario();
                voluntario.id_rut = respuesta.data.data[i].id_rut
                voluntario.nombres = respuesta.data.data[i].nombres
                voluntario.apellidos = respuesta.data.data[i].apellidos
                voluntario.permisos = respuesta.data.data[i].permisos
                const res = voluntario
                let cont = listaVoluntarios.push(res)
                console.log(cont)
            }
            
            console.log(listaVoluntarios)
            dispatch({
                type: OBTENER_VOLUNTARIOS,
                payload: listaVoluntarios
            })
        } catch (error){
            dispatch({
                type: null
            })
        }
    }

    const agregarVoluntario = vol => {
        const token = localStorage.getItem('jwt')

        if(token) {
            tokenAuth(token)
        }

        try {
            //const user = jwt_decode(token)
            const data = 'json='+JSON.stringify(vol)
            console.log(data)      

            clienteAxios.post('https://api.chilo.team/api/register', data)
            .then(response => {
                dispatch({
                    type: AGREGAR_VOLUNTARIO,
                    payload: voluntario
                })
                console.log(response)
                console.log("ingreso")
                window.location.replace('');

            }).catch(error => {
                console.log(error)
                const alerta = {
                    msg: error.response.mensaje,
                    categoria: 'alerta-error'
                }
    
                dispatch({
                    type: null,
                    payload: alerta
                })
            })
        } catch (error){
            dispatch({
                type: null
            })
        }
    }

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO_V,
        })
    }
    const ocultarError = () => {
        dispatch({
            type: INVALIDAR_FORMULARIO_V,
        })
    }
    const eliminarVoluntario = id => {
        dispatch({
            type: ELIMINAR_VOLUNTARIO,
            payload: id
        })
    }

    const guardarVoluntarioActual = voluntario => {
        dispatch({
            type: VOLUNTARIO_ACTUAL,
            payload: voluntario
        })
    }

    const editarVoluntario = voluntario => {
        dispatch({
            type: ACTUALIZAR_VOLUNTARIO,
            payload: voluntario
        })
    }

    const ocultarFormulario = () => {
        dispatch({
            type: OCULTAR_FORMULARIO_V
        })
    }
    return(
        <voluntarioContext.Provider
            value = {{
                listaVoluntarios: state.listaVoluntarios,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                voluntarioSeleccionada: state.voluntarioSeleccionada,
                mostrarFormulario,
                obtenerVoluntarios,
                agregarVoluntario,
                mostrarError,
                ocultarError,
                eliminarVoluntario,
                guardarVoluntarioActual,
                editarVoluntario,
                ocultarFormulario
                
            }}
        >
            {props.children}
        </voluntarioContext.Provider>
    )
}

export default VoluntarioState
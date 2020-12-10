import React, { useReducer } from 'react'
import beneficiarioContext from './BeneficiarioContext'
import reducer from './BeneficiarioReducer'
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
import clienteAxios from '../../config/axios'
import Beneficiario from '../../models/Beneficiario'

const BeneficiarioState = props => {



    const initialState = {
        listaBeneficiarios: [
        ],
        formulario: false,
        errorformulario: false,
        beneficiarioSeleccionada: null
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const mostrarFormulario = () => {
            dispatch({
                type: FORMULARIO_BENEFICIARIO
        })
    }

    const obtenerBeneficiarios = () => {
        clienteAxios.get('https://api.chilo.team/api/beneficiario/mostrar')
        .then(response =>{
            console.log(response.data)
            var listaBeneficiarios = []
            for(let i=0;i<response.data.length;i++){
                let beneficiario = new Beneficiario();
                beneficiario.id_rut = response.data[i].id_rut
                beneficiario.nombres = response.data[i].nombres
                beneficiario.apellidos = response.data[i].apellidos
                if(response.data[i].genero === 'M'){
                    beneficiario.genero = 'Masculino'
                }
                else if(response.data[i].genero === 'F'){
                    beneficiario.genero = 'Femenino'
                }
                else if(response.data[i].genero === 'X'){
                    beneficiario.genero = 'Otro'
                }
                beneficiario.telefono = response.data[i].telefono
                beneficiario.ocupacion = response.data[i].ocupacion
                beneficiario.fecha_nacimiento = response.data[i].fecha_nacimiento
                beneficiario.es_activo = response.data[i].es_activo
                const res = beneficiario
                listaBeneficiarios.push(res)
            }
            dispatch({
                type: OBTENER_BENEFICIARIOS,
                payload: listaBeneficiarios
            })

        }).catch(error =>{
            console.log(error)
        })
    }

    const agregarBeneficiario = beneficiario => {


        try {
            //const user = jwt_decode(token)
            const data = 'json='+JSON.stringify(beneficiario)
            console.log(data)      

            clienteAxios.post('https://api.chilo.team/api/beneficiario/agregar', data)
            .then(response => {
                dispatch({
                    type: AGREGAR_BENEFICIARIO,
                    payload: beneficiario
                })
                console.log(response)
                console.log("beneficiario agregado con exito")
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
            type: VALIDAR_FORMULARIO_B,
        })
    }
    const ocultarError = () => {
        dispatch({
            type: INVALIDAR_FORMULARIO_B,
        })
    }
    const eliminarBeneficiario = id => {
        dispatch({
            type: ELIMINAR_ATRIBUTOS_BENEFICIARIO,
            payload: id
        })
    }

    const guardarBeneficiarioActual = beneficiario => {
        dispatch({
            type: BENEFICIARIO_ACTUAL,
            payload: beneficiario
        })
    }

    const editarBeneficiario = beneficiario => {
        console.log(beneficiario.genero)
        if(beneficiario.genero === 'Masculino'){
            beneficiario.genero = 'M'
        }
        else if(beneficiario.genero === 'Femenino'){
            beneficiario.genero = 'F'
        }
        else if(beneficiario.genero === 'Otro'){
            beneficiario.genero = 'X'
        }
        let data = "json="+JSON.stringify(beneficiario)
        clienteAxios.post('https://api.chilo.team/api/beneficiario/editar/'+beneficiario.id_rut,data)
        .then(response => {
            dispatch({
                type: ACTUALIZAR_BENEFICIARIO,
                payload: beneficiario
            })
            console.log(response)
            window.location.replace('')
        }).catch(error =>{
            console.log(error)
        })
    }

    const ocultarFormulario = () => {
        dispatch({
            type: OCULTAR_FORMULARIO_B
        })
    }
    return(
        <beneficiarioContext.Provider
            value = {{
                listaBeneficiarios: state.listaBeneficiarios,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                beneficiarioSeleccionada: state.beneficiarioSeleccionada,
                mostrarFormulario,
                obtenerBeneficiarios,
                agregarBeneficiario,
                mostrarError,
                ocultarError,
                eliminarBeneficiario,
                guardarBeneficiarioActual,
                editarBeneficiario,
                ocultarFormulario
                
            }}
        >
            {props.children}
        </beneficiarioContext.Provider>
    )
}

export default BeneficiarioState
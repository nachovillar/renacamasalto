import React from 'react'
import Actividad from './Actividad'

const ListadoActividades = () => {

    var listaActividades = [
        {nombre: 'La weaita de actividad',
         fechaInicio: '10-12-2020',
         fechaFin : '23-12-2020'
        },
        {nombre: 'La tonterita de actividad',
         fechaInicio: '10-12-2020',
         fechaFin : '23-12-2020'
        },
        {nombre: 'La basurita de actividad',
         fechaInicio: '10-12-2020',
         fechaFin : '23-12-2020'
        }
    ]

    return (  

        <div>
            <ul className = "listado-actividades">
                {listaActividades.length === 0
                    ?   (<li className = "actividad"><p>No Hay Tareas en su Calendario</p></li>)
                    :   listaActividades.map(actividad => (
                            <Actividad 
                                actividad = {actividad}
                            />
    
                        ))
                }
                
            </ul>
        </div>

    );
}
 
export default ListadoActividades;
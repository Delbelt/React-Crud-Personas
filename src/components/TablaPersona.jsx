import React, { useContext } from 'react'
import PersonaContext from '../context/PersonaContext';
import usePersona from '../hooks/usePersona';

const TablaPersona = ({data}) =>
{
    const {dispatch} = useContext(PersonaContext);
    const {handleDelete} = usePersona(dispatch); //Refactor

    return(
        <React.Fragment>
        <table className='tabla'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th> 
                    <th>Dni</th>                                                                                      
                </tr>
            </thead>
            <tbody>                    
            {   
                data.map((objeto)=>
                {
                    return(                              
                    <tr key={objeto.id}>                         
                        <td>{objeto.id}</td> 
                        <td>{objeto.nombre}</td>
                        <td>{objeto.dni}</td>   
                        <td><button onClick={() => handleDelete(objeto.id)}>Eliminar</button></td>                                                   
                    </tr>)
                })
            }

            </tbody>
        </table> 
    </React.Fragment>
    );
}

export default TablaPersona
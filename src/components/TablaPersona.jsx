import React, { useContext } from 'react'
import PersonaContext from '../context/PersonaContext';
import usePersona from '../hooks/usePersona';
import PropTypes from "prop-types";

const TablaPersona = ({data}) =>
{
    const {dispatch} = useContext(PersonaContext);
    const {handleDelete} = usePersona(dispatch); //Refactor

    return(
        <React.Fragment>
        <table className='tabla'>
            <thead>
                <tr>
                    <th>{data.length ? "ID" : ""}</th>
                    <th>{data.length ? "Nombre" : ""}</th> 
                    <th>{data.length ? "Dni" : ""}</th>                                                                                      
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
                        <td><button onClick={() => handleDelete(objeto.id)} className='btn btn-delete'>Eliminar</button></td>                                                   
                    </tr>)
                })
            }

            </tbody>
        </table> 
    </React.Fragment>
    );
}

TablaPersona.propTypes =
{
    data : PropTypes.array, //Para garantizar que el props sea un Array
};

export default TablaPersona
import React, { useContext } from 'react'
import Title from '../components/Title';
import PersonaContext from '../context/PersonaContext';
import usePersona from '../hooks/usePersona';

const EditarScreen = () =>
{
    const {state, dispatch} = useContext(PersonaContext);

    const {id, handleFind, handleEdit, handleChange, nombre, dni} = usePersona(dispatch); //Refactor

    const buscar = state.filter(objeto => objeto.id === id);


    return(
        <React.Fragment>
            
            <Title titulo='Editar Persona'/>

            <form className='form' onSubmit={handleFind}>
                <label>                   
                    <input autoComplete='off' type="text" name="id"/>                                               
                </label>
                    <button type="submit">Buscar Cliente</button>                    
            </form>
            
            {
                buscar.map((objeto)=>
                {
                    return(                        
                        <div key={objeto.id}>
                        <form className='form' onSubmit={handleEdit}>
                            <label>
                                <input type="hidden" name='id' value={objeto.id}></input>
                                <input onChange={handleChange} autoComplete='off' type="text" name='nombre'  placeholder={objeto.nombre} value={nombre}></input>                        
                                <input onChange={handleChange} autoComplete='off' type="text" name='dni'  placeholder={objeto.dni} value={dni}></input>
                                <button type="submit">Editar</button>                                
                            </label>
                        </form>
                        </div>
                    )
                }) 
            }
        </React.Fragment>
    );
}

export default EditarScreen
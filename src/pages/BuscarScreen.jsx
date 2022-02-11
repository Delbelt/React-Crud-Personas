import React, { useContext } from 'react'
import TablaPersona from '../components/TablaPersona';
import Title from '../components/Title';
import PersonaContext from '../context/PersonaContext';
import usePersona from '../hooks/usePersona';

const BuscarScreen = () =>
{
    const {state} = useContext(PersonaContext);

    const {id, handleFind, handleDelete} = usePersona(); //Refactor

    const buscar = state.filter(objeto => objeto.id === id);

    return(
        <React.Fragment>
            <Title titulo='Buscar Persona'/>
            <form onSubmit={handleFind}>
                <label>                   
                    <input type="text" autoComplete='off' name="id"/>                                               
                </label>
                    <button type="submit">Buscar Cliente</button>                    
            </form>

            {id !== "" && <TablaPersona data={buscar} handleDelete={handleDelete}/>}
            
        </React.Fragment>
    );
}

export default BuscarScreen
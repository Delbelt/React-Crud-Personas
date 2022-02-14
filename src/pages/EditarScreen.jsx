import React, { useContext } from 'react'
import FormFind from '../components/FormFind';
import TablaEditar from '../components/TablaEditar';
import Title from '../components/Title';
import PersonaContext from '../context/PersonaContext';
import usePersona from '../hooks/usePersona';

const EditarScreen = () =>
{
    const {state, dispatch} = useContext(PersonaContext);
    const {id, handleFind, handleEdit, handleChange, nombre, dni, nombreV, dniV} = usePersona(dispatch); //Refactor
    const buscar = state.filter(objeto => objeto.id === id);

    return(
        <React.Fragment>
            
            <Title titulo='Editar Persona'/>
            <FormFind handle={handleFind}/>
            <TablaEditar buscar={buscar} handleEdit={handleEdit} 
            handleChange={handleChange} nombre={nombre} dni={dni} nombreV={nombreV} dniV={dniV}/>

        </React.Fragment>
    );
}

export default EditarScreen
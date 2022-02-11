import React, { useContext } from 'react'
import TablaPersona from '../components/TablaPersona';
import Title from '../components/Title';
import PersonaContext from '../context/PersonaContext';

const InicioScreen = () =>
{
    const {state} = useContext(PersonaContext);

    return(
        <React.Fragment>
            <Title titulo='Personas'/>
            <TablaPersona data={state}/>
        </React.Fragment>
    );
}

export default InicioScreen
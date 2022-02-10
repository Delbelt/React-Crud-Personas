import React from 'react'
import FormAdd from '../components/FormAdd';
import Title from '../components/Title';

const AgregarScreen = () =>
{
    return(
        <React.Fragment>
            <Title titulo="Agregar Persona"/>
            <FormAdd/>
        </React.Fragment>
    );
}

export default AgregarScreen
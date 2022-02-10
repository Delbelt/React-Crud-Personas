import React from 'react'
import Input from './Input';

const FormAdd = () =>
{
    return(
        <React.Fragment>
            <h1>Formulario</h1>

            <Input tipo='text' label='Nombre' placeholder='Ingrese su nombre'
            name='nombre' error='Solo puede ingresar letras'/>
            <Input tipo='text' label='Dni' placeholder='Ingrese su Dni'
            name='dni' error='Solo puede ingresar 8 digitos'/>

        </React.Fragment>
    );
}

export default FormAdd
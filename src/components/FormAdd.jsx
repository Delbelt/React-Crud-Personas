import React from 'react'
import Input from './Input';

const FormAdd = () =>
{
    return(
        <React.Fragment>

            <form action="">
                <div>
                    <Input tipo='text' label='Nombre' placeholder='Ingrese su nombre'
                    name='nombre' error='Solo puede ingresar letras'/>
                    <Input tipo='text' label='Dni' placeholder='Ingrese su Dni'
                    name='dni' error='Solo puede ingresar 8 digitos'/>
                    <button>Agregar Persona</button>
                </div>                            
            </form>
            

        </React.Fragment>
    );
}

export default FormAdd
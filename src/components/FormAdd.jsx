import React, { useContext } from 'react'
import PersonaContext from '../context/PersonaContext';
import usePersona from '../hooks/usePersona';
import Input from './Input';

const FormAdd = () =>
{
    const {state, dispatch} = useContext(PersonaContext);

    const ultimoId = state.length ? `${Number(state[state.length - 1].id) + 1}` : "1"; //Para darle un id "dinamico"

    const {handleChange, handleAdd, nombre, dni} = usePersona(dispatch, ultimoId);

    return(
        <React.Fragment>

            <form onSubmit={handleAdd}>
                <div>
                    <Input handle={handleChange} value={nombre} tipo='text' label='Nombre' placeholder='Ingrese su nombre'
                    name='nombre' error='Solo puede ingresar letras'/>
                    <Input handle={handleChange} value={dni} tipo='text' label='Dni' placeholder='Ingrese su Dni'
                    name='dni' error='Solo puede ingresar 8 digitos'/>
                    <button type='submit'>Agregar Persona</button>
                </div>                            
            </form>
            

        </React.Fragment>
    );
}

export default FormAdd
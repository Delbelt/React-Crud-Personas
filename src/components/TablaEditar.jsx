import React from 'react'

import Input from './Input';

const TablaEditar = ({buscar, handleEdit, handleChange, nombre, dni, nombreV, dniV}) =>
{
    return(
        <React.Fragment>
            {
                buscar.map((objeto)=>
                {
                    return(                        
                        <div key={objeto.id}>
                        <form onSubmit={handleEdit} className='form-edit tabla'>
                            <div>                                                                  
                                    <input type="hidden" name='id' value={objeto.id}></input> {/*Necesario para que funcione el HandleEdit*/}
                                    <Input handle={handleChange} tipo='text' name='nombre' placeholder={objeto.nombre}  
                                    value={nombre} error='Solo puede ingresar letras y un minimo de 2 palabras'  
                                    validate={nombreV}/>                                
                               
                                    <Input  handle={handleChange} tipo='text' name='dni' placeholder={objeto.dni}  
                                    value={dni} error='Solo puede ingresar 8 digitos'  
                                    validate={dniV}/>
                                                       
                                    <button type="submit" className='btn btn-edit'>Editar</button>                            
                            </div>
                        </form>
                        </div>
                    )
                })
            }
        </React.Fragment>
    );
}

export default TablaEditar
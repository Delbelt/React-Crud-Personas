import React from 'react'

const FormFind = ({handle}) =>
{
    return(
        <React.Fragment>
            <form className='form-edit' onSubmit={handle}>
                <label>                   
                    <input autoComplete='off' type="text" name="id"/>                                               
                </label>
                    <button type="submit" className='btn btn-find'>Buscar Cliente</button>                 
            </form>
        </React.Fragment>
    );
}

export default FormFind
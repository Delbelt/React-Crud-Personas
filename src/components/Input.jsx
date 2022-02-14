import React from 'react'

const Input = ({tipo, label, placeholder, name, error, handle, value, validate}) =>
{
    return(
        <React.Fragment>            
            <label>{label}</label>
            <input onChange={handle} value={value} autoComplete='off' type={tipo} placeholder={placeholder} name={name}/>
            {!validate && <p>{error}</p>}
        </React.Fragment>
    );
}

export default Input
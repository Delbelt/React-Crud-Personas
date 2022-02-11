import React from 'react'

const Input = ({tipo, label, placeholder, name, error, handle, value}) =>
{
    return(
        <React.Fragment>            
            <label htmlFor={name}>{label}</label>
            <input onChange={handle} value={value} autoComplete='off' type={tipo} placeholder={placeholder} name={name}/>
            <p>{error}</p>
        </React.Fragment>
    );
}

export default Input
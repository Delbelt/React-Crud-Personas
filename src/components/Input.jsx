import React from 'react'

const Input = ({tipo, label, placeholder, name, error}) =>
{
    return(
        <React.Fragment>
            <label htmlFor={name}>{label}</label>
            <input type={tipo} placeholder={placeholder} id={name}/>
            <p>{error}</p>
        </React.Fragment>
    );
}

export default Input
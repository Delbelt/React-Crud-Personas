import React from 'react'
import PropTypes from "prop-types"; 

const Title = ({titulo}) =>
{
    return(
        <React.Fragment>
            <h2>{titulo}</h2>
            <hr/>
        </React.Fragment>
    );
}

Title.propTypes =
{
    texto: PropTypes.string, //Valida que el prop enviado sea un String
};

export default Title;
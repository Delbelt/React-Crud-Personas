import React from 'react'
import {Link} from "react-router-dom";

const NavBar = () =>
{
    return(
        <React.Fragment>
            <nav>
                <ul>
                    <p>Persona</p>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>

                    <li>
                    <Link to='/agregar'>Agregar</Link>
                    </li>

                    <li>
                    <Link to='/editar'>Editar</Link>
                    </li>

                    <li>
                    <Link to='/buscar'>Buscar</Link>
                    </li>                    
                </ul>
            </nav>
        </React.Fragment>
    );
}

export default NavBar
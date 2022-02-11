import React, { useEffect, useReducer } from 'react'
import PersonaContext from './context/PersonaContext';
import PersonaReducer from './reducer/PersonaReducer';
import AppRouter from './routes/AppRouter'

const init = () =>
{
    const clientes = localStorage.getItem("personas");
    return clientes ? JSON.parse(clientes) : [];
}

const App = () =>
{
    const [state, dispatch] = useReducer(PersonaReducer, [], init); //El reducer

    useEffect(() => //Se lanza cada vez que agreguemos o eliminemos clientes [state]
    {
        localStorage.setItem("personas", JSON.stringify(state)) //convertimos los datos a String
        //Recibe dos parametros: (key: String, value: String)
    },[state]);

    return(
        <PersonaContext.Provider value={{state, dispatch}}>
            <AppRouter/>
        </PersonaContext.Provider>        
    );
}

export default App
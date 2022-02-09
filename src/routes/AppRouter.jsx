import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar';

//<Route exact path='/' element={"<Component>"}/>

const AppRouter = () =>
{
    return(
		<Router>
            <NavBar/>            
			<Routes>				
			</Routes>
		</Router>
    );
}

export default AppRouter
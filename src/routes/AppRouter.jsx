import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

//Components
import NavBar from '../components/NavBar';

//Pages
import AgregarScreen from '../pages/AgregarScreen';
import BuscarScreen from '../pages/BuscarScreen';
import EditarScreen from '../pages/EditarScreen';
import InicioScreen from '../pages/InicioScreen';

const AppRouter = () =>
{
    return(
		<Router>
            <NavBar/>            
			<Routes>
			<Route end path='/' element={<InicioScreen/>}/>				
				<Route end path='/buscar' element={<BuscarScreen/>}/>
				<Route end path='/editar' element={<EditarScreen/>}/>
				<Route end path='/agregar' element={<AgregarScreen/>}/>
				<Route path='*' element={<Navigate to='/'/>}/>				
			</Routes>
		</Router>
    );
}

export default AppRouter
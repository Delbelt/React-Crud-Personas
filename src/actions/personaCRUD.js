import types from "../types/types";

export const agregarPersona = (id, nombre, dni) => //Actions
{
	return (
        {      
            type: types.agregar,
            payload:  //Informacion de un objeto
            {
                id: id,
                nombre, //Si se pasa asi significa: nombre: "nombre"
                dni, //JS simplifico esto porque es redundante y el IDE deduce esto
            }
	    });
}

export const editarPersona = (payload, nombre, dni) => //Actions
{
	return (
        {        
            type: types.modificar,
            payload,
            nombre,
            dni,
        });       
};

export const eliminarPersona = (id) => //Actions
{
	return (
        {        
            type: types.eliminar,
            payload: id,
        });       
};
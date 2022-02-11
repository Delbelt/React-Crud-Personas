import types from "../types/types";

const PersonaReducer = (state = [], action) =>
{
    switch(action.type)
    {
        case types.agregar: return [...state, action.payload]; //Payload es una convención de nomenclatura no oficial
        //Payload contiene la informacion de un objeto con datos {nombre:"nombre",apellido:"apellido",etc:"etc..."}
        //Como usamos RETURN dentro de los CASE no es necesario el BREAK, no lo leeria
        //...state = Copia el dato del Array que recibe + Payload y crea el numero State con ambos
        //Se esta retornando los datos iniciales + payload que agrega un nuevo dato

        case types.eliminar: return state.filter((objeto) => objeto.id !== action.payload);
        //Guarda solamente los contactos que NO sean igual al ID que pasamos (es decir, lo elimina)     
        
        case types.modificar: state = state.map((objeto)=>
        {
            if (objeto.id === action.payload)
            {
                return {
                    ...objeto,
                    nombre: action.nombre,
                    dni: action.dni,
                }
            }
            
            return objeto;
        })

        return state;

        default: return state;        
    }
};

export default PersonaReducer;
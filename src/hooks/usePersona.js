import { useState } from 'react';
import swal from 'sweetalert';
import { agregarCliente, editarCliente, eliminarCliente } from '../actions/abmClientes';

const usePersona = (dispatch, ultimoId) =>
{
    const [datos, setDatos] = useState({nombre: '', dni: ''});
    
    const expresiones = //Expresiones regulares
    {
        iud: /^\d{1,10}$/, //Solo numeros {1 a 10 digitos}
        nombre:/^[a-zA-Z]{2,15}/, //Solo letras {2 a 15 Letras}
        dni:/^\d{8}$/, //Solo 8 digitos para el DNI
    }

    const {nombre, dni} = datos; //Destructuring para usarlos sin datos.nombre/dni 

    const [id, setId] = useState("");

    const handleFind = (evento) =>
    {
        evento.preventDefault();
        if(expresiones.iud.test(evento.target[0].value)) //Valida que entren numeros
        {
            setId(evento.target[0].value);
            setDatos({nombre:"", dni:""});             
        }             
    };
    
    const handleChange = (evento) =>
    {
       setDatos({
        ...datos,
        [evento.target.name] : evento.target.value
        //El nombre del input que se relacional nombre del state
        })
    }; 

    const handleAdd = () => //Agrega un contacto
    {
        if(nombre !== "" || dni !== "")
        {
            if(expresiones.nombre.test(nombre) && expresiones.dni.test(dni))
            {
            dispatch(agregarCliente(ultimoId, nombre, dni)); 
            //No es necesario decirle cual es su reducer, todos los dispatch
            //van a tener referencia directa con su Reducer
            setDatos({nombre:"", dni:""}); //Borro los datos del input

            swal(
                {
                    title: "Estas seguro?",
                    text: "Confirma los cambios?\n"
                        + "\nNombre: " + nombre
                        + "\nDni: " + dni,
                    icon: "warning",
                    buttons: true,
                    dangerMode: true
                }
            ).then((accion)=>
            {
                if (accion)
                {
                    swal('Completado!', 'Cliente creado correctamente', 'success');
                }
                else
                {
                    swal('Cancelado!', 'Accion Cancelada', 'warning');
                }
            })
           
            }            
        }

        else
        {            
            swal('Error al agregar', 'Tiene que completar todos los campos','error');            
        }             
    };

    const handleEdit = (evento) =>
    {
        evento.preventDefault();

        if(expresiones.nombre.test(evento.target[1].value) && expresiones.dni.test(evento.target[2].value))
        {
            dispatch(editarCliente(evento.target[0].value, evento.target[1].value, evento.target[2].value));
            swal(
                {
                    title: "Estas seguro?",
                    text: "Confirma los cambios?\n"
                        + "\nNombre: " + evento.target[1].value
                        + "\nDni: " + evento.target[2].value,
                    icon: "warning",
                    buttons: true,
                    dangerMode: true
                }
            ).then((accion)=>
            {
                if (accion)
                {
                    swal('Completado!', 'Cliente creado correctamente', 'success');
                }
                else
                {
                    swal('Cancelado!', 'Accion Cancelada', 'warning');
                }
            })
            setId("");
            setDatos({nombre:"", dni:""});                    
        }

        else if (evento.target[1].value === "" && evento.target[2].value === "")
        {           
            swal('Error al editar', 'Tiene que completar todos los campos','error');
        }

        else
        {
            swal('Error al editar', 'El nombre o el dni no paso la validacion','error');
        }
    };
    
    const handleDelete = (id) => //Elimina un contacto por id
    {
        dispatch(eliminarCliente(id));
    };

    return {id, nombre, dni, handleFind, handleChange, handleEdit, handleDelete, handleAdd};
};

export default usePersona;
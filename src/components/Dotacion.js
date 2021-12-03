import React from 'react';
import { useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';

//redux
import { useDispatch } from 'react-redux';
import { borrarDotacionAction, obtenerDotacionEditar } from '../actions/guardaAction';


const Dotacion = ({dotacion}) => {

    const {nombre, camisa, pantalon, gorra, corbata, chaqueta, fecha, id} = dotacion;

    const dispatch = useDispatch();
    //habilitar history para redireccion
    const history= useHistory();

    //confirmar si desea eliminar
    const confirmarEliminarDotacion = id => {

        Swal.fire({
            title: 'Estas seguro?',
            text: "Una dotacion que se elimina no se puede recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            calcelButtonText:'Cancelar'
          }).then((result) => {
            if (result.value) {

                //pasar al action
             dispatch(borrarDotacionAction(id));

             
            }
          });
    }

    //funcion que redireige de forma programda
    const redireccionarEdicion = (dotacion) =>{
        dispatch(obtenerDotacionEditar(dotacion));
        history.push(`dotacion/editar/${id}`)
    }
    return ( 
        <tr>
            <td>{nombre}</td>
            <td>{camisa}</td>
            <td>{pantalon}</td>
            <td>{gorra}</td>
            <td>{corbata}</td>
            <td>{chaqueta}</td>
            <td>{fecha}</td>
            <td className="acciones">
                <button
                    type="button"
                    onClick={()=>redireccionarEdicion(dotacion)}
                    className="btn btn-primary mr-2">
                     Editar</button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=> confirmarEliminarDotacion(id)}
                    >Eliminar</button>
            </td>

        </tr>
     );
}
 
export default Dotacion;
import React from 'react'
import { useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';

//redux
import { useDispatch } from 'react-redux';
import { borrarGuardaAction, obtenerGuardaEditar } from '../actions/guardaAction';

const Guarda = ({guarda}) => {

    const {cedula, nombre, eps, fondo, fecha, id} = guarda;

    const dispatch = useDispatch();
    //habilitar history para redireccion
    const history= useHistory();

    //confirmar si dese aliminar el id sellecionado
    const confirmarEliminarGuarda=id => {

            //preguntar al usuario
            Swal.fire({
                title: 'Estas seguro?',
                text: "Un guarda que se elimina no se puede recuperar!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!',
                calcelButtonText:'Cancelar'
              }).then((result) => {
                if (result.value) {

                    //pasar al action
                 dispatch(borrarGuardaAction(id));

                 
                }
              });

            
    }

    //funcio que redirige de forma programada
    const redireccionarEdicion = () =>{
            dispatch(obtenerGuardaEditar(guarda));
            history.push(`guarda/editar/${id}`)
    }
    return (
        <tr>
            <td>{cedula}</td>
            <td>{nombre}</td>
            <td>{eps}</td>
            <td>{fondo}</td>
            <td>{fecha}</td>
            <td className="acciones">
                <button 
                    className="btn btn-primary mr-2"
                    type="button"
                    onClick={()=>redireccionarEdicion(guarda)}
                    >Editar</button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>confirmarEliminarGuarda(id)}
                    >Eliminar</button>
            </td>
        </tr>
      );
}
 
export default Guarda;
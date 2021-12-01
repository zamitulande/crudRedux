import React from 'react'
import { Link } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
import { borrarGuardaAction } from '../actions/guardaAction';

const Guarda = ({guarda}) => {

    const {cedula, nombre, eps, fondo, fecha, id} = guarda;
    const dispatch = useDispatch();

    //confirmar si dese aliminar el id sellecionado
    const confirmarEliminarGuarda=id => {

            //preguntar al usuario


            //pasar al action
            dispatch(borrarGuardaAction(id));
    }
    return (
        <tr>
            <td>{cedula}</td>
            <td>{nombre}</td>
            <td>{eps}</td>
            <td>{fondo}</td>
            <td>{fecha}</td>
            <td className="acciones">
                <Link to={`guarda/editar/${id}`} className="btn btn-primary mr-2">Editar</Link>
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
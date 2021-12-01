import React from 'react';
import { Link } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
import { borrarDotacionAction } from '../actions/guardaAction';


const Dotacion = ({dotacion}) => {

    const {nombre, camisa, pantalon, gorra, corbata, chaqueta, fecha, id} = dotacion;

    const dispatch = useDispatch();

    //confirmar si desea eliminar
    const confirmarEliminarDotacion = id => {

        //preguntar al usuario


        //pasar al action
        dispatch(borrarDotacionAction(id));
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
                <Link to={`dotacion/editar/${id}`} className="btn btn-primary mr-2">Editar</Link>
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
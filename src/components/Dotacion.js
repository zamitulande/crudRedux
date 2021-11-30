import React from 'react'
import { Link } from 'react-router-dom';

const Dotacion = ({dotacion}) => {

    const {nombre, camisa, pantalon, gorra, corbata, chaqueta, fecha, id} = dotacion
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
                    >Eliminar</button>
            </td>

        </tr>
     );
}
 
export default Dotacion;
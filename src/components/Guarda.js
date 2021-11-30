import React from 'react'
import { Link } from 'react-router-dom';

const Guarda = ({guarda}) => {

    const {cedula, nombre, eps, fondo, fecha, id} = guarda
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
                    >Eliminar</button>
            </td>
        </tr>
      );
}
 
export default Guarda;
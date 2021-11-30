import React, {Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerDotacionAction } from '../actions/guardaAction';


const Guardas = () => {

    const dispatch= useDispatch();

    useEffect(() => {

        //consultar a la api
        const cargarDotacion=()=> dispatch(obtenerDotacionAction());
        cargarDotacion();
       
    }, [])
    return (
      <Fragment>
          <Link to={"/dotacion"}
                className="btn btn-danger nuevo-post d-blok d-md-inline-block">Nueva dotacion</Link>
          <h2 className="text-center my-5">Dotaciones Entregadas</h2>

          <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">Camisa</th>
                        <th scope="col">Pantalon</th>
                        <th scope="col">Gorra</th>
                        <th scope="col">Corbata</th>
                        <th scope="col">Chaqueta</th>
                    </tr>
                </thead>
                
                 
          </table>
         
      </Fragment>
        
      );
}
 
export default Guardas;
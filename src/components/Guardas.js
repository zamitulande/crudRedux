import React, {Fragment, useEffect} from 'react';

import { Link } from 'react-router-dom';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerGuardasAction } from '../actions/guardaAction';


const Guardas = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        //consultar la api
        const cargarGuardas=()=> dispatch(obtenerGuardasAction());
        cargarGuardas();

        
    }, [])
    return (
      <Fragment>
          <Link to={"/guarda/nuevo"}
                className="btn btn-danger nuevo-post d-blok d-md-inline-block">Nuevo Guarda &#43;</Link>
          <h2 className="text-center my-5">Listado de Guardas</h2>

          <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Cedula</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">EPS</th>
                        <th scope="col">Fondo de pension</th>
                        <th scope="col">Fecha ingreso</th>
                    </tr>
                </thead>
                
                 
          </table>
         
      </Fragment>
        
      );
}
 
export default Guardas;
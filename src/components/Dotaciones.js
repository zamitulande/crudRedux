import React, {Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Dotacion from './Dotacion';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerDotacionAction } from '../actions/dotacionAction';


const Guardas = () => {

    const dispatch= useDispatch();

    useEffect(() => {

        //consultar a la api
        const cargarDotacion=()=> dispatch(obtenerDotacionAction());
        cargarDotacion();
       
    }, [dispatch])

    //obtener el state que se obtubo con el codigo de los reducers y el action
    const dotaciones = useSelector(state => state.dotacion.dotacion);
    const error = useSelector(state => state.dotacion.error);
    const cargando = useSelector(state =>state.dotacion.loading);
    return (
      <Fragment>
          <Link to={"/dotacion"}
                className="btn btn-danger nuevo-post d-blok d-md-inline-block">Nueva dotacion</Link>
          <h2 className="text-center my-5">Dotaciones Entregadas</h2>
          {error ? <p className="font-weight alert-danger text-center">Hubo un Error</p> : null }
          {cargando ? <p className="text-center">Cargando...</p> : null }

          <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">Camisa</th>
                        <th scope="col">Pantalon</th>
                        <th scope="col">Gorra</th>
                        <th scope="col">Corbata</th>
                        <th scope="col">Chaqueta</th>
                        <th scope="col">Fecha</th>

                    </tr>
                </thead>
                <tbody>
                {dotaciones.length === 0 ? 'No hay Guardas' : (
                    dotaciones.map(dotacion=>(
                        <Dotacion
                            key={dotacion.id}
                            dotacion={dotacion}
                        
                        />
                    ))
                )}
                </tbody>
                 
          </table>
         
      </Fragment>
        
      );
}
 
export default Guardas;
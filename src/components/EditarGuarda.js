import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from  'react-redux';

const EditarGuarda = () => {

    //guarda a editar
    const guarda=useSelector(state => state.guardas.guardaEditar);

     //aplicar desttructuring
     const {cedula, nombre, eps, fondo, fecha}= guarda;
    
    return ( 
        <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Editar Informacion del Guarda
                    </h2>
                    <form>
                    <div className="form-group">
                            <label>Cedula</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cedula del Guarda"
                                nombre="cedula"
                                value={cedula}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nombre </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre del  Guarda"
                                nombre="nombre"
                                value={nombre}
                            />
                        </div>
                        <div className="form-group">
                            <label>EPS</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="EPS del Guarda"
                                nombre="eps"
                                value={eps}
                            />
                        </div>
                        <div className="form-group">
                            <label>Fondo Pension</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Fondo Pensio del Guarda"
                                nombre="fondo"
                                value={fondo}
                            />
                        </div>
                        <div className="form-group">
                            <label>Fecha de Ingreso</label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Fondo Pension del Guarda"
                                nombre="fecha"
                                value={fecha}
                            />
                        </div>
                    
                        <button
                            type="submit"
                            className="btn btn-primary font-weightbold text-uppercase d-block w-100">
                                Guardar Cambios
                          </button>
                    </form>
                </div>
                <nav>
            <div >
                <h1><Link to={'/guarda'} >Volver</Link></h1>
            </div>

            
        </nav>
                         
            </div>
        </div>
    </div>
     );
}
 
export default EditarGuarda;
import React from 'react';
import { Link } from 'react-router-dom';


const EditarGuarda = () => {
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
                                type="number"
                                className="form-control"
                                placeholder="Cedula del Guarda"
                                nombre="cedula"
                            />
                        </div>
                        <div className="form-group">
                            <label>Nombre </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre del  Guarda"
                                nombre="nombre"
                            />
                        </div>
                        <div className="form-group">
                            <label>EPS</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="EPS del Guarda"
                                nombre="eps"
                            />
                        </div>
                        <div className="form-group">
                            <label>Fondo Pension</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Fondo Pensio del Guarda"
                                nombre="fondo"
                            />
                        </div>
                        <div className="form-group">
                            <label>Fecha de Ingreso</label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Fondo Pension del Guarda"
                                nombre="fondo"
                            />
                        </div>
                    
                        <button
                            type="submit"
                            className="btn btn-primary font-weightbold text-uppercase d-block w-100">
                                Guardar Cambios
                          </button>
                    </form>
                </div>
                         
            </div>
        </div>
    </div>
     );
}
 
export default EditarGuarda;
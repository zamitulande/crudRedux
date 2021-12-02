import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from  'react-redux';

const EditarDotacion = () => {

    //dotacion a editar
    const dotacion=useSelector(state => state.dotacion.dotacioneditar);

    if(!dotacion) return null;

    //aplicar desttructuring
    const {nombre, camisa, pantalon, gorra, corbata, oberol,  zapatos, chaqueta, fecha}= dotacion;
   

    return (
        <div className="row justify-content-center">
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    
                    <form>

                    <div className="form-group">
                            <label>Nombre</label>
                            <input
                                type="text"
                                className="form-control"                                
                                nombre="nombre"
                                value={nombre}
                                
                            />
                        </div>
                    <div className="form-group">
                            <label>Camisa</label>
                            <input
                                type="text"
                                className="form-control"                                
                                nombre="camisa"
                                value={camisa}
                            />
                        </div>
                        <div className="form-group">
                            <label>Pantalon </label>
                            <input
                                type="text"
                                className="form-control"                                
                                nombre="pantalon"
                                value={pantalon}
                            />
                        </div>
                        <div className="form-group">
                            <label>Gorra</label>
                            <input
                                type="text"
                                className="form-control"                                
                                nombre="gorra"
                                value={gorra}
                            />
                        </div>
                        <div className="form-group">
                            <label>Zapatos</label>
                            <input
                                type="text"
                                className="form-control"                                
                                nombre="zapatos"
                                value={zapatos}
                            />
                        </div>
                        <div className="form-group">
                            <label>Corbata</label>
                            <input
                                type="text"
                                className="form-control"                                
                                nombre="corbata"
                                value={corbata}
                            />
                        </div>
                        <div className="form-group">
                            <label>Chaqueta</label>
                            <input
                                type="text"
                                className="form-control"                                
                                nombre="chaqueta"
                                value={chaqueta}
                            />
                        </div>
                        <div className="form-group">
                            <label>Oberol</label>
                            <input
                                type="text"
                                className="form-control"                                
                                nombre="oberol"
                                value={oberol}
                            />
                        </div>
                        <div className="form-group">
                            <label>Fecha de entrega</label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="cantidad"
                                nombre="fecha"
                                value={fecha}
                           />
                           </div>
                             <button
                            type="submit"
                            className="btn btn-primary font-weightbold text-uppercase d-block w-100">
                                Guardar Edicion
                          </button>
                        
                    </form>
                    <nav>
                        <div >
                            <h1><Link to={'/dotaciones'} >Volver</Link></h1>
                        </div>

            
                  </nav>
                </div>
                        
            </div>
        </div>
    </div>
        
             );
}
 
export default EditarDotacion;
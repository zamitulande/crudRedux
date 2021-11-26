import React from 'react';

const Dotacion = () => {
    return (
        <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    
                    <form>
                    <div className="form-group">
                            <label>Camisa</label>
                            <input
                                type="radio"
                                className="form-control"                                
                                nombre="camisa"
                            />
                        </div>
                        <div className="form-group">
                            <label>Pantalon </label>
                            <input
                                type="radio"
                                className="form-control"                                
                                nombre="pantalon"
                            />
                        </div>
                        <div className="form-group">
                            <label>Gorra</label>
                            <input
                                type="radio"
                                className="form-control"                                
                                nombre="eps"
                            />
                        </div>
                        <div className="form-group">
                            <label>Zapatos</label>
                            <input
                                type="radio"
                                className="form-control"                                
                                nombre="zapatos"
                            />
                        </div>
                        <div className="form-group">
                            <label>Corbata</label>
                            <input
                                type="radio"
                                className="form-control"                                
                                nombre="corbata"
                            />
                        </div>
                        <div className="form-group">
                            <label>Chaqueta</label>
                            <input
                                type="radio"
                                className="form-control"                                
                                nombre="chaqueta"
                            />
                        </div>
                        <div className="form-group">
                            <label>Oberol</label>
                            <input
                                type="radio"
                                className="form-control"                                
                                nombre="oberol"
                            />
                        </div>
                        <div className="form-group">
                            <label>Fecha de entrega</label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="cantidad"
                                nombre="corbata"
                           />
                           </div>
                             <button
                            type="submit"
                            className="btn btn-primary font-weightbold text-uppercase d-block w-100">
                                Guardar
                          </button>
                        
                    </form>
                </div>
                        
            </div>
        </div>
    </div>
        
             );
}
 
export default Dotacion;
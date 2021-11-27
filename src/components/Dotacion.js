import React, {useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';

//importar action de redux
import {crearNuevoDotacionAction} from '../actions/guardaAction';

const Dotacion = () => {

    //state del componenente que tomara los valores de los campos y los guardara
    const [camisa, setCamisa]=useState('');
    const [pantalon, setPantalon]=useState('');
    const [gorra, setGorra]=useState('');
    const [zapatos, setZapatos]=useState('');
    const [corbata, setCorbata]=useState('');
    const [chaqueta, setChaqueta]=useState('');
    const [oberol, setOberol]=useState('');
    const [fecha, setFecha]=useState('');
    


    //utlizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    //mandar a llamar el action de productoAction
    const agregarDotacion=(dotacion)=> dispatch(crearNuevoDotacionAction(dotacion));

    //cuando el usuario haga submit osea agregar
    const submitNuevaDotacion= e => {
        e.preventDefault();

        if(camisa.trim() === '' || pantalon.trim() === '' || gorra.trim() === '' 
        || corbata.trim() ==='' || chaqueta.trim() ==='' || oberol.trim() ===''){
            return;
        }

        //si no hay errores

        //crear el nuevo guarda
        agregarDotacion({
            camisa,
            pantalon,
            gorra,
            zapatos,
            corbata,
            chaqueta,
            oberol,
            fecha
        });
    }
    return (
        <div className="row justify-content-center">
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    
                    <form
                            onSubmit={submitNuevaDotacion}
                    >
                    <div className="form-group">
                            <label>Camisa</label>
                            <input
                                type="text"
                                className="form-control"                                
                                nombre="camisa"
                                value={camisa}
                                onChange={e=>setCamisa(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Pantalon </label>
                            <input
                                type="text"
                                className="form-control"                                
                                nombre="pantalon"
                                value={pantalon}
                                onChange={e=>setPantalon(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Gorra</label>
                            <input
                                type="text"
                                className="form-control"                                
                                nombre="gorra"
                                value={gorra}
                                onChange={e=>setGorra(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Zapatos</label>
                            <input
                                type="text"
                                className="form-control"                                
                                nombre="zapatos"
                                value={zapatos}
                                onChange={e=>setZapatos(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Corbata</label>
                            <input
                                type="text"
                                className="form-control"                                
                                nombre="corbata"
                                value={corbata}
                                onChange={e=>setCorbata(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Chaqueta</label>
                            <input
                                type="text"
                                className="form-control"                                
                                nombre="chaqueta"
                                value={chaqueta}
                                onChange={e=>setChaqueta(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Oberol</label>
                            <input
                                type="text"
                                className="form-control"                                
                                nombre="oberol"
                                value={oberol}
                                onChange={e=>setOberol(e.target.value)}
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
                                onChange={e=>setFecha(e.target.value)}
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
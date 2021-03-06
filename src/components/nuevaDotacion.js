import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';


//importar action de redux
import {crearNuevoDotacionAction} from '../actions/dotacionAction';
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaAction';

const NuevaDotacion = ({history}) => {

    //state del componenente que tomara los valores de los campos y los guardara
    const [nombre, setNombre]=useState('');
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

    //acceder al state del store o sacarlos del state para mostrarlo en interfaz
    const cargando = useSelector(state=> state.dotacion.loading);
    const error = useSelector(state=>state.dotacion.error);
    const alerta = useSelector(state=>state.alerta.alerta);

    //mandar a llamar el action de productoAction
    const agregarDotacion=(dotacion)=> dispatch(crearNuevoDotacionAction(dotacion));

    //cuando el usuario haga submit osea agregar
    const submitNuevaDotacion= e => {
        e.preventDefault();

        if(nombre.trim() === '' || camisa.trim() === '' || pantalon.trim() === '' || gorra.trim() === '' 
        || corbata.trim() ==='' || chaqueta.trim() ==='' || oberol.trim() ===''){

            const respuesta = {
                msg: 'Todos los campor son obligatorios',
                classes:'alert alert-danger text-center'
            }

            dispatch (mostrarAlerta(respuesta));
            return;
        }

        //si no hay errores
        dispatch(ocultarAlertaAction());

        //crear el nuevo guarda
        agregarDotacion({
            nombre,
            camisa,
            pantalon,
            gorra,
            zapatos,
            corbata,
            chaqueta,
            oberol,
            fecha
        });

        //una vez se agregue el objeto se redirige al listado
        history.push('/dotaciones');
    }
    return (
        <div className="row justify-content-center">
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Guarda
                        </h2>
                        
                        {alerta ? <p className={alerta.classes}>{alerta.msg}</p> :  null}
                    
                    <form
                            onSubmit={submitNuevaDotacion}
                    >
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="nombre"
                                value={nombre}
                                onChange={e=>setNombre(e.target.value)}
                            />
                        </div>
                    <div className="form-group">
                            <label>Camisa</label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="camisa"
                                value={camisa}
                                onChange={e=>setCamisa(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Pantalon </label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="pantalon"
                                value={pantalon}
                                onChange={e=>setPantalon(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Gorra</label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="gorra"
                                value={gorra}
                                onChange={e=>setGorra(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Zapatos</label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="zapatos"
                                value={zapatos}
                                onChange={e=>setZapatos(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Corbata</label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="corbata"
                                value={corbata}
                                onChange={e=>setCorbata(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Chaqueta</label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="chaqueta"
                                value={chaqueta}
                                onChange={e=>setChaqueta(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Oberol</label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="oberol"
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
                    {cargando ? <p>Cargando..</p> : null}
                    {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null}
                    <nav>
                        <div >
                            <h1><Link to={'/dotaciones'} >Cancelar</Link></h1>
                        </div>

            
                  </nav>
                </div>
                        
            </div>
        </div>
    </div>
        
             );
}
 
export default NuevaDotacion;
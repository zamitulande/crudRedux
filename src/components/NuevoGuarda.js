import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//importar action de redux
import {crearNuevoGuardaAction} from '../actions/guardaAction';

const NuevoGuarda = () => {

    //state del componenente que tomara los valores de los campos y los guardara
    const [cedula, setCedula]=useState('');
    const [nombre, setNombre]=useState('');
    const [eps, setEps]=useState('');
    const [fondo, setFondo]=useState('');
    const [fecha, setFecha]=useState('');
    


    //utlizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    //acceder al state del store
    const cargando = useSelector(state=> state.guardas.loading);
    const error = useSelector(state=>state.guardas.error);

    //mandar a llamar el action de productoAction
    const agregarGuarda=(guarda)=> dispatch(crearNuevoGuardaAction(guarda));

    //cuando el usuario haga submit osea agregar
    const submitNuevoGuarda= e => {
        e.preventDefault();

        //validar formulario
        if(cedula.trim() === '' || nombre.trim() === '' || eps.trim() === '' || fondo.trim() ===''){
            return;
        }

        //si no hay errores

        //crear el nuevo guarda
        agregarGuarda({
            cedula,
            nombre,
            eps,
            fondo,
            fecha
        });
    }

    return ( 
        
        <div className="row justify-content-center">
            
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Guarda
                        </h2>
                        
                        <form
                            onSubmit={submitNuevoGuarda}
                        >
                        <div className="form-group">
                                <label>Cedula</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Cedula del Guarda"
                                    nombre="cedula"
                                    value={cedula}
                                    onChange={e=>setCedula(e.target.value)}
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
                                    onChange={e=>setNombre(e.target.value)}
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
                                    onChange={e=>setEps(e.target.value)}
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
                                    onChange={e=>setFondo(e.target.value)}
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
                                    onChange={e=>setFecha(e.target.value)}
                                />
                            </div>
                        
                            <button
                                type="submit"
                                className="btn btn-primary font-weightbold text-uppercase d-block w-100">
                                    Agregar
                                </button>
                                                           
                        </form>                                                
                        {cargando ? <p>Cargando..</p> : null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null}
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default NuevoGuarda;
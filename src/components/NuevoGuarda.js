import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


//importar action de redux
import {crearNuevoGuardaAction} from '../actions/guardaAction';
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaAction';

const NuevoGuarda = ({history}) => {

    //state del componenente que tomara los valores de los campos y los guardara
    const [cedula, setCedula]=useState('');
    const [nombre, setNombre]=useState('');
    const [eps, setEps]=useState('');
    const [fondo, setFondo]=useState('');
    const [fecha, setFecha]=useState('');
    


    //utlizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    //acceder al state del store o sacarlos del state para mostrarlo en interfaz
    const cargando = useSelector(state=> state.guardas.loading);
    const error = useSelector(state=>state.guardas.error);
    const alerta = useSelector(state=>state.alerta.alerta);

    //mandar a llamar el action de productoAction
    const agregarGuarda=(guarda)=> dispatch(crearNuevoGuardaAction(guarda));

    //cuando el usuario haga submit osea agregar
    const submitNuevoGuarda= e => {
        e.preventDefault();

        //validar formulario
        if(cedula.trim() === '' || nombre.trim() === '' || eps.trim() === '' || fondo.trim() ===''){

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
        agregarGuarda({
            cedula,
            nombre,
            eps,
            fondo,
            fecha
        });

        //una vez se agregue el objeto se redirige al listado
        history.push('/guarda');
    }

    return ( 
        
        <div className="row justify-content-center">
            
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Guarda
                        </h2>

                        {alerta ? <p className={alerta.classes}>{alerta.msg}</p> :  null}
                        
                        <form
                            onSubmit={submitNuevoGuarda}
                        >
                        <div className="form-group">
                                <label>Cedula</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Cedula del Guarda"
                                    name="cedula"
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
                                    name="nombre"
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
                                    name="eps"
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
                                    name="fondo"
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
                                    name="fecha"
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
 
export default NuevoGuarda;
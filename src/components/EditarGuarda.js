import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from  'react-redux';
import { editarGuardaAction } from '../actions/guardaAction';
import { useHistory } from 'react-router';

const EditarGuarda = () => {

    const history= useHistory();

    const dispatch = useDispatch();

    // nuevo state de guardas
    const [guarda, setGuarda] = useState({
        cedula:'',
        nombre:'',
        eps:'',
        fondo:'',
        fecha:''
    })

    //guarda a editar
    const guardaeditar=useSelector(state => state.guardas.guardaEditar);

    // llenar el state automaticamente
    useEffect(() => {
        setGuarda(guardaeditar);
      
    }, [guardaeditar]);

    //leer los datos del formulario
    const onChangeFormulario=e=>{
        setGuarda({
            ...guarda,
            [e.target.name] : e.target.value
        })
    }

     //aplicar desttructuring
     const {cedula, nombre, eps, fondo, fecha}= guarda;

     const submitEditarGuarda= e =>{
         e.preventDefault();

         dispatch (editarGuardaAction(guarda)) ;
         history.push('/guarda');
     }
    
    return ( 
        <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Editar Informacion del Guarda
                    </h2>
                    <form
                        onSubmit={submitEditarGuarda}
                    >
                    <div className="form-group">
                            <label>Cedula</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cedula del Guarda"
                                name="cedula"
                                value={cedula}
                                onChange={onChangeFormulario}
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
                                onChange={onChangeFormulario}
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
                                onChange={onChangeFormulario}
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
                                onChange={onChangeFormulario}
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
                                onChange={onChangeFormulario}
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
                <h1><Link to={'/guarda'} >Cancelar</Link></h1>
            </div>

            
        </nav>
                         
            </div>
        </div>
    </div>
     );
}
 
export default EditarGuarda;
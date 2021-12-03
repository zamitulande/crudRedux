import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from  'react-redux';
import { editarDotacionAction } from '../actions/guardaAction';
import { useHistory } from 'react-router';

const EditarDotacion = () => {

    const dispatch=useDispatch();
    const history = useHistory();

    
    // nuevo state de dotacion
    const [ dotacion, setDotacion] = useState({
        nombre:'', 
        camisa:'', 
        pantalon:'', 
        gorra:'', 
        corbata:'', 
        chaqueta:'', 
        fecha:'', 
        oberol:'',
        zapatos: '',
        id: ''
    })

    // producto a editar
    const dotacioneditar = useSelector(state => state.dotacion.dotacioneditar);
  
    // llenar el state automaticamente
    useEffect( () => {
        setDotacion(dotacioneditar);
    }, [dotacioneditar]);

    // Leer los datos del formulario
    const onChangeFormulario = e => {
        setDotacion({
            ...dotacion,
            [e.target.name] : e.target.value
        })
    }


    const {nombre, camisa, pantalon, gorra, corbata, chaqueta, fecha, oberol, zapatos} = dotacion;

    const submitEditarDotacion = e => {
        e.preventDefault();

        dispatch (editarDotacionAction(dotacion));

        history.push('/dotaciones');
        
    }
   

    return (
        <div className="row justify-content-center">
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    
                    <form
                    
                        onSubmit={submitEditarDotacion}
                    >

                    <div className="form-group">
                            <label>Nombre</label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="nombre"
                                value={nombre}
                                onChange={onChangeFormulario}
                                
                            />
                        </div>
                    <div className="form-group">
                            <label>Camisa</label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="camisa"
                                value={camisa}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div className="form-group">
                            <label>Pantalon </label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="pantalon"
                                value={pantalon}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div className="form-group">
                            <label>Gorra</label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="gorra"
                                value={gorra}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div className="form-group">
                            <label>Zapatos</label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="zapatos"
                                value={zapatos}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div className="form-group">
                            <label>Corbata</label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="corbata"
                                value={corbata}
                               onChange={onChangeFormulario}
                            />
                        </div>
                        <div className="form-group">
                            <label>Chaqueta</label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="chaqueta"
                                value={chaqueta}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div className="form-group">
                            <label>Oberol</label>
                            <input
                                type="text"
                                className="form-control"                                
                                name="oberol"
                                value={oberol}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div className="form-group">
                            <label>Fecha de entrega</label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="cantidad"
                                name="fecha"
                                value={fecha}
                               onChange={onChangeFormulario}
                                
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
                            <h1><Link to={'/dotaciones'} >Cancelar</Link></h1>
                        </div>

            
                  </nav>
                </div>
                        
            </div>
        </div>
    </div>
        
             );
}
 
export default EditarDotacion;